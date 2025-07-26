// observ la nav#menu
const observerMenu = new MutationObserver(() => {
    const menu = document.querySelector("#menu");
    if (menu) {
        observerMenu.disconnect();
        // 1. Sélectionner les <li> de premier niveau, en excluant <li class="more">
        const firstLevelLis = Array.from(
            document.querySelectorAll('ul.level-1 > li[role="none"]')
        ).filter((li) => !li.classList.contains("more"));

        // 2. Créer une <nav class="navbar">
        const nav = document.createElement("nav");
        nav.className = "navbar";

        // 3. Traiter chaque <li> pour construire les <a>
        firstLevelLis.forEach((li) => {
            const link = li.querySelector("a.menu-item");
            if (!link) return;

            // Créer le nouvel <a>
            const newLink = document.createElement("a");
            newLink.classList.add("nav-link");

            // Ajouter la classe "current" si <li> contient "wnd-active"
            if (li.classList.contains("wnd-active")) {
                newLink.classList.add("current");
            }

            // Extraire la dernière partie du href pour l'ajouter en classe
            const href = link.getAttribute("href");
            const url = new URL(href, window.location.origin); // ✅ sécurise même les URLs relatives
            let slug = url.pathname.replace(/^\/|\/$/g, "").toLowerCase();

            // Si le slug est vide (par exemple pour /), on utilise "home"
            if (slug === "") slug = "home";

            // Nettoyer le slug pour les classes CSS valides (optionnel)
            const className = slug.replace(/[^a-z0-9\-]/gi, "-").toLowerCase();
            newLink.classList.add(className);

            // Définir les attributs et le texte
            newLink.href = href;
            if (slug == "home") {
                newLink.classList.add("logo");
                newLink.classList.remove("nav-link");
                newLink.textContent = "CHAAT MASALA";
            } else {
                newLink.textContent = link.textContent.trim();
            }
            // Ajouter au <nav>
            nav.appendChild(newLink);
        });

        // 4. Ajouter <nav> dans <div class="s-c menu-nav">
        const container = document.querySelector("div.s-c.menu-nav");
        if (container) {
            container.appendChild(nav);
        } else {
            console.warn('Div "s-c menu-nav" non trouvée.');
        }
    }
});

observerMenu.observe(document.body, {
    childList: true,
    subtree: true,
});

const slides = [
    {
        image: "https://8a89b29ad0.clvaw-cdnwnd.com/3aee5f6e285cf7d73d2016c7bb4c061b/200000625-ca8ceca8d0/paneer%20tikka-53.webp?ph=8a89b29ad0", //bouffe
        title: "Sur place ou à emporter",
        desc: `
        <p>
            Commandez du Lundi au Samedi de 9h à 21h. <br/>
            Ouvert les Vendredis et Samedis soirs sur place. <br/>
        </p>
        <button class="btn-1">
            <a href="#">
                <i class="fa-solid fa-arrow-right-long"></i> Voir plus
            </a>
        </button>
        `
    },

    {
        image: "https://8a89b29ad0.clvaw-cdnwnd.com/3aee5f6e285cf7d73d2016c7bb4c061b/200000819-11ebc11ebe/image-crop-200000644.webp?ph=8a89b29ad0", //karaoke
        title: "Karaoke familial",
        desc: `
        <p class="flex column min-gap">
        Privatisez notre restaurant pour un karaoké en famille ou entre ami(e)s pour 3h30
        <span>
            <i class="fas fa-user-tag"></i> 28€ par personne
        </span>
        <span>
            <i class="fa-solid fa-users"></i> 8 à 18 personnes max
        </span>
        <span>
            <i class="fa-solid fa-calendar-days"></i> Vendredi ou Samedi
            <i class="fa-solid fa-clock"></i> 19h-22h30
        </p>
        <button class="btn-1">
            <a href="#">
                <i class="fa-solid fa-arrow-right-long"></i> Voir plus
            </a>
        </button>
        `
    },

    {
        image: "https://8a89b29ad0.clvaw-cdnwnd.com/3aee5f6e285cf7d73d2016c7bb4c061b/200000661-6358e63590/image-crop-200000656-8.webp?ph=8a89b29ad0", //location salle
        title: "Location de Salle",
        desc: `
        <p class="flex column min-gap">
        Profitez d’un espace professionnel de 45 m², entièrement équipé, idéal pour vos formations, réunions ou ateliers. Disponible à l’heure, à la demi-journée ou à la journée

        <span>
            <i class="fa-solid fa-users"></i> 17 personnes max
            <i class="fa-solid fa-clock"></i> Tarif dégressif
        </span>
        <span>
            <i class="fa-solid fa-video"></i> Rétroprojecteur à disposition
            
        </span>
        <span>
            <i class="fa-solid fa-wifi"></i> Connexion internet Wi-Fi
        </span>
        </p>
        <button class="btn-1">
            <a href="#">
                <i class="fa-solid fa-arrow-right-long"></i> Voir plus
            </a>
        </button>
        `
    },

    {
        image: "https://8a89b29ad0.clvaw-cdnwnd.com/3aee5f6e285cf7d73d2016c7bb4c061b/200000851-8688a8688d/speed-dating.webp", //speed dating
        title: "Speed Dating",
        desc: "Rencontrez de nouvelles personnes en un temps limité."
    }
];

let numero = 0;

// function ChangeSlide(sens) {
//     numero = (numero + sens + slides.length) % slides.length;
//     const slideData = slides[numero];

//     if (numero < 0)
//         numero = slides.length - 1;
//     if (numero > slides.length - 1)
//         numero = 0;

//     document.getElementById("slide").src = slideData.image;
//     document.getElementById("slide-title").textContent = slideData.title;
//     document.getElementById("slide-desc").innerHTML = slideData.desc;
// }

function ChangeSlide(sens) {
    const slideImg = document.getElementById("slide");
    const caption = document.getElementById("slide-caption");

    // Commence fade-out
    slideImg.classList.remove("show");
    caption.classList.remove("show");

    // Laisse le temps au fade-out de se faire
    setTimeout(() => {
        numero = (numero + sens + slides.length) % slides.length;
        const slideData = slides[numero];

        // Change le contenu
        slideImg.src = slideData.image;
        document.getElementById("slide-title").textContent = slideData.title;
        document.getElementById("slide-desc").innerHTML = slideData.desc;

        // Quand l'image est chargée, fait le fade-in
        slideImg.onload = () => {
            slideImg.classList.add("show");
            caption.classList.add("show");
        };
    }, 200); // doit correspondre au `transition` du CSS
}

// setInterval("ChangeSlide(1)", 6000);
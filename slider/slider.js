const slides = [
    {
        isHero: true,
        image: "https://8a89b29ad0.clvaw-cdnwnd.com/3aee5f6e285cf7d73d2016c7bb4c061b/200000839-72e8a72e8c/pexels-saveurssecretes-7625056.webp?ph=8a89b29ad0",
        title: "",
        desc: `
            <div class="hero">
                <h2 class="hero-title">CHAAT MASALA</h2>
                <p class="hero-sent">Une pincée d’Inde, un zeste de Réunion et uniquement du fait-maison</p>
                <p class="hero-und">BAR NAAN / DOSA</p>
            </div>
        `
    },

    {
        image: "https://8a89b29ad0.clvaw-cdnwnd.com/3aee5f6e285cf7d73d2016c7bb4c061b/200000625-ca8ceca8d0/paneer%20tikka-53.webp?ph=8a89b29ad0", //bouffe
        title: "Sur place ou à emporter",
        desc: `
        <p>
            Commandez du Lundi au Samedi de 9h à 21h. <br/>
            Ouvert les Vendredis et Samedis soirs sur place. <br/>
        </p>
        <button class="btn-1">
            <a href="https://www.chaatmasalarestoindien.com/la-carte-sur-place/">
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
            <a href="https://www.chaatmasalarestoindien.com/karaoke-familial-12-a-18-pers/">
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
            <a href="https://www.chaatmasalarestoindien.com/location-de-salle/">
                <i class="fa-solid fa-arrow-right-long"></i> Voir plus
            </a>
        </button>
        `
    },

    {
        image: "https://8a89b29ad0.clvaw-cdnwnd.com/3aee5f6e285cf7d73d2016c7bb4c061b/200000851-8688a8688d/speed-dating.webp", //speed dating
        title: "Speed Dating",
        desc: `
        <p>
            Rencontrez de nouvelles personnes en un temps limité.
        </p>
        `
    }
];

let numero = 0;
let intervalID;
let firstSlideShown = false;
let isChanging = false;
let isTouching = false;
let touchStartX = 0;

const slideImg = document.getElementById("slide");
const caption = document.getElementById("slide-caption");
const progressContainer = document.getElementById("slide-progress");

function updateProgressBars() {
    progressContainer.innerHTML = "";
    slides.forEach((_, index) => {
        const bar = document.createElement("div");
        bar.classList.add("progress-bar");
        if (index === numero) bar.classList.add("active");
        progressContainer.appendChild(bar);
    });
}

function resetInterval(delay) {
    clearInterval(intervalID);
    intervalID = setInterval(() => ChangeSlide(1), delay || 6000);
}

function ChangeSlide(sens = 1) {
    if (isChanging) return;

    // Après la première slide, on passe à 6s
    firstSlideShown = true;
    resetInterval(6000);

    isChanging = true;
    slideImg.classList.remove("show");
    caption.classList.remove("show");

    setTimeout(() => {
        numero = (numero + sens + slides.length) % slides.length;
        const slide = slides[numero];

        slideImg.dataset.loaded = "true";
        slideImg.src = slide.image;

        if (slide.isHero) {
            caption.classList.add("hero-slide");
            caption.classList.remove("standard-caption");
            document.getElementById("slide-title").classList.add("hero-title");
        } else {
            caption.classList.add("standard-caption");
            caption.classList.remove("hero-slide");
            document.getElementById("slide-title").classList.remove("hero-title");
        }

        document.getElementById("slide-title").textContent = slide.title || "";
        document.getElementById("slide-desc").innerHTML = slide.desc;

        slideImg.onload = () => {
            slideImg.classList.add("show");
            caption.classList.add("show");
            isChanging = false;
        };

        updateProgressBars();
    }, 200);
}

function setupSwipe() {
    const slider = document.getElementById("slider");
    slider.addEventListener("touchstart", (e) => {
        isTouching = true;
        touchStartX = e.touches[0].clientX;
    });
    slider.addEventListener("touchend", (e) => {
        if (!isTouching) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchEndX - touchStartX;

        if (diffX > 50) ChangeSlide(-1);
        else if (diffX < -50) ChangeSlide(1);

        isTouching = false;
    });
}

// Hide arrows on mobile
function handleArrowVisibility() {
    const arrows = [document.getElementById("precedent"), document.getElementById("suivant")];
    const isMobile = window.innerWidth <= 768;
    arrows.forEach(arrow => arrow.style.display = isMobile ? "none" : "block");
}

window.addEventListener("resize", handleArrowVisibility);

// Supprimez l'appel initial ChangeSlide(0) et remplacez-le par :
document.addEventListener("DOMContentLoaded", () => {
    const slide = slides[0];
    document.getElementById("slide-title").textContent = slide.title || "";
    document.getElementById("slide-desc").innerHTML = slide.desc;
    slideImg.src = slide.image;
    updateProgressBars();

    // Première fois : interval à 9s, puis 6s pour la suite
    resetInterval(9000);
    firstSlideShown = true;

    setupSwipe();
    handleArrowVisibility();
});

const slides = [
    {
        image: "https://8a89b29ad0.clvaw-cdnwnd.com/3aee5f6e285cf7d73d2016c7bb4c061b/200000625-ca8ceca8d0/paneer%20tikka-53.webp?ph=8a89b29ad0", //bouffe
        title: "Paneer Tikka",
        desc: "Un plat indien savoureux au fromage grillé."
    },

    {
        image: "https://8a89b29ad0.clvaw-cdnwnd.com/3aee5f6e285cf7d73d2016c7bb4c061b/200000819-11ebc11ebe/image-crop-200000644.webp?ph=8a89b29ad0", //karaoke
        title: "Karaoke",
        desc: "Chantez vos chansons préférées avec des amis."
    },

    {
        image: "https://8a89b29ad0.clvaw-cdnwnd.com/3aee5f6e285cf7d73d2016c7bb4c061b/200000661-6358e63590/image-crop-200000656-8.webp?ph=8a89b29ad0", //location salle
        title: "Location de Salle",
        desc: "Réservez une salle pour vos événements."
    },

    {
        image: "https://raw.githubusercontent.com/SohamHUG/chaat_masala/refs/heads/main/slider/speed-dating.jpg", //speed dating
        title: "Speed Dating",
        desc: "Rencontrez de nouvelles personnes en un temps limité."
    }
];

let numero = 0;

function ChangeSlide(sens) {
    numero = (numero + sens + slides.length) % slides.length;
    const slideData = slides[numero];

    if (numero < 0)
        numero = slides.length - 1;
    if (numero > slides.length - 1)
        numero = 0;

    document.getElementById("slide").src = slideData.image;
    document.getElementById("slide-title").textContent = slideData.title;
    document.getElementById("slide-desc").innerHTML = slideData.desc;
}

setInterval("ChangeSlide(1)", 6000);
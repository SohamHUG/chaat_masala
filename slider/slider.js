const slide = [
    "https://8a89b29ad0.clvaw-cdnwnd.com/3aee5f6e285cf7d73d2016c7bb4c061b/200000819-11ebc11ebe/image-crop-200000644.webp?ph=8a89b29ad0", //karaoke
    "https://8a89b29ad0.clvaw-cdnwnd.com/3aee5f6e285cf7d73d2016c7bb4c061b/200000661-6358e63590/image-crop-200000656-8.webp?ph=8a89b29ad0", //location salle
    "https://8a89b29ad0.clvaw-cdnwnd.com/3aee5f6e285cf7d73d2016c7bb4c061b/200000625-ca8ceca8d0/paneer%20tikka-53.webp?ph=8a89b29ad0", //bouffe
    "prairie-alpes.jpg"
];

let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

setInterval("ChangeSlide(1)", 4000);
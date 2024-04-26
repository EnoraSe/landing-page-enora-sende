const downloadBtn = document.getElementById('download-btn');
const coinAudio = document.getElementById('coin-audio');

downloadBtn.addEventListener('click', function() {
    coinAudio.play();
    // Ajoutez ici le code pour le retour visuel, par exemple :
    downloadBtn.style.backgroundColor = '#D61974'; // Change la couleur du bouton lorsqu'il est cliqué
});


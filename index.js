document.addEventListener('DOMContentLoaded', (event) => {
    const coinAudio = document.getElementById('coin-audio');
  
    const playAudio = () => {
      coinAudio.play();
    };
  
    const pauseAudio = () => {
      coinAudio.pause();
      coinAudio.currentTime = 0; // Remet l'audio au début
    };
  
    // Récupérez le bouton et l'image GIF par leurs classes
    const downloadButton = document.querySelector('.btn-download-now');
    const coinGif = document.querySelector('.coin-img img'); // Assurez-vous que la classe 'coin-img' est celle de votre div entourant le GIF
  
    downloadButton.addEventListener('mouseover', playAudio);
    downloadButton.addEventListener('mouseout', pauseAudio);
    coinGif.addEventListener('mouseover', playAudio);
    coinGif.addEventListener('mouseout', pauseAudio);
  });

  document.documentElement.style.setProperty('--animate-duration', '1s');





  
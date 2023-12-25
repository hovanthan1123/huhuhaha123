let currentSong = 0;
const music=document.querySelector('#audio');
const seekbar=document.querySelector('.seek-bar');
const artist=document.querySelector('.artist');
const songname=document.querySelector('.song-name');
const boxdisk=document.querySelector('.box-disk');
const currenttime=document.querySelector('.current-time');
const musictime=document.querySelector('.music-time');
const btnplay=document.querySelector('.btn-play');

btnplay.addEventListener('click',()=>{
    btnplay.classList.toggle('pause');
    boxdisk.classList.toggle('play');
});

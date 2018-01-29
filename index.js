var playBtn = document.getElementById('play')
var pauseBtn = document.getElementById('pause')
var stopBtn = document.getElementById('stop')
var nextBtn = document.getElementById('next')
var fileName = document.getElementById('fileName')
const audio = document.querySelector('audio')
var songs = ["audio/Heavy.mp3", "audio/Half_Pipe.mp3", "audio/Rocker_Chicks.mp3"]



var i = 1;

	fileName.innerHTML = songs[i-1];
	audio.addEventListener('ended', function(){
	document.querySelector('audio').src = songs[i];
	audio.load();
	console.log(songs[i])
	song_playing.innerHTML = songs[i]
	i++;
	if (i>=songs.length){
		i=0;
	}
});

var jukebox = {
	

	playButton: function(){
	audio.play()
	},

	pauseButton: function(){
		audio.pause()
	},

	nextButton: function(){
	document.querySelector('audio').src = songs[i];
	audio.load();
	console.log(songs[i])
	fileName.innerHTML = songs[i]
	i++;
	if (i>=songs.length){
		i=0;
	}
	},
}





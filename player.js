var player = new Plyr("#player",{
    controls: ["play",'progress', 'current-time', 'mute',"fullscreen","volume","settings"],
    invertTime: false,
    keyboard:{
        focused:false,
        global: false,
    },

});

// 비디오 플레이중 처리할 것들.. 현재 재생위치 저장?
player.on('timeupdate', function(e) {
    document.querySelector('#current').textContent = e.detail.plyr.currentTime + ' / ' + player.duration;
});

player.on('ended',function(e){
    alert("영상끝");
})

document.querySelector("#go_btn").addEventListener("click",function(e){
   player.pause();
   player.currentTime = 60;
   player.play();
});

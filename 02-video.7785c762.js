!function(){var e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)}));o.on("timeupdate",(function(e){console.log(e)}))}();
//# sourceMappingURL=02-video.7785c762.js.map

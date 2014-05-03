if (window.location.href.indexOf('pluss/closed') !== -1) {
	var c = document.getElementsByClassName('video-closed')[0];
	var videoid = getURLParameter('id');
	if (videoid) {
		c.innerHTML = '<div class="player-container"><object type="application/x-shockwave-flash" data="/img/player/kanal2PlayerPLUSS4.swf" width="100%" height="561" id="videoPlayerContentMain" style="visibility: visible;"><param name="scale" value="exactFit"><param name="salign" value="c"><param name="menu" value="false"><param name="allowFullScreen" value="true"><param name="wmode" value="opaque"><param name="flashvars" value="playerSettingsURL=/video/playernormalsettingsapi?nocache=1399146247%26vid=' + videoid + '%26telecastid=1890%26additional=1%26a=1&amp;videoId=' + videoid + '&amp;telecastId=1890&amp;autoPlay=true"></object></div>';
		document.getElementsByClassName('join')[0].innerHTML = '';
	}
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}
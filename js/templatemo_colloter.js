

var rot = 0; // 角度
var Rtime; // 定时器的名称
function startSpin() {
	Rtime = window.setInterval(begin, 10);
}

function stopSpin() {
	window.clearInterval(Rtime);
}

function begin(Rtime) {
	document.getElementById("rotating-img").style.transform = "rotatez(" + rot + "deg)";
	if(rot > 360) {
		rot = 0;
	} else {
		rot += 1;
	}

}

/* 音乐播放 */


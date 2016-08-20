var readngpart = 1;
window.addEventListener('load', function(event){
	var elem = document.querySelector('#text');
	elem.addEventListener('scroll', scrollText, false);
	loadText();
});
function loadText(){
	var req = new XMLHttpRequest();
	req.open('GET', 'scroll' + (readngpart+1) + '.txt');
	req.onreadystatechange = function(event){
		if( req.readyState === 4 ){
			var text  = document.querySelector('#text')
			if(req.status == 200){
				text.innerHTML += req.responseText;
				readngpart ++;
			}
		}	
	}
	req.send();
}
//clientHeight : 要素の高さ
//scrollHeight : 要素に内包されているものの高さ
//scrollTop: 現在の上位置
//scrollHeightと現在の高さが要素の高さを上回ったらloadTextを実行する


function scrollText(event){
	var text = event.currentTarget;	
	var output = document.querySelector('#output');
	var ss = text.scrollHeight - text.scrollTop;
	output.innerHTML = 'H' + text.clientHeight + 'SH:' + text.scrollHeight + 'ST:' + text.scrollTop + ' SS:' + ss;
	if(ss <= text.clientHeight) {
		loadText();
	}
}
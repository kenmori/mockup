/**
 * Created by No51 on 2016/08/07.
 */
var socket = new WebSocket("ws://localhost:1337/");
window.onload = function(){
	socket.onmessage = function(event){//サーバーからメッセージが送信されたら
		document.forms[0].messages.value = document.forms[0].messages.value + '\r\n' + event.data;
	}
}

function sendMessage(){
	socket.send(JSON.stringify(
		{
			"text": document.forms[0].messageText.value,
			"author": document.forms[0].authorName.value
		}
	));
}

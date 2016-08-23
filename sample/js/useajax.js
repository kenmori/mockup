window.addEventListener('load', function(event){
	var elem = document.getElementById('btn_loadtext');
	elem.addEventListener('click', loadText, false);
});
function loadText(event){
	var req = new XMLHttpRequest();
	req.open('GET', 'ajax.txt', false);
	//3 非同期フラグ(通信中処理を停止するかどうか)
	req.onreadystatechange = function(event){
		//readyStateプロパティが変更するたびに呼び出されるイベントハンドラ
		if(req.readyState === 4){//現在のリクエスト状態
			//0 openメソッド呼び出し前 //1 sendメドッド呼び出し前
			//2 sendメソッド呼び出し後 //3 ダウンロード中
			//4 通信完了
			//req.responseText /リクエストに対するテキスト形式の応答 or null
			var text = document.querySelector('#text');
			if(req.status == 200){//リクエストに対するHTTTPresultcode
				//statusText //HTTPresultcodeに対するテキストメッセージ
				text.innerHTML = req.responseText;
			} else {
				text.innerHTML = '読み込みエラー'
			}
		}
	}
	req.send();
	//通信した後JSで他の処理が実行できる
	//その間もbackgroundではイベントは進行していて状況が変わったらXMLHTTPRequestオブジェクトにreadystatechangeイベントが発生する
	//XMLHTTPRequest.addEventListenerは一部のブラウザで使えないためonreadystatechangeを利用する

}
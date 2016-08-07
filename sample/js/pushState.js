/**
 * Created by No51 on 2016/08/07.
 */
window.onpopstate = function(event){//ブラウザの戻るや進むボタンで移動がされた場合発火
	if(event.state == undefined){
		showDetail(0);
	} else {
		showDetail(event.state.detailNo);//stateオブジェクトから詳細情報番号を取得表示
	}
}

function pushStateAndShowDetail(_detailNo){
	history.pushState({"detailNo": _detailNo}, '', '#' + _detailNo);
	//第1引数。keyにstateの名前と値のあるobject。
	//第2引数 <title>
	//第3引数 url。ここだけ省略可能。その場合urlだけは変わらず履歴だけひっそり追加される。今回はブックマーク対応
	showDetail(_detailNo);
}



window.onload = function(){
	if(location.hash.length > 1) {
		showDetail(parseInt(location.hash.substring(1)));
	}
}

function showDetail(_detailNo){
	var target = document.getElementById('detail');
	switch (_detailNo) {
		case 0:
			target.innerText = "詳細がここに表示されます";
			break;
		case 1:
			target.innerText = "アイテム1の詳細です";
			break;
		case 2:
			target.innerText = "アイテム2の詳細です";
			break;
	}
}


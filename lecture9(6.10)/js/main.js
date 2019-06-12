var p;
function init() { // 문서가 완전히 로드되었을 때 호출
	p = document.getElementById("p");
	p.onmouseover = over("orchid"); // over()를 onmouseover 리스너로 등록
	p.onmouseout = out("blue"); // out()를 onmouseout 리스너로 등록
}
function over(a) {
	p.style.backgroundColor=this.a;
}
function out(b) {
	p.style.backgroundColor=b;
}
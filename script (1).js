const bts = document.getElementById("changeText");
const btn = document.querySelector(".st");
const ws = document.querySelector(".welcom");



bts.onclick = function(){
  let colors = ['pink'];
  document.body.style.backgroundColor = colors;
  btn.classList.add("we_st");
  ws.classList.add("welcom_st");
}







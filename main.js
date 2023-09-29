function add1(){
   const freshElement = document.createElement("form");
  
const html = `<input type="checkbox" name="" id="" onclick="click1()">
  <textarea name="" id="" cols="35" rows="1"></textarea>`;
  
freshElement.innerHTML = html;
document.querySelectorAll(".list")[0].append(freshElement);

}



function add2(){
   const freshElement = document.createElement("form");
  
const html = `<input type="checkbox" name="" id="" onclick="click1()">
  <textarea name="" id="" cols="35" rows="1"></textarea>`;
  
freshElement.innerHTML = html;
document.querySelectorAll(".list")[1].append(freshElement);

}





 


function click1(){
  for(let i=0; i<=1000000000; i++){
const k = document.querySelectorAll("input")[i];
    if (k.checked==true) {

  document.querySelectorAll("textarea")[i].classList.add('other');
  } else {
document.querySelectorAll("textarea")[i].classList.remove("other");
}}}



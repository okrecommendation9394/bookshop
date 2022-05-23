"use strict";
/*let shopName=document.createElement('div');
shopName.innerHTML='BookShop';
document.getElementById('name').appendChild(shopName);*/
for(let i=0; i<10; i++){
  let buttons='';
  let btn= document.createElement("button");
  btn.type='button';
  btn.name='learn';
  btn.id="moreBtn";
  btn.onclick = function(){
    alert(arr[i]['info']);
  }
  btn.innerHTML="Learn More";
  document.getElementById('myButtons').appendChild(btn);
};
let arr=[];
document.getElementById('moreBtn').addEventListener('click', $.getJSON());
$.getJSON('books.json', function(json){
  //let arr=[];
  for(let key in json){
    if(json.hasOwnProperty(key)){
      let item = json[key];
      arr.push({
        'info':item['description']
      });
    }

  }
 // console.log(arr);
});
console.log(arr);
function CustumAlert(){
  this.render = function(){

  }
  this.ok = function(){

  }
}
let Alert=new CustumAlert();
const draggables=document.querySelectorAll('.each');
const containers=document.querySelectorAll('.dragBox');
console.log(containers);

draggables.forEach(draggable =>{
  draggable.addEventListener('dragstart', () => {
    console.log('aaaa');
    draggable.classList.add('dragging')
  })
  draggable.addEventListener('dragend', ()=>{
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e=>{
    console.log('drag over');
    e.preventDefault();
    const draggable=document.querySelector('.dragging');
    container.appendChild(draggable);
  })
})
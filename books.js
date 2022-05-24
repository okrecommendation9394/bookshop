'use strict';
let header=document.createElement('div');
header.id='header';
let heading=document.createElement('h1');
heading.innerHTML='BookShop';
let orderBtn=document.createElement('button');
orderBtn.innerHTML='Order';
orderBtn.id='order';
let price=document.createElement('div');
//price.innerHTML=`Total: ${sum} Dollars`
//price.id='price';
document.getElementById('draggable').appendChild(header);
document.getElementById('header').appendChild(heading);
document.getElementById('header').appendChild(orderBtn);
//document.getElementById('header').appendChild(price);
orderBtn.onclick=function(){
    // let form=document.createElement()
}
let arr=[];
$.getJSON('books.json', function(json){
    for(let key in json){
      if(json.hasOwnProperty(key)){
        let item = json[key];
        arr.push({
          'image':item['imageLink'],
          'name':item['title'],
          'author':item['author'],
          'price': item['price'],
          'description':item['description']
        });
      }
  
    }
    let sum=0;
    let price=document.createElement('div');
    price.id='price';
    document.getElementById('draggable').appendChild(price);
    price.innerHTML=`Total: ${sum} Dollars`
    for(let i=0; i<10; i++){
        let elem=document.createElement('div');
        elem.classList.add('each');
        elem.innerHTML=`
        <div>${arr[i]['name']}</div>
        <div>${arr[i]['author']}</div>
        <div>${arr[i]['price']} Dollars</div>
        <img src=${arr[i]['image']}>
        `
        let btn=document.createElement('button');
        btn.innerHTML='Show more';
        btn.id='mybtn'
        btn.onclick=function(){
            let overlay=document.createElement('div');
            overlay.id='overlay';
            let pop=document.createElement('div');
            pop.id='mainpop';
            let summery=document.createElement('div');
            summery.id='popup';
            summery.innerHTML=arr[i]['description'];
            let closeBtn=document.createElement('button')
            closeBtn.innerHTML='&times';
            closeBtn.id='close_button';
            document.getElementById('draggable').appendChild(pop);
            document.getElementById('mainpop').appendChild(closeBtn);
            document.getElementById('mainpop').appendChild(summery);
            document.getElementById('wrapper').appendChild(overlay);
            closeBtn.onclick=function(){
                pop.remove();
                overlay.remove();
            }
        }

        let add=document.createElement('button');
        add.innerHTML='Add to bag';
        add.id='add';
        add.onclick=function(){
            sum+=arr[i]['price'];
            price.innerHTML=`Total: ${sum} Dollars`;
            elem.classList.add('dragged');
        }


        document.getElementById('draggable').appendChild(elem);
        document.getElementById('draggable').appendChild(btn);
        document.getElementById('draggable').appendChild(add);

    }
    let bag=document.createElement('div');
    bag.id='cart';
    document.getElementById('wrapper').appendChild(bag);
  });

'use strict';
const orderForm=document.createElement('div');
orderForm.classList.add('order_form');
orderForm.innerHTML=`
     <form class='form_order' action='' method='myform'>
     <h3>Confirm Order</h3>
     <fieldset class='order-set'>
     <legend class='legend-first'>Customer details:*</legend>

     <div class='name-field'>
     <label class='name-label' for='user-name'>Name:*</label>
     <input class='name-input'
     id='user-name'
     type='text'
     name='name'
     placeholder='4 symbols or more'
     minlength='4'
     required>
     </div>

     <div class=''name-field'>
     <label class='name-label' for='user-surname'>Surname:*</label>
     <input class='name-input'
     id='user-surname'
     type='text'
     name='surname'
     placeholder='5 symbols or more'
     minlength='5'
     required>
     </div>

     <div class='name-field'>
     <label class='name-label' for='delivery'>Delivery date:*</label>
     <input class='name-input'
     id='delivery'
     type='date'
     name='date'
     required>
     </div>

     <div class='name-field'>
     <label class='name-label' for='street'>Street:*</label>
     <input class='name-input'
     id='street'
     type='text'
     name='adress'
     placeholder='5 symbols or more'
     minlength='5'
     required>
     </div>

     <div class='name-field'>
     <label class='name-label' for='house'>House number:*</label>
     <input class='name-input'
     id='house'
     type='number'
     name='home'
     placeholder='numbers only'
     required>
     </div>

     <div class='name-field'>
     <label class='name-label' for='flat'>Flat number:*</label>
     <input class='name-input'
     id='flat'
     type='number'
     name='apartament'
     placeholder='numbers only'
     required>
     </div>
     </fieldset>

     <fieldset class='order-set'>
     <legend class='legend-first'>Payment type:*</legend>
     <div class='radio-field'>
     <label for='card'>Card</label>
     <input class='radio-input'
     type='radio'
     name='pay'
     value='card'
     id='card'>
     </div>

     <div class='radio-field'>
     <label for='cash'>Cash</label>
     <input class='radio-input'
     type='radio'
     name='pay'
     value='cash'
     id='cash'>
     </div>
     
     </fieldset>
     <fieldset class='order-set'>
     <legend class='legend-first'>Choose 2 gifts:</legend>
     <div class='check'>
     <label for='pack'>Pack as a gift</label>
     <input class='check-input'
     type='checkbox'
     name='gift'
     id='pack'>
     </div>

     <div class='check'>
     <label for='postcard'>Add postcard</label>
     <input class='check-input'
     type='checkbox'
     name='gift'
     id='postcard'>
     </div>

     <div class='check'>
     <label for='discount'>Provide 2% discount to the next time</label>
     <input class='check-input'
     type='checkbox'
     name='gift'
     id='discount'>
     </div>

     <div class='check'>
     <label for='pen'>Branded pen or pencil</label>
     <input class='check-input'
     type='checkbox'
     name='gift'
     id='pen'>
     </div>
     </fieldset>
     <button class="complete_button" type="submit" disabled>
     Complete
   </button>
     </form>
`

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
  document.getElementById('wrapper').appendChild(orderForm);

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
    let bag=document.createElement('div');
    bag.id='cart';
    document.getElementById('wrapper').appendChild(bag);
let sth=[];

    for(let i=0; i<10; i++){
        let elem=document.createElement('div');
        elem.classList.add('each');
        elem.innerHTML=`
        <div>${arr[i]['name']}</div>
        <div>${arr[i]['author']}</div>
        <div>${arr[i]['price']} Dollars</div>
        <img src=${arr[i]['image']}>
        `
        sth.push({'name':arr[i]['name'],
    'author':arr[i]['author'],
    'price':arr[i]['price']});
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
        let brought=document.createElement('div');
        brought.id='brought';
        let dragged=document.createElement('div');
          dragged.id='dragged';
          let draggedBtn=document.createElement('button');
          draggedBtn.id='dragbtn';

        let add=document.createElement('button');
        add.innerHTML='Add to bag';
        add.id='add';
        add.onclick=function(){
            sum+=arr[i]['price'];
            price.innerHTML=`Total: ${sum} Dollars`;
        
        /*  let brought=document.createElement('div');
          brought.id='brought'*/
          document.getElementById('cart').appendChild(brought);

          /*let dragged=document.createElement('div');
          dragged.id='dragged';*/
          dragged.innerHTML=`${sth[i]['name']},${sth[i]['author']}, ${sth[i]['price']} Dollars`;
         /* let draggedBtn=document.createElement('button');
          draggedBtn.id='dragbtn';*/
          draggedBtn.innerHTML='&times';
          document.getElementById('brought').appendChild(draggedBtn);
          document.getElementById('brought').appendChild(dragged);
          draggedBtn.onclick=function(){
              brought.remove();
              dragged.remove();
              draggedBtn.remove();
              sum-=sth[i]['price'];
              price.innerHTML=`Total: ${sum} Dollars`;
          }
        //  document.getElementById('cart').appendChild(brought);

            
        }


        document.getElementById('draggable').appendChild(elem);
        document.getElementById('draggable').appendChild(btn);
        document.getElementById('draggable').appendChild(add);

    }
//    let bag=document.createElement('div');
//    bag.id='cart';
//    document.getElementById('wrapper').appendChild(bag);
  });


  

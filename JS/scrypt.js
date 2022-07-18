

function openMenu(){
    document.querySelector('.sidebar').style.width="200px";
}

function closeMenu(){
    document.querySelector('.sidebar').style.width="0";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


let ul= document.getElementById('orderList');


 
let btn1= document.querySelector("#btn1");
btn1.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza1 X';
    ul.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let btn2= document.querySelector("#btn2");
btn2.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza2 X';
    ul.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let btn3= document.querySelector("#btn3");
btn3.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza3 X';
    ul.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let btn4= document.querySelector("#btn4");
btn4.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza4 X';
    ul.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let btn5= document.querySelector("#btn5");
btn5.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza5 X';
    ul.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let btn6= document.querySelector("#btn6");
btn6.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza6 X';
    ul.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let btn7= document.querySelector("#btn7");
btn7.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza7 X';
    ul.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;



let pizza= document.querySelector('.product_item');
let sushiBtn= document.querySelector('#sushiBtn');
let pizzaBtn= document.querySelector('#pizzaBtn');
let product_list= document.querySelector('.product_list');

sushiBtn.onclick=function(){
    
    for(let i=1; i<8; i++){
        document.querySelector('.product_item').remove();

        let list_item=document.createElement('div');
        let img =document.createElement('img');
        let h2 =document.createElement('h2');
        let btn =document.createElement('button');
       
        
        btn.textContent='add to order';
        btn.setAttribute('id',`butn${i}`);
        h2.textContent=`sushi Name${i}`;
        img.setAttribute('src', `IMG/sushi${i}.jpg`);
        list_item.className='product_item_sushi';
        product_list.appendChild(list_item);
        list_item.appendChild(img);
        list_item.appendChild(h2);
        list_item.appendChild(btn);

    }
    let ul2= document.querySelector('.orderList1')

let butn1= document.querySelector("#butn1");
butn1.onclick= function(){
    let li = document.createElement('li');
    li.textContent='sushi1 X';
    ul2.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let butn2= document.querySelector("#butn2");
butn2.onclick= function(){
    let li = document.createElement('li');
    li.textContent='sushi2 X';
    ul.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let butn3= document.querySelector("#butn3");
butn3.onclick= function(){
    let li = document.createElement('li');
    li.textContent='sushi3 X';
    ul.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let butn4= document.querySelector("#butn4");
butn4.onclick= function(){
    let li = document.createElement('li');
    li.textContent='sushi4 X';
    ul.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let butn5= document.querySelector("#butn5");
butn5.onclick= function(){
    let li = document.createElement('li');
    li.textContent='sushi5 X';
    ul.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let butn6= document.querySelector("#butn6");
butn6.onclick= function(){
    let li = document.createElement('li');
    li.textContent='sushi6 X';
    ul.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let butn7= document.querySelector("#butn7");
butn7.onclick= function(){
    let li = document.createElement('li');
    li.textContent='sushi7 X';
    ul.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
}

pizzaBtn.onclick=function(){
    
    for(let i=1; i<8; i++){
        document.querySelector('.product_item_sushi').remove();

        let list_item=document.createElement('div');
        let img =document.createElement('img');
        let h2 =document.createElement('h2');
        let btn =document.createElement('button');
       
        
        btn.textContent='add to order';
        btn.setAttribute('id',`bttn${i}`);
        h2.textContent=`pizza Name${i}`;
        img.setAttribute('src', `IMG/pizza${i}.jpg`);
        list_item.className='product_item';
        product_list.appendChild(list_item);
        list_item.appendChild(img);
        list_item.appendChild(h2);
        list_item.appendChild(btn);

    }

    let ul2= document.querySelector('.orderList1')

let bttn1= document.querySelector("#bttn1");
bttn1.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza1 X';
    ul2.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let bttn2= document.querySelector("#bttn2");
bttn2.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza2 X';
    ul2.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let bttn3= document.querySelector("#bttn3");
bttn3.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza3 X';
    ul2.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let bttn4= document.querySelector("#bttn4");
bttn4.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza4 X';
    ul2.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let bttn5= document.querySelector("#bttn5");
bttn5.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza5 X';
    ul2.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let bttn6= document.querySelector("#bttn6");
bttn6.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza6 X';
    ul2.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
let bttn7= document.querySelector("#bttn7");
bttn7.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza7 X';
    ul2.appendChild(li);
    li.onclick=function(){
        li.remove();
    }
} ;
}



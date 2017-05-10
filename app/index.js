import { getRandomRecipe,getToppings,checkBurger } from './burger';
import { post } from './http';
/*
post('http://localhost:3000/recipes', {
    name: 'test',
    toppings: ['egg', 'steak', 'salad']
});*/


let div_item = document.getElementById('selection');
let div = document.getElementById('1')
let ul = document.createElement('ul')


/*
.forEach(topping => {
    let li = document.createElement('li');
    li.innerText = topping;
    ul.appendChild(li);
}); */

/*

let btn = document.createElement('button');
let btn_vegan=document.createElement('button');
btn.setAttribute('id','viande')
btn_vegan.setAttribute('id','vegan');
btn_vegan.innerHTML='New Recepie Vegan :';
btn.innerHTML='New Recepie :';
div.appendChild(btn);
div.appendChild(btn_vegan);

btn_vegan.addEventListener('click', displayRecipe(({vegan:true})), false);
btn.addEventListener('click', displayRecipe(({vegan:false})), false);
*/
let recipe_burger=[];

function displayRecipe(option) {
    return function(){

    
    ul.innerHTML = '';

    getRandomRecipe(option)
    .then(recipe => {
        recipe.forEach(topping => {
            recipe_burger.push(topping);
            let li = document.createElement('li');
            li.innerHTML = `<strong>${ topping }</strong>`;
            ul.appendChild(li);
        });
    })

    div.appendChild(ul);
   }
}



var newElement = document.createElement("p");
newElement.innerHTML = "You have 10 seconds to build the Burger";




var counter = 10;
let intervalNew;
var id;
let startBtn = document.querySelector('.burger button');
startBtn.addEventListener('click', () => {
  //  intervalNew = setInterval(displayRecipe(({vegan:false})), 10000);
    startBtn.parentNode.appendChild(newElement);
    id = setInterval(function() {
    counter--;
    if(counter < 0) {
        startBtn.style.visibility = 'initial';
        clearInterval(id);
        newElement.innerHTML='';
        div_item.innerHTML='';
    } else {
        newElement.innerHTML = "You have " + counter.toString() + " seconds to build the Burger";
    }
}, 1000);
    getRandomRecipe(({vegan:false})).then(displayRecipe(({vegan:false})));
    startBtn.style.visibility = 'hidden';
}, false);

let recipeList = document.querySelector('.recipe');

/*
function displayRecipes(recipe) {
    recipeList.innerHTML = recipe
    .map(topping => `<li>${ topping }</li>`)
    .join('');
}*/
let burger=[];

let toppingsList = document.querySelector('.toppings');
       
    getToppings().then(toppings => {
        toppings.forEach(topping => {
            const btn_ingr=document.createElement('button');
            btn_ingr.className ='btn';
            btn_ingr.innerText = topping.name;
            toppingsList.appendChild(btn_ingr);
            
            btn_ingr.addEventListener('click', function(){
               
                div_item.innerHTML+=this.innerHTML+'<br>';
                burger.push(this.innerText);
                if (checkBurger(burger,recipe_burger)==='valid'){
                        div_item.innerHTML+='Succes!';
                    }
                if(checkBurger(burger,recipe_burger)==='invalid'){
                    div_item.innerHTML+='Erreur!';
                }

                
                
            } ,false)
        });
        
    })




   





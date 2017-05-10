import { get } from './http';

/*
let toppings = [
    'egg', 
    'cheese', 
    'salad', 
    'onion', 
    'steak', 
    'chicken', 
    'bacon', 
    'fish', 
    'pickle', 
    'mayo', 
    'ketchup'
];*/
export function getRandomRecipe(option) {
    let p = getToppings();

        if (option.vegan){
       p= p.then(toppings => toppings.filter (t =>t.vegan===option.vegan));
        }
    
    return p.then(toppings => toppings
    .map( t => t.name ))
    .then(toppings => [...toppings, ...toppings])    
    .then(buildRecipe);
    
    
}

let toppingsCache;
export function getToppings() {
    return toppingsCache
        ? Promise.resolve(toppingsCache)
        : get('http://10.1.0.83:3000/toppings')
            .then(toppings => {
                toppingsCache = toppings;
                return toppingsCache;
            });
}

function getRandomNbToppings(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}


function buildRecipe(doubleToppings) {
    let nbToppings = getRandomNbToppings(3, 6);
    let recipe = [];

    for (let i = 0; i < nbToppings; i++) {
        let j = Math.floor(Math.random() * doubleToppings.length);
        let randomTopping = doubleToppings.splice(j, 1);
        recipe.push(randomTopping[0]); 
    }
    return recipe;
}
 export function checkBurger(burger,recipe) {
    for(let i = 0;i<burger.length;i++){
         if (burger[i]!==recipe[i]){
                return 'invalid';
     }
     if ( burger.length===recipe.length){
          return 'valid';
     }

     
 }return 'running';}

    // let counters = {};

    // while (recipe.length < nbToppings) {
    //     let i = Math.floor(Math.random() * toppings.length);
    //     let randomTopping = toppings[i];
    //     let c = counters[randomTopping] || 0;
    //     if (c < 2) {
    //         counters[randomTopping] = c + 1;
    //         recipe.push(randomTopping);
    //     }
    // }
    
    
//let h1_list_section = document.createElement('h1');
//let ol_list_section = document.createElement('ol');
//$('#list_section').append('<h1 id="header">Recette :</h1><ol></ol>');
    
   /* for (let i = 0; i < nbToppings; i++) {
   //  $('ol').append('<li>'+ recipe[i] +'</li>');
 }

//$('#list_ingre').append('<h1 id="header2">Ingrédients :</h1><ul></ul>');
	let listingr_aff = [...toppings, ...toppings];
 	for (let j = 0; j < listingr_aff.length; j++) {
    // $('ul').append('<li value="'+listingr_aff[j]+'">'+ listingr_aff[j] +'</li>');
 }*/
  //  return recipe;





/*
let toppings= [
	'egg',
	'cheese',
	'salad',
	'onion',
	'steak',
	'bacon',
	'chicken',
	'fish',
	'pickle',
	'mayo',
	'ketchup'];

function getRandomRecipe(min,max){

		let recipe = { ingredients: [] };
		let nb = max-Math.floor(Math.random()*(min+1));
		for (let i=0;i<nb;i++){
			let j = Math.floor(Math.random() * toppings.length);
			let randomTopping = toppings[j];
			recipe.ingredients.push(randomTopping);			
		}
		console.log(recipe);
		console.log(recipe.ingredients);
	}
getRandomRecipe(3,6);

Math.floor(Math.random()*6);
max = 2x ingredients
3-6ingredients
checkBurger(burger,recipe);*/
	
/*
$(function() {

        var $list;
        $list = $('#list_ingre');
        let compte=0;
        $burger = $('#burger')
        $burger.on('click', 'img', function() {
          // Supprimer le <img> sur lequel vous venez de cliquer
          $(this).remove();
          compte=compte-1;
          //rajouter l'élément retiré dans la liste
         // $('ul').append('<li> '+ $(this).id.text() +'</li>')
      });

        $list.on('click', 'li', function() {
          // Supprimer le <li> sur lequel vous venez de cliquer
          $(this).remove();
          let a = 0 ; //remplacer 0 par la valeur du li
          
          if (compte ===0){
          	$('#burger').append('<img src="bun_up.jpg" ><br>');
          }
          	$('#burger').append('<img src="'+ $(this).text() +'.jpg" id="'+ $(this).text() +'" width="150px" height="150px"><br>');
          	compte= compte+1;
          if ( compte === nbToppings){
        	$('#burger').append('<img src="bun_down.jpg" >');
        }

        });
        
        
            });*/


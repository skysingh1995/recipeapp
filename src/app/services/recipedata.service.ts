import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipedataService {

  constructor() {}

  recipedata() {
   const myrecipe = {
      'recipes': [
      {
        'name': 'Tacos de queso',
        'desc': 'Deliciosos tacos de queso con algo de verduritas',
        'ingredients': [
          'Tomate en cubitos 50g',
          'Ajo 10g',
          'Queso Cheddar 35g',
          'Carne picada 80g',
          'Tortas de Maiz x5',
          'Perejil al gusto'], 'howto': 'Sofreir el ajo en una sartén, añadir la carne picada y bajar el fuego, ' +
          'cocinar hasta que se dore. Cojer la tortita y rellenarla, añadiendo primero el sofrito, el tomate cortado' +
          ' en cubitos, queso Cheddar y perejil.',
        'url': 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-461198.jpg&fm=jpg',
        'author': 'Aakash'
      },
      {
        'name': 'Pancakes con fresas',
        'desc': 'Deliciosos pancakes con fresas y crema chantilly',
        'ingredients': [
          'Fresas 50g',
          'Harina 100g',
          'Mantequilla 20g',
          'Huevos x2',
          'Crema Chantilly al gusto'
        ],
        'howto': 'Mesclar la harina con la mantequilla derretida y los huevos. ' +
        'Calentar el sartén, cocer cada pancake 2min por lado. Cortar las fresas, ponerlas por encima de las tortitas y hechar' +
        ' chantilly al gusto.',
        'url': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'author': 'Aakash'
      },
      {
        'name': 'Torturar Patata',
        'desc': 'Enséñale a una patata como descuartizas a sus amigos',
        'ingredients': [
          'Bolsa de patatas 1Kg'
        ],
        'howto': 'Coje una patata que tenga ojos y luego enséñale como pelas y cortas a todos sus amigos.',
        'url': 'https://images.pexels.com/photos/162971/potatoes-french-mourning-funny-162971.jpeg?' +
        'auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'author': 'Aakash'
      }
    ]
    };
   return myrecipe;
  }
}

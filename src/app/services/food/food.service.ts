import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag: string): Foods[] {
    return tag =="All"?
    this.getAll() : this.getAll().filter(food =>food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return[
      {name:'All'},
      {name:'FastFood'},
      {name:'Pizza'},
      {name:'Lunch'},
      // {name:'SlowFood'},
      {name:'Fry'},
      {name:'Soup'},

    ]
  }
 

  getAll():Foods[]{
    return [
     {
      id:1,
      name: 'Pizza Pepperoni',
      cookTime: '10-20',
      price:10,
      favorite:false,
    
      imageUrl:'/assets/pexels-vinicius-benedit-1082343.jpg',
      tags:['FastFood','Pizza','Lunch'],

     },
     {
      id:2,
      name: 'Veggie Pizza',
      cookTime: '10-25',
      price:16,
      favorite:false,
      imageUrl:'/assets/pexels-narda-yescas-1566837.jpg',
      tags:['Pizza','Fry'],

     },
     {
      id:3,
      name: 'Pepperoni Pizza',
      cookTime: '15-28',
      price:30,
      favorite:true,
      imageUrl:'/assets/pexels-eneida-nieves-905847.jpg',
      tags:['FastFood','Pizza','Lunch'],

     },
     {
      id:4,
      name: 'Meat Pizza',
      cookTime: '20-40',
      price:50,
      favorite:false,
      imageUrl:'/assets/pexels-horizon-content-3761662.jpg',
      tags:['FastFood','Pizza','Lunch'],

     },
     {
      id:5,
      name: 'Margherita Pizza.',
      cookTime: '25-50',
      price:60,
      favorite:true,
      imageUrl:'/assets/pexels-engin-akyurt-1435903.jpg',
      tags:['FastFood','Pizza','Soup'],

     },
     {
      id:6,
      name: 'BBQ Chicken Pizza',
      cookTime: '10-20',
      price:70,
      favorite:false,
      imageUrl:'/assets/pexels-pablo-macedo-845802.jpg',
      tags:['FastFood','Pizza','Fry'],

     },
     {
      id:7,
      name: 'Hawaiian Pizza',
      cookTime: '2-5',
      price:80,
      favorite:true,
      imageUrl:'/assets/pexels-engin-akyurt-1460873.jpg',
      tags:['FastFood','Pizza','Fry'],

     },
     {
      id:8,
      name: 'Buffalo Pizza',
      cookTime: '10-30',
      price:90,
      favorite:true,
      imageUrl:'/assets/pexels-engin-akyurt-2271194.jpg',
      tags:['FastFood','Pizza','Lunch'],

     },
     {
      id:9,
      name: 'Pizza chees Pepperoni',
      cookTime: '10-30',
      price:90,
      favorite:true,
      imageUrl:'/assets/pexels-engin-akyurt-2619967.jpg',
      tags:['FastFood','Pizza','Lunch'],

     },
     
    ];
  }
}

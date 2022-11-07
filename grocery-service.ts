//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the GroceryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceryServiceProvider {
  groceries =   [       
 /*   {
        Item: "Milk",
        Quantity: "1",
        Price: "$1.76",
        Total: "$1.76"
    },
{
  Item: "Bread",
  Quantity: "2",
  Price: "$2.12",
  Total: "$4.24"
},
{
  Item: "Blueberries",
  Quantity: "3",
  Price: "$1.98",
  Total: "$5.94"
},
{
  Item: "Large Eggs, 18 Count",
  Quantity: "1",
  Price: "$5.07",
  Total: "$5.07"
}
,
{
  Item: "Peanut Butter",
  Quantity: "1",
  Price: "$1.74",
  Total: "$1.74"
}
*/
];

  //constructor(public httpClient: HttpClient) {
  constructor() {  
    console.log('Hello GroceryServiceProvider Provider');
  }

  

  removeItem(index)
  { this.groceries.splice(index, 1);}

  loaditems()
  {
    return this.getItems()
  }

  addItem(item)
  { 
    console.log()
    let length = this.groceries.push(item);
    let quantity = this.groceries[length-1].Quantity.replace('$','')
    let price = this.groceries[length-1].Price.replace('$','')
    let priceTotal = parseFloat(price)
    let quantityTotal = parseFloat(quantity)
    let total = priceTotal * quantityTotal
    this.groceries[length-1].Total = '$'+ total.toString()
    
}

  /*  let  req = new XMLHttpRequest();
  
    req.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
         let groceryString = req.responseText
         let groceryDict = JSON.parse(groceryString)
         for (var grocery in groceryDict)
         {
          // groceriesVar = groceryDict[grocery]           
         }   
         
         
     }
   };
   //console.log(groceriesVar)
   req.open("GET", "http://localhost:5000/Grocery", true);
   req.send()  
 */
getItems()
{ 
   
  return this.groceries;
}

 editItem(item,index) 
 {
  if (item.Item !==   '')
    {
      this.groceries[index].Item = item.Item;
    }
  if (item.Quantity !==  '') 
    {    
      this.groceries[index].Quantity = item.Quantity;
    }
  if (item.Price !==   '')
    {
     this.groceries[index].Price = item.Price;
    }  
    let quantity = this.groceries[index].Quantity.replace('$','')
    let price = this.groceries[index].Price.replace('$','')
    let priceTotal = parseFloat(price)
    let quantityTotal = parseFloat(quantity)
    let total = priceTotal * quantityTotal;
    this.groceries[index].Total = '$' + total;
 }  
}
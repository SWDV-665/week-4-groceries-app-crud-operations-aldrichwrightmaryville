//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroceryServiceProvider } from '../../providers/grocery-service/grocery-service';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: GroceryServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  showItemPrompt(grocery?, index?: number) {
    const prompt = this.alertCtrl.create({
      title: grocery ?'Update Grocery Item': 'Add Grocery Item',
      message: grocery ? "Please edit item..." : "Please add Item",
      inputs: [
        {
          name: 'Item',
          placeholder: 'Name', value: grocery? grocery.Item: null
        },
        {
          name: 'Quantity',
          type: 'number',
          placeholder: 'Quantity', value: grocery? grocery.Quantity: null,
          min: 1,
          max: 10  
        },
        {
          name: 'Price',
          placeholder: 'Price', value: grocery? grocery.Price: null
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            if (index !== undefined)
             this.dataService.editItem(item,index)
            else 
            {
              console.log(item)
              this.dataService.addItem(item)
            } 
            }
        }
      ]
    });
    prompt.present();
  }
  

  
}

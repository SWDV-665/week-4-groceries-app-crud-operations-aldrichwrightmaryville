import { Component } from '@angular/core';
import { InternalNgModuleRef } from '@angular/core/src/linker/ng_module_factory';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceryServiceProvider } from '../../providers/grocery-service/grocery-service';
import { InputDialogServiceProvider} from '../../providers/input-dialog-service/input-dialog-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  



  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceryServiceProvider, public inputService: InputDialogServiceProvider) {
;

  }
  
  loadItem()
  {
    return this.dataService.getItems();
  }


  removeItem(grocery, index: number) {
      const toast = this.toastCtrl.create({
      message: 'Removing Grocery Item - ' + grocery.Item + " with Quantity " + grocery.Quantity + " at  index " + index + " ...",
      duration: 3000
    });
    toast.present();
    this.dataService.removeItem(index);
   
  }

 

  updateItem(grocery,  index: number) {
    this.inputService.showItemPrompt(grocery, index);
  }

  addItem() {
     this.inputService.showItemPrompt();
  }

  //for add, empty prompt fields. data is added on save (pushed onto array)

  
  //populates the prompt alert with the fields from the selected array item. Check for empty strings (i.e. nothing entered) before updating
 




}

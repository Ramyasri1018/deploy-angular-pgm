import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
 // name = 'Ramya';
 addToCart:number=0;
  Product={
    name: 'Vivo',
    price: 999,
    color: 'Black',
    discount : 8.5,
    inStock :5,
    pImage :'/assets/vivo.png'
  }  
  getDiscountedPrice(){
    return this.Product.price - (this.Product.price * this.Product.discount / 100)
  }
  onNameChanged(event : any){
   // this.name=event.target.value;
  }
  decrementCartValue(){
    if(this.addToCart > 0){
       this.addToCart--;
    }
  }
  incrementCartValue(){
    if(this.addToCart<this.Product.inStock){
      this.addToCart++
    }
  }
}

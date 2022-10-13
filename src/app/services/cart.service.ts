import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c => c.product.productId === product.productId) // gönderilen ürün sepette varsa o ürünü item değişkenine atadık
    if(item){
      item.quantity += 1 // gönderilen ürün sepette varsa adedini 1 arttırdık 
    }else{
      let cartItem = new CartItem();  // gönderilen ürün sepette yoksa yeni sepet elemanı oluşturduk
      cartItem.product = product // sepet elemanının ürünnü gelen ürüne eşitledik
      cartItem.quantity = 1 // adedini 1 yaptık
      CartItems.push(cartItem) // ekledik
    }
  }

  removeFromCart(product:Product){
    let item = CartItems.find(c => c.product.productId === product.productId)
    CartItems.splice(CartItems.indexOf(item), 1)
  }

  list(): CartItem[]{
    return CartItems; // sepetteki ürünleri döndürecek metod
  }
}

import { Component, computed, signal, effect} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-mini-cart',
  styleUrl: './mini-cart.css',
  templateUrl: './mini-cart.html',
})
export class MiniCart {

  private _StorageKey = 'cart_data';

  

  constructor() {
    effect(() =>{
      const value = this.count();

      if(typeof localStorage !== 'undefined'){
        localStorage.setItem(this._StorageKey,JSON.stringify(value))
      } 
    })
  }

  loadCart(): any[]{
    if(typeof localStorage === 'undefined') return [];
    const data = localStorage.getItem(this._StorageKey)
    
    return data ? JSON.parse(data) : [];
  }

 

  products = [{ id: 1, name: 'Product 1', priceCent: 1099, quantity: 1 },
              { id: 2, name: 'Product 2', priceCent: 1999, quantity: 2 },
              { id: 3, name: 'Product 3', priceCent: 599, quantity: 1 },
              { id: 4, name: 'Product 4', priceCent: 1599, quantity: 3 },
              { id: 5, name: 'Product 5', priceCent: 899, quantity: 2 }
  ]

   cart = signal<any[]>(this.loadCart()); 
   count = computed(() => this.cart().length)

  addToCart(product: any) {
    this.cart.update(c => [...c, product] )
  }
  removeFromCart(index: number) {
    this.cart.update((c) => {
       return c.filter((_, i) =>{
        return  i !== index;
      })
    })
  }
  cartTotal = computed(() =>{
  const totalPrice = this.cart().reduce((acc, item) => acc + (item.priceCent || 0) , 0)
  
    return (totalPrice / 100).toFixed(2);
  
  });

};


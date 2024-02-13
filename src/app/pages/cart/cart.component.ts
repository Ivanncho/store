import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/Models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

  cart: Cart = {
    items: [{
      product: 'https://via.placeholder.com/150',
      name: "Nike Air Max 90",
      price: 150,
      quantity: 1,
      id: 1
    },
    {
      product: 'https://via.placeholder.com/150',
      name: "Nike Air Force 1",
      price: 150,
      quantity: 3,
      id: 2
    },
    {
      product: 'https://via.placeholder.com/150',
      name: "Adidas Samba",
      price: 150,
      quantity: 1,
      id: 3
    },
    {
      product: 'https://via.placeholder.com/150',
      name: "New Balance 470",
      price: 150,
      quantity: 2,
      id: 4
    },]
  };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCartItem(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void{
    this.cartService.addToCart(item);
  }
  onRemoveQuantity(item: CartItem): void{
    this.cartService.removeQuantity(item);
  }

}

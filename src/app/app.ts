import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MiniCart} from './mini-cart/mini-cart';

@Component({
  imports: [RouterOutlet, MiniCart],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Mini-Cart-System');
}

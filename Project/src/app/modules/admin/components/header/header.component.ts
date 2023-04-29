import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  constructor(private auth: AuthService, private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }
  logout(): void {
    this.auth.logout();
  }
}

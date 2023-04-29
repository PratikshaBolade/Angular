import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList: any;
  public filterCategory: any
  constructor(private ps: ProductServiceService, private cart: CartService) { }

  ngOnInit(): void {
    this.ps.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        if (a.category === "Women" || a.category === "Men") {
          a.category = "fashion";
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }
  addtoCart(item: any) {
    this.cart.addtoCart(item);
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    })
  }
}





// 1.
import { Component, OnInit } from "@angular/core";
import { Product, Products } from "./app.product.models";
import { CommunicationService } from "./app.communication.service";
// 2.
@Component({
  selector: "app-prdreceiver-component",
  template: `
   <div class="container">
     <h2>
     <strong>
     Products List for Category:{{CatId}}
     </strong>
     </h2>

  <table class="table table-bordered table-striped">
          <thead>
              <tr>
              <td>Product Id</td>
                <td>Product Name</td>
                <td>Category Id</td>
              </tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of FilterProducts">
            <td>{{p.ProdId}}</td>
            <td>{{p.ProdName}}</td>
            <td>{{p.CatId}}</td>
            </tr>
          </tbody>
       </table>
       </div>
    `
})
export class ProductReceiverComponent implements OnInit {
  // 3.
  prd: Product;
  prds = Products;
  CatId: number;
  private _FilterProducts: Array<Product>;
  constructor(private serv: CommunicationService) {
    this.prd = new Product(0, "", 0);
    this.CatId = 0;
    this._FilterProducts = new Array<Product>();
  }

  // 4.
  ngOnInit() {
    this.serv.receivedFilter.subscribe((param: number) => {
      this.CatId = param;
    });
  }

  // 5.
  get FilterProducts(): Array<Product> {
    this._FilterProducts = new Array<Product>();
    if (this.CatId > 0) {
      this.prds.forEach(p => {
        if (p.CatId === this.CatId) {
          this._FilterProducts.push(p);
        }
      });
    } else {
      this._FilterProducts = this.prds;
    }
    return this._FilterProducts;
  }
}

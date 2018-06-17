// 1.
import { Component, OnInit } from "@angular/core";
import { Category,Categories } from "./app.category.model";
import { CommunicationService } from "./app.communication.service";
// 2.
@Component({
    selector: "app-catsender-component",
    template: `
       <div class="container">
         <h2><strong>Category List</strong> </h2>

       <table class="table table-bordered table-striped">
          <thead>
              <tr>
                <td>Category Id</td>
                <td>Category Name</td>
              </tr>
          </thead>
          <tbody>
            <tr *ngFor="let c of cats" (click)="getSelectedCategory(c)">
               <td>{{c.CatId}}</td>
               <td>{{c.CatName}}</td>
            </tr>
          </tbody>
       </table>
       </div>
    `
})

export class CategorySenderComponent implements OnInit {
    // 3.
    cat:Category;
    cats=Categories;
    // 4.
    constructor(private serv:CommunicationService) {
        this.cat = new Category(0,"");
    }


    ngOnInit():void { }

    // 5.
    getSelectedCategory(c:Category):void {
        this.cat=c;
        this.serv.raiseEvent(this.cat.CatId);
    }

}
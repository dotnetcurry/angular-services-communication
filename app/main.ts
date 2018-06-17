import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule } from "@angular/forms";
import { CategorySenderComponent } from "./app.categorysender.component";
import { ProductReceiverComponent } from "./app.productreceiver.component";
import { CommunicationService } from "./app.communication.service";
@NgModule({
   imports:[BrowserModule,FormsModule],
   declarations:[CategorySenderComponent,ProductReceiverComponent],
    providers:[CommunicationService],
   bootstrap:[CategorySenderComponent,ProductReceiverComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

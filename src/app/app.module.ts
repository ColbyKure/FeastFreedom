import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/Http';

import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { CommonModule } from '@angular/common';
import { CartComponent } from './examples/cart/cart.component';
import { ProductComponent } from './examples/product/product.component';
import { ProductService } from './services/product.service';
import { DeleteItemComponent } from './examples/delete-item/delete-item.component';
import { EditItemComponent } from './examples/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    ProductComponent,
    DeleteItemComponent,
    EditItemComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ CookieService, 
    ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
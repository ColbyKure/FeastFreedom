import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { AboutComponent } from './examples/about/about.component';
import { LoginComponent } from './examples/login/login.component';
import { HomepageComponent} from './examples/homepage/homepage.component';
import { KitchensComponent } from './examples/kitchens/kitchens.component';
import { ItemsComponent } from './examples/items/items.component';
import { SignupkitchenComponent } from './examples/signupkitchen/signupkitchen.component';
import { SignupuserComponent } from './examples/signupuser/signupuser.component';
import { CreateitemComponent } from './examples/createitem/createitem.component';
import { CartComponent } from './examples/cart/cart.component';
import { ProductComponent } from './examples/product/product.component';
import { DeleteItemComponent } from './examples/delete-item/delete-item.component';
import { EditItemComponent } from './examples/edit-item/edit-item.component';

const routes: Routes =[
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'home',           component: ComponentsComponent },
    { path: 'user-profile',   component: ProfileComponent },
    { path: 'signup',         component: SignupComponent },
    { path: 'landing',        component: LandingComponent },
    { path: 'nucleoicons',    component: NucleoiconsComponent },
    { path: 'about',          component: AboutComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'homepage',       component: HomepageComponent },
    { path: 'kitchens',       component: KitchensComponent },
    { path: 'items',          component: ItemsComponent },
    { path: 'signupkitchen',  component: SignupkitchenComponent },
    { path: 'signupuser',     component: SignupuserComponent },
    { path: 'products',       component: ProductComponent },
    { path: 'createitem',     component: CreateitemComponent },
    { path: 'cart',           component: CartComponent },
    { path: 'delete-item',    component: DeleteItemComponent },
    { path: 'edit-item',       component: EditItemComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule { }

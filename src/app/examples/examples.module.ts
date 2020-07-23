import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupkitchenComponent } from './signupkitchen/signupkitchen.component';
import { KitchensComponent } from './kitchens/kitchens.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { SignupuserComponent } from './signupuser/signupuser.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        AboutComponent,
        LoginComponent,
        HomepageComponent,
        SignupkitchenComponent,
        KitchensComponent,
        ItemsComponent,
        CartComponent,
        SignupuserComponent
    ]
})
export class ExamplesModule { }

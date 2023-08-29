import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { LockedComponent } from "./locked/locked.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { Page500Component } from "./page500/page500.component";
import { Page404Component } from "./page404/page404.component";
import { Page403Component } from "./page403/page403.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
// Core
import { CoreModule } from "../../@core/core.module";
import { VerifyEmailComponent } from "./verify-email/verify-email.component";
import { PricingComponent } from "./pricing/pricing.component";
import { ComingsoonComponent } from "./comingsoon/comingsoon.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutusComponent } from "./aboutus/aboutus/aboutus.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { AboutusopianComponent } from "./aboutusopian/aboutusopian/aboutusopian.component";

@NgModule({
  declarations: [
    Page500Component,
    Page404Component,
    Page403Component,
    SigninComponent,
    SignupComponent,
    LockedComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    VerifyEmailComponent,
    PricingComponent,
    ComingsoonComponent,
    LandingPageComponent,
    AboutusComponent,
    AboutusopianComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatDividerModule,
    MatCardModule,
  ],
})
export class AuthenticationModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { LockedComponent } from "./locked/locked.component";
import { Page404Component } from "./page404/page404.component";
import { Page403Component } from "./page403/page403.component";
import { Page500Component } from "./page500/page500.component";
import { VerifyEmailComponent } from "./verify-email/verify-email.component";
import { PricingComponent } from "./pricing/pricing.component";
import { ComingsoonComponent } from "./comingsoon/comingsoon.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutusComponent } from "./aboutus/aboutus/aboutus.component";
import { AboutusopianComponent } from "./aboutusopian/aboutusopian/aboutusopian.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "landing",
    pathMatch: "full",
  },
  {
    path: "landing",
    component: LandingPageComponent,
  },
  {
    path: "signin",
    component: SigninComponent,
  },

  {
    path: "pricing",
    component: PricingComponent,
  },
  {
    path: "aboutus",
    component: AboutusComponent,
  },
  {
    path: "aboutuseshe",
    component: AboutusopianComponent,
  },

  {
    path: "comingsoon",
    component: ComingsoonComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
  },
  {
    path: "locked",
    component: LockedComponent,
  },
  {
    path: "page404",
    component: Page404Component,
  },
  {
    path: "page403",
    component: Page403Component,
  },
  {
    path: "page500",
    component: Page500Component,
  },
  {
    path: "verify-email",
    component: VerifyEmailComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}

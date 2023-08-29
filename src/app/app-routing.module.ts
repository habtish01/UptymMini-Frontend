import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgxPermissionsGuard } from "ngx-permissions";
import { AuthGuard } from "../@core/services/auth.guard";

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./+pages/pages.module').then(
  //       (m) => m.PagesModule
  //     )
  // },
  {
    path: "authentication",
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
 
  
  {
    path: "configuration",
    canLoad: [AuthGuard],
    // canActivate: [AuthGuard, NgxPermissionsGuard],
    // data: { permissions: { only: ["SuperAdmin"], redirectTo: "/" } },
    loadChildren: () =>
      import("./+configuration/configuration.module").then(
        (m) => m.ConfigurationModule
      ),
  },
  // { path: "", redirectTo: "/home/dashboard", pathMatch: "full" },
  // { path: "**", redirectTo: "/home/dashboard", pathMatch: "full" },
  { path: "", redirectTo: "/dashboard/main", pathMatch: "full" },
  { path: "**", redirectTo: "/dashboard/main", pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  LocationStrategy,
  HashLocationStrategy,
  DatePipe,
} from "@angular/common";
import { DynamicScriptLoaderService } from "./shared/services/dynamic-script-loader.service";
import { RightSidebarService } from "./shared/services/rightsidebar.service";
import { ConfigService } from "./shared/services/config.service";
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from "ngx-perfect-scrollbar";
// Angular Material
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { NgxMaskModule } from "ngx-mask";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatStepperModule } from "@angular/material/stepper";

import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { AgmCoreModule } from "@agm/core";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};
// Permission
import { NgxPermissionsModule } from "ngx-permissions";
// Services
import { AuthService } from "src/@core/services/auth.service";
import { AuthGuard } from "src/@core/services/auth.guard";
import { HttpService } from "src/@core/services/http.service";
import { AlertService } from "src/@core/services/alert.service";
import { CanDeactivateGuard } from "src/@core/services/can-deactivate-guard.service";
// Core Module
import { CoreModule } from "src/@core/core.module";
import { PagesModule } from "src/app/+pages/pages.module";
import { HighchartsChartModule } from "highcharts-angular";
// import * as introJs from "intro.js/intro.js";

/* import { HighchartsChartComponent } from 'highcharts-angular'; */
@NgModule({
  declarations: [
    AppComponent
   

    // HighchartsChartComponent
  ],
  imports: [
    CoreModule,
    HighchartsChartModule,
    NgxPermissionsModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatStepperModule,
    PerfectScrollbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatMenuModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(),
     //Integrating landing CMS page layout(header, nav, footer)
    PagesModule, // Integrating landing CMS page
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBtgtejpXDtHgBg-59pOx4KzEgXITVY7v0",
    }),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    DynamicScriptLoaderService,
    ConfigService,
    RightSidebarService,
    // Services
    AuthGuard,
    AuthService,
    HttpService,
    AlertService,
    CanDeactivateGuard,
    DatePipe,
    // introJs,
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, Injector, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BaseService } from "src/@core/services/base.service";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"],
})
export class PricingComponent extends BaseService implements OnInit {
  pricingPlan = 0;
  constructor(public injector: Injector, public router: Router) {
    super(injector);
  }

  ngOnInit() {}
  gotoFree() {
    this.pricingPlan = 1;
    this.router.navigate(["/authentication/signup"], {
      state: { data: this.pricingPlan },
    });
  }
  gotoStandard() {
    this.pricingPlan = 2;
    this.router.navigate(["/authentication/signup"], {
      state: { data: this.pricingPlan },
    });
  }
  gotoBusiness() {
    this.pricingPlan = 3;
    this.router.navigate(["/authentication/signup"], {
      state: { data: this.pricingPlan },
    });
  }
  gotoCustom() {
    this.pricingPlan = 4;
    this.router.navigate(["/authentication/signup"], {
      state: { data: this.pricingPlan },
    });
  }
}

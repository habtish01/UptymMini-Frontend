import { Component, OnInit, Injector } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BaseService } from "../../../@core/services/base.service";
import { AccountController } from "../../../@core/APIs/AccountController";
import { takeUntil } from "rxjs/operators";
import { HomepageURL } from "src/@core/config";
import { dataUri, date } from "@rxweb/reactive-form-validators";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent extends BaseService implements OnInit {
  form: FormGroup;
  returnUrl: string;
  homePageUrl = HomepageURL;
  expireDate = new Date();
  expDate: string;
  hide = true;

  constructor(private formBuilder: FormBuilder, public injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
    });
    let exp_date = this.datepipe.transform(this.expireDate, "yyyy-MM-dd");
    if (exp_date >= "2022-11-11") {
      this.expDate = "expired";
    }

    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.activatedRoute.snapshot.queryParams["returnUrl"] || "/";
  }

  get f() {
    return this.form.controls;
  }

  async onSubmit() {
    const controls = this.form.controls;
    /** check form */
    if (this.form.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    this.loading = true;

    const authData = {
      email: controls.email.value,
      password: controls.password.value,
    };

    this.httpService
      .POST(AccountController.Login, authData)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res) => {
          if (res.isPassed) {
            this.loading = false;
            // check if the user need to change his password
            if (res.data.changePassword) {
              this.router.navigate([`/authentication/reset-password`], {
                queryParams: { email: res.data.email, token: res.data.token },
              });
            } else {
              if (res.data && res.data.userRoles) {
                this.permissionsService.loadPermissions(res.data.userRoles);
              }
              // set info in local storage
              this.authService.storeUserDate(res.data);
              this.alertService.success("You have logged in successfully");
              if (res.data.loggedInCount == 1) {
                this.router.navigate([`/user/profile`]);
                this.alertService.success("Please Complete your Profile");
              } else if (
                res.data.userRoles.includes("ProductionManager") ||
                res.data.userRoles.includes("Facility")
              ) {
                this.router.navigate([`/equipment/dynamic-equipments`]);
              } else if (
                res.data.userRoles.includes("Engineer") ||
                res.data.userRoles.includes("LeadEngineer") ||
                res.data.userRoles.includes("SeniorEngineer")
              ) {
                this.router.navigate([`/maintenance/dynamic-workorder`]);
              } else if (
                res.data.userRoles.includes("Admin") &&
                res.data.loggedInCount != 0
              ) {
                this.router.navigate([`/dashboard/main`]);
              } else if (
                res.data.userRoles.includes("Admin") &&
                res.data.loggedInCount == 0
              ) {
                this.router.navigate([`/user/profile`]);
                this.alertService.success("Please Complete your Profile");
              } else {
                this.router.navigate([`/dashboard/main`]);
              }
            }
          } else {
            this.alertService.error(res.message);
            this.loading = false;
            this._ref.detectChanges();
            if (res.message == "Your password is expired") {
              this.router.navigate([
                `/authentication/change-password/${controls.email.value}`,
              ]);
            }
          }
        },
        (err) => {
          console.log("err", err);
          this.alertService.exception();
          this.loading = false;
          this._ref.detectChanges();
        }
      );
  }
}

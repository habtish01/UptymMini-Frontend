import { Component, OnInit, Injector } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserStatusEnum } from "src/@core/models/enum/Enums";
import { BaseService } from "src/@core/services/base.service";
import { ConfigurationsController } from "src/@core/APIs/ConfigurationsController";
import { takeUntil, map } from "rxjs/operators";
import { ConfigurationDto } from "src/@core/models/configuration/Configuration";
import { CustomerDto } from "src/@core/models/customer/Customer";
import { PaymentDto } from "src/@core/models/customer/PaymentDto";
import { CustomersController } from "src/@core/APIs/CustomersController";
import {
  PlanPermission,
  PlanPermissionDrp,
} from "src/@core/models/customer/PlanPermission";
import { CustomerTypeDto } from "src/@core/models/customer/CustomerTypeDto";
import { CustomerTypesController } from "src/@core/APIs/CustomerTypesController";
// import { UserCountrySubscriptionDto, UserRegionSubscriptionDto, UserLaboratorySubscriptionDto } from 'src/@core/models/security/UserSubscription';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent extends BaseService implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  choosenPlan = 0;
  // secondFormGroup: FormGroup;
  imageToUpload: File;
  submitted = false;
  isEmailVerified = false;
  returnUrl: string;
  hide = true;
  configurationDto: ConfigurationDto = new ConfigurationDto();
  customerDto: CustomerDto = new CustomerDto();
  // Drp
  customerTypes = new Array<CustomerTypeDto>();
  userStatusEnum = UserStatusEnum;
  payments: Array<PaymentDto> = new Array<PaymentDto>();
  planPermissionDto: PlanPermissionDrp[];
  planPermission: PlanPermission[] = new Array<PlanPermission>();
  subscriptionStyles = [
    { color: "orangeColor", icon: "brightness_medium" },
    { color: "greenColor", icon: "local_mall" },
    { color: "blueColor", icon: "spa" },
    { color: "redColor", icon: "filter_vintage" },
    { color: "grenColor", icon: "crop_free" },
  ];

  constructor(private formBuilder: FormBuilder, public injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.choosenPlan = history.state.data;
    console.log("Coming Data From Pricing Table: ");
    console.log(history.state);
    console.log("Choosen Plan Id is: " + this.choosenPlan);
    this.loadConfiguration();
    this.loadCustomerTypes();
    //TODO: Update once confirmed the payment methods
    this.firstFormGroup = this.formBuilder.group({
      // firstName: [null, Validators.compose([Validators.required])],
      // lastName: [null, Validators.compose([Validators.required])],
      // phoneNumber: [null, Validators.compose([Validators.required])],
      // customerTypeId: [null, Validators.compose([Validators.required])],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
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

    // this.secondFormGroup = this.formBuilder.group({
    //   subscribedPlan: [null, Validators.compose([Validators.required])],
    //   isTrial: [null, Validators.compose([Validators.required])],
    // });

    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.activatedRoute.snapshot.queryParams["returnUrl"] || "/";
  }

  loadConfiguration() {
    const url = ConfigurationsController.GetConfigurationDetails;
    this.httpService
      .GET(url)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        if (res.isPassed) {
          this.configurationDto = res.data;
        } else {
          this.alertService.error(res.message);
          this.loading = false;
          this._ref.detectChanges();
        }
      });
  }
  loadCustomerTypes() {
    this.httpService
      .GET(CustomerTypesController.GetAllCustomerTypesAsDrp)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        if (res.isPassed) {
          this.customerTypes = res.data;
        } else {
          this.alertService.error(res.message);
          this.loading = false;
          this._ref.detectChanges();
        }
      });
  }

  async register() {
    const controls = this.firstFormGroup.controls;
    /** check form */
    if (this.firstFormGroup.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    this.loading = true;
    const location = await this.httpService.GetLocationInfo();

    // First Form
    // this.customerDto.firstName = this.firstFormGroup.getRawValue().firstName;
    // this.customerDto.lastName = this.firstFormGroup.getRawValue().lastName;
    // this.customerDto.phoneNumber = this.firstFormGroup.getRawValue().phoneNumber;
    // this.customerDto.customerTypeId = this.firstFormGroup.getRawValue().customerTypeId;
    this.customerDto.email = this.firstFormGroup.getRawValue().email;
    this.customerDto.password = this.firstFormGroup.getRawValue().password;
    this.customerDto.status = "Active";
    this.customerDto.isTrial = true;
    this.customerDto.planId = this.choosenPlan;
    this.customerDto.locationDto = location;

    var formData: FormData = new FormData();
    if (this.imageToUpload) {
      formData.append(
        "PersonalImagePath",
        this.imageToUpload,
        this.imageToUpload.name
      );
    }
    formData.append("customerDto", JSON.stringify(this.customerDto));

    this.httpService
      .POST(CustomersController.Register, formData, null, true)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res) => {
          if (res.isPassed) {
            this.loading = false;
            this.alertService.success("You are registred successfully");
            this.submitted = true;
            this.isEmailVerified = true; //isEmailVerified flag
          } else if (this.customerDto.password.length < 8) {
            this.alertService.error(
              "Password Length must be between 6 - 8 Characters and must include Capital Letters, Small Letters ,Special Characters and Numbers"
            );
            this.loading = false;
            this._ref.detectChanges();
          } else {
            this.alertService.error(
              "Network Error Please try registering again"
            );
            this.loading = false;
            this._ref.detectChanges();
          }
        },
        (err) => {
          this.alertService.exception();
          this.loading = false;
          this._ref.detectChanges();
        }
      );
  }

  previewImage(event, imageTag) {
    if (!event || !event.target.files[0]) {
      return;
    }
    if (
      event.target.files[0].size / 1000 >=
      this.configurationDto.userPhotosize
    ) {
      this.alertService.error(
        `Image size must be smaller than ${this.configurationDto.userPhotosize} KB`
      );
      return;
    } else {
      this.imageToUpload = event.target.files[0];
      var reader = new FileReader();
      reader.onloadend = () => {
        imageTag.src = reader.result;
      };
      reader.readAsDataURL(this.imageToUpload);
    }
  }

  removeImg(imageTag, file) {
    this.imageToUpload = null;
    imageTag.src = "assets/images/user/usrbig3.jpg";
    file.value = "";
    this._ref.detectChanges();
  }
}

import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  private fragment: string;
  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
    
  ) {}

  
 menuVariable:boolean=false; 
 menuIconVariable:boolean=false;
 openMenu(){
   this.menuVariable=!this.menuVariable;
   this.menuIconVariable=!this.menuIconVariable;
 }
  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });
  }
  ngAfterViewInit(): void {
    try {
      document.querySelector("#" + this.fragment).scrollIntoView();
    } catch (e) {
      console.log(e);
    }
  }
  public navigateToSection(section: string) {
    window.location.hash = "";
    window.location.hash = section;
  }
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}

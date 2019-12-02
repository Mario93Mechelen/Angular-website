import { ButtonComponent } from "./../../components/button/button.component";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.sass"]
})
export class HomePageComponent implements OnInit {
  @Input() buttonText: string = "Learn more";
  @Input() buttonLink: string = "skills";
  @ViewChild(ButtonComponent, { static: true })
  buttonComponent: ButtonComponent;

  constructor(private router: Router) {
    this.buttonComponent = new ButtonComponent();
    this.buttonComponent.buttonLink = this.buttonLink;
    this.buttonComponent.buttonText = this.buttonText;
  }

  ngOnInit() {}

  public handleClick = event => {
    event.preventDefault();
    this.router.navigate([
      event.target.href.substring(
        event.target.href.lastIndexOf("/") + 1,
        event.target.href.length
      )
    ]);
  };
}

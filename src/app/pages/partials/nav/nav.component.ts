import { Router } from "@angular/router";
import { routes } from "./../../../app-routing.module";
import { Component, OnInit, Input } from "@angular/core";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.sass"]
})
export class NavComponent implements OnInit {
  public routes: Route[] = routes;
  public placeLogo: number = 1;
  public active: string = "home";
  @Input() hovered: string;
  @Input() menuIsVisible: boolean = false;
  constructor(private router: Router) {
    router.events.subscribe((val: any) => {
      // see also
      if (val && val.url) {
        this.active = val.url.substring(1, val.url.length);
      }
    });
  }
  ngOnInit() {
    this.active = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1,
      window.location.href.length
    );
  }

  public handleClick = e => {
    e.preventDefault();
    if (e.target.href) {
      this.active = e.target.href.substring(
        e.target.href.lastIndexOf("/") + 1,
        e.target.href.length
      );
    } else {
      this.active = "";
    }
    this.menuIsVisible = false;
  };

  public handleHover = e => {
    this.hovered = e.target.href.substring(
      e.target.href.lastIndexOf("/") + 1,
      e.target.href.length
    );
  };

  public resetHover = () => {
    this.hovered = undefined;
  };

  public showMenu = () => {
    this.menuIsVisible = !this.menuIsVisible;
  };
}

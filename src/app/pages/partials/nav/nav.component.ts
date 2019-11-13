import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  @Input() active:string = "home";
  @Input() hovered:string;
  @Input() menuIsVisible:boolean = false;

  ngOnInit() {
    this.active = window.location.href.substring(window.location.href.lastIndexOf('/')+1,window.location.href.length);
  }

  public handleClick = (e) => {
    this.active = e.target.href.substring(e.target.href.lastIndexOf('/')+1,e.target.href.length);
    this.menuIsVisible = !this.menuIsVisible
  }
  
  public handleHover = (e) => {
    this.hovered = e.target.href.substring(e.target.href.lastIndexOf('/')+1,e.target.href.length);
  }

  public resetHover = () => {
    this.hovered = undefined;
  }

  public showMenu = () => {
    this.menuIsVisible = !this.menuIsVisible;
  }
}

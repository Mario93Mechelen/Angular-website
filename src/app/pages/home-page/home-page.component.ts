import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent implements OnInit {

  @Input() buttonText:string = "Learn more"
  @Input() buttonLink: string = "/skills"

  constructor() { }

  ngOnInit() {
  }
  

}

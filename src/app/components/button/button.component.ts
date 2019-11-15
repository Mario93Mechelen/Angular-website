import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.sass"]
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() buttonLink: string;
  @Input() buttonShouldReturnValue?: boolean;
  @Input() opensNewPage?: boolean;
  @Output() handleClick: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public returnLink = (event, isReturning) => {
    if (isReturning) {
      event.preventDefault();
      this.handleClick.emit(event.target.href);
    }
  };
}

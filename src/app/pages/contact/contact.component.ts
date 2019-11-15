import { regexpPhone, regexpEmail } from "src/app/constants/index";
import { validate } from "src/app/services/validateForm";
import { TFormObject } from "src/app/types/index";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.sass"]
})
export class ContactComponent implements OnInit {
  public formObject: TFormObject = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "+32",
    company: "",
    message: ""
  };
  public errorInService: boolean = false;
  public messageSent: boolean;
  public messageForm = new FormGroup({
    subject: new FormControl(this.formObject.subject),
    firstname: new FormControl(this.formObject.firstname, [
      Validators.required
    ]),
    lastname: new FormControl(this.formObject.lastname, [Validators.required]),
    email: new FormControl(this.formObject.email, [
      Validators.required,
      validate(regexpEmail, "email")
    ]),
    phone: new FormControl(this.formObject.phone, [
      Validators.required,
      validate(regexpPhone, "phone")
    ]),
    company: new FormControl(this.formObject.company, [Validators.required]),
    message: new FormControl(this.formObject.message, [Validators.required])
  });
  constructor(private $http: HttpClient) {}

  ngOnInit() {}

  public submitForm = href => {
    if (!this.messageForm.errors && this.messageForm.touched) {
      try {
        const options = {
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        };
        this.$http
          .post(
            "https://mariosamison.be/assets/mail/mailer.php",
            `fields=${JSON.stringify(this.messageForm.value)}`,
            options
          )
          .subscribe((res: any) => {
            if (res && res.code === 200) {
              this.errorInService = false;
              this.messageSent = true;
              this.messageForm.reset();
            } else {
              this.errorInService = true;
            }
          });
      } catch (e) {
        this.errorInService = true;
      }
    }
  };
}

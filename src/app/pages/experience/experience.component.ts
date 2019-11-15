import { of } from "rxjs";
import { TExperience } from "src/app/types/index";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.sass"]
})
export class ExperienceComponent implements OnInit {
  public experiences: Observable<TExperience[]>;
  public experiencesToShow: TExperience[];
  public skillFilters: string[];
  constructor() {}

  ngOnInit() {
    this.skillFilters = [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Electron",
      "React-Native",
      "Firebase",
      "TypeScript"
    ];
    this.experiences = of([
      {
        title: "Wadsup",
        date: "02/07/2018 - 31/10/2019",
        description:
          "I worked here as a full-stack developer using PHP, PHP-frameworks, JavaScript and JavaScript-frameworks. I professionalized my skills on various projects for this company. Below you'll find a small list of these projects and the skills I used.",
        projects: [
          {
            title: "Vet-Helper App",
            date: "03/09/2018 - 31/12/2018",
            description: `A challenging assignment I had was to create an app for a vet that could help him with his administration. There is some kind of cloud where vet’s store their photo’s and info about animals they treated. But this requires the vet to plug his phone into his PC, transfer files to it, and eventually drag and drop them into vetcloud.
My application made it possible to take pictures, and e-mail them to the cloud (they offered a backend for it to pair it with the right animal). You could scan a QR-code to directly link it also. The app had a desktop-electron-app that used firebase, as well as the mobile app. The photo’s were uploaded from the mobile app to firebase, the desktop app received a signal from firebase and updated the images it had. Via this way, the vet could point out important info in the photo’s for the pet’s owners.
I created an AWS-Lambda-endpoint to send the photos to, so it could convert it to an e-mail an send it to vetcloud. `,
            skills: [
              "React",
              "HTML",
              "CSS",
              "JavaScript",
              "Electron",
              "React-Native",
              "Firebase"
            ]
          },
          {
            title: "Website Solvacheck",
            date: "03/12/2018 - 31/12/2018",
            description: `I mentioned on the skill page that I created a website in Angular using the Wordpress-api. You can find this project here.`,
            projectLink: "https://solvacheck.be",
            skills: ["Angular", "HTML", "CSS", "Typescript", "Wordpress"]
          },
          {
            title: "Spencer - November Five",
            date: "18/02/2019 - 12/07/2019",
            description: `I worked for about 5 months at November Five on the Spencer Backoffice Webapp. Spencer is an app that wants to make it easier for employees or for companies to go through various administrative tasks. 
Spencer was developing a Webapp as well for Delhaize, that they could use to create tasks for their employees, we called it the backoffice.  We were a team of 3 developers, and we had to work in as well the component-library as well as the Webapp itself.
This required deep knowledge of nested React-components, because you needed to know if there was a bug if it came from the Webapp or the underlying component library.
The most complex assignment I had was building a form-builder in React using JSON-schema. It was very challenging to keep the structure clean and to have a beautifully structured JSON-object that could work in all Spencer-apps.`,
            skills: ["React", "HTML", "CSS", "TypeScript"]
          }
        ]
      },
      {
        title: "Pàu",
        date: "04/11/2019 - current",
        description:
          "I started in November 2019 as a full-stack developer at Pàu consultancy. Here, I hope to further develop my skills and reach the expert level in JavaScript development.",
        siteLink: "https://pau.be",
        projects: []
      }
    ]);
    this.experiences.subscribe(val => (this.experiencesToShow = [...val]));
  }
}

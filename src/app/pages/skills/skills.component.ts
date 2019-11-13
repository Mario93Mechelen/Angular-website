import { Component, OnInit } from '@angular/core';
import { TSkill } from 'src/app/types';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  
  public skills: Observable<TSkill[]>;
  public allSkills: Observable<TSkill[]>;
  public currentTarget:string;
  public showForm: boolean;
  constructor() { }

  ngOnInit() {
    this.skills = of([
      {title:'Angular', 
      description:`I created an Angular-app that's using the Wordpress-api to display content. Also this site is made in Angular.`, 
      buttonLink:'/skills#angular', 
      buttonText:'Ask me about an angular project',
      imageUrl: 'assets/images/dev-logos/angular-icon-1.svg',
      imageAlt: 'angular'
    },
    {title:'React', 
      description:`By now, I'm a fluent React Engineer. Need me to build something? I'm the right guy for the job.`, 
      buttonLink:'/skills#react', 
      buttonText:'Ask me about a react project',
      imageUrl:"assets/images/dev-logos/redux.svg",
      imageAlt:'redux'
    },
    {title:'Redux-Saga', 
      description:`Generator functions and saga's? I can do that for you.`, 
      buttonLink:'', 
      buttonText:'',
      imageUrl:"assets/images/dev-logos/redux-saga.svg",
      imageAlt:'redux-saga'
    },
    {title:'HTML5', 
      description:`Of course I know my HTML-tags`, 
      buttonLink:'', 
      buttonText:'',
      imageUrl:"assets/images/dev-logos/html5.svg",
      imageAlt:'html5'
    },
    {title:'JavaScript', 
      description:`You need me to do ANYTHING JavaScript-related? No problem, contact me.`, 
      buttonLink:'/skills#javascript', 
      buttonText:'Ask me about a JavaScript project',
      imageUrl:"assets/images/dev-logos/javascript-js-seeklogo.com.svg",
      imageAlt:'javascript'
    },
    {title:'CSS3', 
      description:`Adding style to your project is my kind of thing.`, 
      buttonLink:'', 
      buttonText:'',
      imageUrl:"assets/images/dev-logos/css3.svg",
      imageAlt:'css3'
    },
    {title:'jQuery', 
      description:`Of course I heard of this library.`, 
      buttonLink:'', 
      buttonText:'',
      imageUrl:"assets/images/dev-logos/jquery.svg",
      imageAlt:'jquery'
    },
    {title:'Laravel', 
      description:`Surprisingly, I'm also good with this PHP-framework.`, 
      buttonLink:'/skills#laravel', 
      buttonText:'Ask me about a laravel project',
      imageUrl:"assets/images/dev-logos/laravel-1.svg",
      imageAlt:'laravel'
    },
    {title:'MongoDB', 
      description:`Storing your data securely, how it should be.`, 
      buttonLink:'', 
      buttonText:'',
      imageUrl:"assets/images/dev-logos/mongodb.svg",
      imageAlt:'mongodb'
    },
    {title:'Node.js', 
      description:`You need a JavaScript backend? No problem, I can do that.`, 
      buttonLink:'/skills#nodejs', 
      buttonText:'Ask me about a node.js project',
      imageUrl:"assets/images/dev-logos/nodejs-seeklogo.com.svg",
      imageAlt:'nodejs'
    },
    {title:'Generally interested?', 
      description:`Ask me a question on my contact page.`, 
      buttonLink:'/contact', 
      buttonText:'Contact me',
      imageUrl:"",
      imageAlt:'',
      shouldNotReturnValue: true
    }
    ])
    this.allSkills=this.skills;
  }

  public filterSkills = (text) => {
    const arrOfSkills:TSkill[] = [];
    this.allSkills.forEach((skills:TSkill[]) => skills.forEach((skill:TSkill) => {
      skill.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()) && arrOfSkills.push(skill);
    }));
    this.skills = of(arrOfSkills)
  }

  public getSelectedTarget = (skill) => {
    this.currentTarget = skill;
    this.showForm = true;
  }
  
  public closeModal = () => {this.showForm = false};

}

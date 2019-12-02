import { SkillComponent } from "./components/skill/skill.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./components/button/button.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { NavComponent } from "./pages/partials/nav/nav.component";
import { HttpClientModule } from "@angular/common/http";
import { SkillsComponent } from "./pages/skills/skills.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ContactComponent } from "./pages/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomePageComponent,
    NavComponent,
    SkillsComponent,
    SkillComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

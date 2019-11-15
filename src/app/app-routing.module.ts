import { ContactComponent } from "./pages/contact/contact.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { SkillsComponent } from "./pages/skills/skills.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "skills", component: SkillsComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

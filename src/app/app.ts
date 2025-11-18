import { Component, signal } from '@angular/core';
import { Header } from "./shared/components/header/header";
import { Footer } from "./shared/components/footer/footer";
import { Intro } from "./pages/intro/intro";
import { AboutMe } from "./pages/about-me/about-me";
import { Skills } from "./pages/skills/skills";
import { Projects } from "./pages/projects/projects";
import { Contact } from "./pages/contact/contact";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Intro, AboutMe, Skills, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portifolio_thiago');
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  contactId = 'contact'
  projectsId = 'projects'
  skillsId = 'skills'
  aboutId = 'about'

  scrollTo(link: string) {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
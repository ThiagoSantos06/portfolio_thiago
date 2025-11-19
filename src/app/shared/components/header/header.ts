import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isScrolled = false;
  introId = 'intro';
  aboutId = 'about'
  projectsId = 'projects';
  contactId = 'contact';
  skillsId = 'skills';

  scrollTo(link: string) {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}

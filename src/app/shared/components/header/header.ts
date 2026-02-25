import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/languageService';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isScrolled = false;
  isMenuOpen = false;

  introId = 'intro';
  aboutId = 'about';
  studiesId = 'studies';
  projectsId = 'projects';
  contactId = 'contact';
  skillsId = 'skills';

  constructor(public languageService: LanguageService) {}

  switchLanguage(lang: string) {
    this.languageService.switchLanguage(lang);
  }

  scrollTo(link: string) {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeMenu()
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.closeMenu()
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.style.overflow = 'auto';
    }
  }
}

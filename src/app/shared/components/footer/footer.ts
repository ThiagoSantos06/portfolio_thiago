import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/languageService';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
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
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
import { Component, HostListener, AfterViewInit } from '@angular/core';
import { LanguageService } from '../../core/services/languageService';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-intro',
  imports: [TranslateModule],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro implements AfterViewInit {
  isScrolled = false;
  projectId = 'projects';
  contactId = 'contact';
  aboutId = 'about';

  constructor(public languageService: LanguageService) {}

  ngAfterViewInit() {
    AOS.init({
      duration: 1500,
    })

    AOS.refresh();
  }

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

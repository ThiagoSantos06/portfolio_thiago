import { Component } from '@angular/core';
import { LanguageService } from '../../core/services/languageService';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  linkedin = 'https://www.linkedin.com/in/thiagosantos2006/';
  github = 'https://github.com/ThiagoSantos06'
  email = 'mailto:thiagohenrique1983c@gmail.com'

  constructor(public languageService: LanguageService) {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}

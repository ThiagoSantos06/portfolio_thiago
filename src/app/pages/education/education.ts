import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/languageService';

@Component({
  selector: 'app-education',
  imports: [TranslateModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  constructor(public languageService: LanguageService) {}
}

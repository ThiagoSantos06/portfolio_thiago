import { Injectable, signal } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
    currentLanguage = signal<string>('pt');

    constructor(private translate: TranslateService) {
        const savedLanguage = localStorage.getItem('language');
        const browserLanguage = translate.getBrowserLang();

        const lang = savedLanguage ?? (browserLanguage?.match(/en|pt/) ? browserLanguage : 'pt');

        this.translate.setFallbackLang('pt');
        this.translate.use(lang);
        this.currentLanguage.set(lang)
    }

    switchLanguage(lang: string) {
        this.translate.use(lang);
        this.currentLanguage.set(lang);
        localStorage.setItem('language', lang);
    }
}
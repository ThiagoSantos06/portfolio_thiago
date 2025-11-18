import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  linkedin = 'https://www.linkedin.com/in/thiagosantos2006/';
  github = 'https://github.com/ThiagoSantos06'
  email = 'mailto:thiagohenrique1983c@gmail.com'

  openLink(link: string) {
    window.open(link, '_blank');
  }
}

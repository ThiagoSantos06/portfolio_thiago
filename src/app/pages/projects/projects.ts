import { Component } from '@angular/core';
import { LanguageService } from '../../core/services/languageService';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  selectedFilter: string = 'all';

  constructor(public languageService: LanguageService) {}

  projectsList = [
    {
      key: 'project_1',
      date: '2024',
      image: 'assets/images/migracao&emocao.png',
      github: 'https://gitlab.com/bravit/clientes/migracao-e-emocao',
      site: 'https://migracao-e-emocao-wi.onrender.com/',
      type: 'landingpage'
    },
    {
      key: 'project_2',
      date: '2024',
      image: 'assets/images/endereco.png',
      github: 'https://github.com/ThiagoSantos06/endereco',
      site: 'https://endereco-opyq18ify-thiagos-projects-fa762b1c.vercel.app/',
      type: 'webapp'
    },
    {
      key: 'project_3',
      date: '2025',
      image: 'assets/images/portfolio.png',
      github: 'https://github.com/ThiagoSantos06/portfolio_thiago',
      site: 'https://portfolio-thiago-eta.vercel.app/',
      type: 'landingpage'
    },
    {
      key: 'project_4',
      date: '2026',
      image: 'assets/images/caprix.png',
      github: 'https://github.com/ThiagoSantos06/caprix',
      site: 'https://caprix-ivory.vercel.app/',
      type: 'landingpage'
    }
  ]

  filteredProjects = [...this.projectsList];

  filterProjects(type: string) {
    this.selectedFilter = type;

    if (type === 'all') {
      this.filteredProjects = [...this.projectsList];
    } else {
      this.filteredProjects = this.projectsList.filter(project => project.type === type);
    }
  }
}

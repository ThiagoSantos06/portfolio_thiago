import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  selectedFilter: string = 'all';

  projectsList = [
    {
      title: 'Imigração&Emoção',
      date: '2024',
      description: 'Plataforma de landing page para serviços de psicologia com agendamento de consultas...',
      tech: 'Angular, TypeScript, HTML5, CSS3',
      image: 'assets/images/migracao&emocao.png',
      github: 'https://gitlab.com/bravit/clientes/migracao-e-emocao',
      site: 'https://migracao-e-emocao-wi.onrender.com/',
      type: 'landingpage'
    },
    {
      title: 'Consulta de CEP',
      date: '2024',
      description: 'Site em Angular que consulta CEPs em tempo real usando a API AwesomeAPI...',
      tech: 'Angular, TypeScript, CSS3, HTML5',
      image: 'assets/images/endereco.png',
      github: 'https://github.com/ThiagoSantos06/endereco',
      site: 'https://endereco-opyq18ify-thiagos-projects-fa762b1c.vercel.app/',
      type: 'webapp'
    },
    {
      title: 'Portfólio',
      date: '2025',
      description: 'Site de portfólio pessoal desenvolvido em Angular e TypeScript...',
      tech: 'Angular, TypeScript, CSS3, HTML5',
      image: 'assets/images/portfolio.png',
      github: 'https://github.com/ThiagoSantos06/portfolio_thiago',
      site: 'https://portfolio-thiago-eta.vercel.app/',
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

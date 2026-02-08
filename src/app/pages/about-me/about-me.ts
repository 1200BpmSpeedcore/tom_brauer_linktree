import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { CircleDiagramComponent } from '../../components/circle-diagram/circle-diagram';

import { ShowOnDirective } from '../../directives/show-on/show-on';

import { AccordionTechnologyItem } from '../../models';

import { ResponsiveService } from '../../services/responsive/responsive';

import { FillLevel } from '../../types';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
    CircleDiagramComponent,
    ShowOnDirective
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  readonly dateToday: Date = new Date();
  readonly birthDate: Date = new Date('2002-02-01');
  readonly currentAge = (): number => {
    return this.dateToday.getFullYear() - this.birthDate.getFullYear()
      - ((this.dateToday.getMonth() < this.birthDate.getMonth()
        || (
          this.dateToday.getMonth() === this.birthDate.getMonth()
          && this.dateToday.getDate() < this.birthDate.getDate()
        )
      ) ? 1 : 0);
  }

  leadClass$: Observable<string>;

readonly technologySkills: AccordionTechnologyItem[] = [
  {
    id: 'dotnet-core',
    title: '.NET (Core)',
    subitems: [
      {
        name: 'C#',
        fillLevel: FillLevel.ThreeQuarters,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        description: 'Primary programming language for .NET applications'
      },
      {
        name: 'ADO.NET',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        description: 'Data access technology for direct database operations'
      },
      {
        name: 'WinForms',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        description: 'Desktop application framework for Windows'
      },
      {
        name: 'ASP.NET Core',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
        description: 'Framework for building web APIs and applications'
      },
      {
        name: 'Entity Framework Core',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        description: 'Object-Relational Mapper (ORM) for database access'
      },
      {
        name: 'LINQ',
        fillLevel: FillLevel.Half,
        description: 'Language Integrated Queries for data manipulation'
      },
      {
        name: 'xUnit',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        description: 'Testing framework for .NET applications'
      },
      {
        name: 'fluentAssertions',
        fillLevel: FillLevel.ThreeQuarters,
        description: 'Readable assertion library for unit tests'
      },
      {
        name: 'MSTest',
        fillLevel: FillLevel.Quarter,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        description: 'Microsoft\'s testing framework'
      }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    subitems: [
      {
        name: 'HTML5',
        fillLevel: FillLevel.ThreeQuarters,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        description: 'Semantic markup for web pages and applications'
      },
      {
        name: 'CSS3',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        description: 'Styling and layout of web applications'
      },
      {
        name: 'JavaScript',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        description: 'Client-side scripting language for interactive web pages'
      },
      {
        name: 'TypeScript',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        description: 'Typed superset of JavaScript for scalable applications'
      },
      {
        name: 'Angular',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        description: 'Frontend framework for single-page applications'
      }
    ]
  },
  {
    id: 'data-storage',
    title: 'Data Storage',
    subitems: [
      {
        name: 'SQL (MS SQL, SQLite)',
        fillLevel: FillLevel.ThreeQuarters,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        description: 'Relational database management and querying'
      },
      {
        name: 'XML',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg',
        description: 'Structured data format for configuration and exchange'
      },
      {
        name: 'JSON',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',
        description: 'Lightweight data interchange format for web APIs'
      },
      {
        name: 'YAML',
        fillLevel: FillLevel.Quarter,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg',
        description: 'Human-readable data serialization for configuration'
      }
    ]
  },
  {
    id: 'java',
    title: 'Java',
    subitems: [
      {
        name: 'Core Java',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        description: 'Object-oriented programming language for cross-platform applications'
      },
      {
        name: 'Spring (Boot)',
        fillLevel: FillLevel.Quarter,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        description: 'Framework for building enterprise Java applications'
      },
      {
        name: 'JUnit',
        fillLevel: FillLevel.Quarter,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        description: 'Testing framework for Java applications'
      }
    ]
  },
  {
    id: 'scripting',
    title: 'Scripting',
    subitems: [
      {
        name: 'Python',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        description: 'Scripting language for automation and data analysis'
      },
      {
        name: 'Bash',
        fillLevel: FillLevel.Quarter,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
        description: 'Shell scripting for Linux/Unix system administration'
      },
      {
        name: 'SQL Scripting',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        description: 'Database scripts for migration, optimization, and reporting'
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps',
    subitems: [
      {
        name: 'Git',
        fillLevel: FillLevel.ThreeQuarters,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        description: 'Distributed version control system for collaboration'
      },
      {
        name: 'GitHub/ Bitbucket',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        description: 'Code repository platforms with CI/CD integration'
      },
      {
        name: 'Jira',
        fillLevel: FillLevel.Half,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
        description: 'Project management and issue tracking software'
      },
      {
        name: 'Jenkins',
        fillLevel: FillLevel.Quarter,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
        description: 'Automation server for continuous integration and delivery'
      },
      {
        name: 'Swagger',
        fillLevel: FillLevel.Quarter,
        logoSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg',
        description: 'API documentation and testing framework'
      }
    ]
  }
  ];

  constructor(private responsiveService: ResponsiveService) {
    this.leadClass$ = this.responsiveService.getLeadClass();
  }
}

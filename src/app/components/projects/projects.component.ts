import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [ RouterLink, NgClass ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

    toggleSkills() {
      this.isExpanded = !this.isExpanded
    }

    isExpanded: boolean = false
    mySkills: Array<string> = [
      "Java",
      "Spring",
      "Spring Boot",
      "Node.js",
      "Angular",
      "React",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Docker",
      "AWS",
      "Prometheus",
      "Grafana",
      "Hibernate",
      "JavaScript",
      "TypeScript"
    ];
}

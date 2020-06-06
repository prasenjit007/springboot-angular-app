import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../../projects.service';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: number = -1;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getAllProjets().subscribe(
      (response: Project[]) => {
        this.projects = response;
      }
    );
  }



  addNewProject() {
    this.projectsService.insertProjets(this.newProject).subscribe(
      (response) => {
        var addUIProject: Project = response;
        //this.newProject = response;
        this.projects.push(addUIProject);
        this.newProject.projectId = null;
        this.newProject.projectName = null;
        this.newProject.teamSize = null;
        this.newProject.dateOfStart = null;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onUpdateClick() {

    this.projectsService.updateProjet(this.editProject).subscribe(
      (response) => {
        var updateUIProject: Project = response;
        //this.newProject = response;
        this.projects[this.editIndex] = updateUIProject;
        this.editProject.projectId = null;
        this.editProject.projectName = null;
        this.editProject.teamSize = null;
        this.editProject.dateOfStart = null;
        this.editIndex = -1;
      },
      (error) => {
        console.log(error);
      }
    );

  }

  onEditClick(event, index: number) {
    this.editIndex = index;
    this.editProject.projectId = this.projects[this.editIndex].projectId;
    this.editProject.projectName = this.projects[this.editIndex].projectName;
    this.editProject.teamSize = this.projects[this.editIndex].teamSize;
    this.editProject.dateOfStart = this.projects[this.editIndex].dateOfStart;
  }

  deleteProject($event, index) {

    this.projectsService.deleteProject(this.projects[index].projectId).subscribe(
      (response) => {
        var del: number = response;
        this.projects.splice(index,1);
        alert("Delete Id: " + del);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}

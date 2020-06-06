import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Project } from './project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getAllProjets() : Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("http://localhost:9999/projects");
  }

  insertProjets(newProject: Project) : Observable<Project>
  {
    return this.httpClient.post<Project>("http://localhost:9999/projects", newProject);
  }

  updateProjet(newProject: Project) : Observable<Project>
  {
    return this.httpClient.put<Project>("http://localhost:9999/projects", newProject);
  }

  deleteProject(projectId: number){
    return this.httpClient.delete<number>("http://localhost:9999/projects/"+projectId);
  }
  
}

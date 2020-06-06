import { Component, OnInit } from '@angular/core';
import { ElementAst } from '@angular/compiler';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;

  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients : string[];
  Projects : string[];
  Years: number[];

  TeamMembersSummary = [];
  TeamMembers = [];

  constructor(private dashboardService: DashboardService){

  }
  
  ngOnInit(): void {
    this.Designation ="Team Lead";
    this.Username= "Prasenjit Samanta";
    this.NoOfTeamMembers = 10;
    this.TotalCostOfAllProjects = 10000;
    this.PendingTasks=3;
    this.UpComingProjects =0.3;
    this.ProjectCost = 5000;
    this.CurrentExpenditure = 8000;
    this.AvailableFunds = 4777;

    this.Clients = [
      "DBS", "CITY", "HSBC", "WELLS FARGO", "JPMC"
    ];
    this.Projects = [
      "Project A", "Project B", "Project C"
    ];
    this.Years = [
      2020,2019, 2018, 2017, 2016, 2015
    ];

    

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers = [
      {
        Region : "East",
        Members : [
          {ID:1, Name:"Name10", Status:"Available"},
          {ID:2, Name:"Name11", Status:"Not-Available"},
          {ID:3, Name:"Name12", Status:"Available"},
        ]
      },
      {
        Region : "West",
        Members : [
          {ID:1, Name:"Name7", Status:"Available"},
          {ID:2, Name:"Name8", Status:"Available"},
          {ID:3, Name:"Name9", Status:"Not-Available"},
        ]
      },
      {
        Region : "North",
        Members : [
          {ID:1, Name:"Name1", Status:"Available"},
          {ID:2, Name:"Name2", Status:"Not-Available"},
          {ID:3, Name:"Name3", Status:"Available"},
        ]
      },
      {
        Region : "South",
        Members : [
          {ID:1, Name:"Name4", Status:"Available"},
          {ID:2, Name:"Name5", Status:"Available"},
          {ID:3, Name:"Name6", Status:"Not-Available"},
        ]
      }
    ];
  }


  onProjectChange($event){
    if($event.target.innerHTML=="Project A"){
      this.ProjectCost = 6000;
      this.CurrentExpenditure = 12000;
      this.AvailableFunds = 4557;
    }else if($event.target.innerHTML=="Project B"){
      this.ProjectCost = 10000;
      this.CurrentExpenditure = 126000;
      this.AvailableFunds = 455457;
    }else if($event.target.innerHTML=="Project C"){
      this.ProjectCost = 6004550;
      this.CurrentExpenditure = 1205500;
      this.AvailableFunds = 4554447;
    }
  }
   

}

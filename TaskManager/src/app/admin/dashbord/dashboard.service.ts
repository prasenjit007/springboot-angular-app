import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  getTeamMembersSummary() : any[]
  {
    var TeamMembersSummary = [
      {
        Id:1,
        Regions: "East",
        TeamMembersCount: 25,
        TemprarilyUnavailableMembers: 2
      },
      {
        Id:2,
        Regions: "West",
        TeamMembersCount: 20,
        TemprarilyUnavailableMembers: 12
      },
      {
        Id:3,
        Regions: "North",
        TeamMembersCount: 22,
        TemprarilyUnavailableMembers: 5
      },
      {
        Id:4,
        Regions: "South",
        TeamMembersCount: 45,
        TemprarilyUnavailableMembers: 7
      }
      ,
      {
        Id:5,
        Regions: "Global",
        TeamMembersCount: 1245,
        TemprarilyUnavailableMembers: 127
      }
    ];

    return TeamMembersSummary;
  }
}

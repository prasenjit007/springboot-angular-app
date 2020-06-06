package com.angular.model;

import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class Projects {
	private Integer projectId;
	private String projectName;
	private Date dateOfStart;
	private Integer teamSize;
	
	public Projects() {
		// TODO Auto-generated constructor stub
	}
	
	

	public Projects(Integer projectId, String projectName, Date dateOfStart, Integer teamSize) {
		super();
		this.projectId = projectId;
		this.projectName = projectName;
		this.dateOfStart = dateOfStart;
		this.teamSize = teamSize;
	}



	public Integer getProjectId() {
		return projectId;
	}

	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public Date getDateOfStart() {
		return dateOfStart;
	}

	public void setDateOfStart(Date dateOfStart) {
		this.dateOfStart = dateOfStart;
	}

	public Integer getTeamSize() {
		return teamSize;
	}

	public void setTeamSize(Integer teamSize) {
		this.teamSize = teamSize;
	}

	@Override
	public String toString() {
		return "Projects [projectId=" + projectId + ", projectName=" + projectName + ", dateOfStart=" + dateOfStart
				+ ", teamSize=" + teamSize + "]";
	}
	
	
}

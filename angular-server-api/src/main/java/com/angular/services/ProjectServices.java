package com.angular.services;

import java.util.List;

import com.angular.model.Projects;

public interface ProjectServices {

	List<Projects> getProjects();

	void addProject(Projects newProject);

	void deleteProject(Integer id);

	void updateProject(Projects newProject);

}

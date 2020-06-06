package com.angular.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.angular.model.Projects;
import com.angular.services.ProjectServices;

@Service
public class ProjectServicesImpl implements ProjectServices {
	private static List<Projects> projects = new ArrayList<>();

	public ProjectServicesImpl() {
		projects.add(new Projects(1001, "MINV", new Date(), 10));
		projects.add(new Projects(1002, "TDAP", new Date(), 45));
		projects.add(new Projects(1003, "MCO", new Date(), 5));
		projects.add(new Projects(1001, "ORCHID", new Date(), 9));
	}

	@Override
	public List<Projects> getProjects() {
		return projects;
	}

	@Override
	public void addProject(Projects newProject) {
		projects.add(newProject);
	}

	@Override
	public void deleteProject(Integer id) {
		if(id==null || id<=0)
			return;
		
		System.out.println("Before Delete Count: "+projects.size());
		Iterator<Projects> itr = projects.iterator();
		while (itr.hasNext()) {
			Projects proj = itr.next();
			if (proj.getProjectId().equals(id)) {
				projects.remove(proj);
				break;
			}
		}
		
		System.out.println("After Delete Count: "+projects.size());

	}

	@Override
	public void updateProject(Projects newProject) {
		if(newProject==null)
			return;
		Iterator<Projects> itr = projects.iterator();
		while (itr.hasNext()) {
			Projects proj = itr.next();
			if (proj.getProjectId().equals(newProject.getProjectId())) {
				projects.remove(proj);
				projects.add(newProject);
				break;
			}
		}
	}
}

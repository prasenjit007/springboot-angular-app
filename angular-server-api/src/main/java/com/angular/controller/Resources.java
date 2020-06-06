package com.angular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.angular.model.Person;
import com.angular.model.Projects;
import com.angular.services.ProjectServices;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class Resources {
	@Autowired
	private Person person;
	
	@Autowired
	private ProjectServices projectServices;

	
	@RequestMapping("/")
	public String healthCheck() {
		return "OK";
	}
	
	@RequestMapping("/person/get")
	public Person getPerson(@RequestParam(name="name", required=false, defaultValue="Unknown") String name) {
		person.setName(name);
		return person;
	}
	
	@RequestMapping(value="/person/update", method=RequestMethod.POST)
	public Person updatePerson(@RequestParam(name="name", required=true) String name) {
		person.setName(name);
		return person;
	}
	
	@GetMapping("/projects")
	public List<Projects> getProjects() {
		return projectServices.getProjects();
	}
	
	@PostMapping("/projects")
	public Projects addProjects(@RequestBody Projects newProject) {
		projectServices.addProject(newProject);
		System.out.println("added : "+newProject);
		return newProject;
	}
	
	@PutMapping("/projects")
	public Projects UpdateProjects(@RequestBody Projects newProject) {
		projectServices.updateProject(newProject);
		System.out.println("updated : "+newProject);
		return newProject;
	}
	
	@DeleteMapping("/projects/{id}")
	public Integer deleteProjects(@PathVariable("id") Integer id) {
		projectServices.deleteProject(id);
		System.out.println("deleted : "+id);
		return id;
	}
}

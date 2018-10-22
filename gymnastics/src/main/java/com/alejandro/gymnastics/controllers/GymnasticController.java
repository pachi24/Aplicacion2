package com.alejandro.gymnastics.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.alejandro.gymnastics.entity.services.IGymnasticService;
import com.alejandro.gymnastics.models.Gymnastic;

@RestController
@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
public class GymnasticController {
	
	@Autowired
	IGymnasticService gymnasticService;
	
	@GetMapping("/gymnastics")
	public List<Gymnastic> getAllGymnastics(){
		return gymnasticService.getAll();
	}
	
	@GetMapping("/gymnastic/{id}")
	public Gymnastic getOne(@PathVariable(value = "id") long id) {
		
		return gymnasticService.get(id);
	}
	
	@PostMapping("/gymnastic")
	public void add(@RequestBody Gymnastic gymnastic) {
		gymnasticService.post(gymnastic);
	}


	@PutMapping("/gymnastic/{id}")
	public void update(Gymnastic gymnastic, @PathVariable(value = "id") long id) {
		gymnasticService.put(gymnastic, id);
	}
	
	@DeleteMapping("/gymnastic/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		gymnasticService.delete(id);
	}
}

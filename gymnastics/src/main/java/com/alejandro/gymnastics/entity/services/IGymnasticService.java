package com.alejandro.gymnastics.entity.services;

import java.util.List;

import com.alejandro.gymnastics.models.Gymnastic;

public interface IGymnasticService {
	public Gymnastic get(long id);
	public List<Gymnastic> getAll();
	public void post(Gymnastic gymnastic);
	public void put(Gymnastic gymnastic, long id);
	public void delete(long id);
	
}

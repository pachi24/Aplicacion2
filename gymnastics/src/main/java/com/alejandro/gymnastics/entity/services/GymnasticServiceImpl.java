package com.alejandro.gymnastics.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alejandro.gymnastics.entity.dao.IGymnasticDao;
import com.alejandro.gymnastics.models.Gymnastic;

@Service
public class GymnasticServiceImpl implements IGymnasticService{
	
	@Autowired
	private IGymnasticDao gymnasticDao;
	
	@Override
	public Gymnastic get(long id) {
		
		return gymnasticDao.findById(id).get();
	}

	@Override
	public List<Gymnastic> getAll() {
		
		return (List<Gymnastic>) gymnasticDao.findAll();
	}

	@Override
	public void post(Gymnastic gymnastic) {
		gymnasticDao.save(gymnastic);
		
	}

	@Override
	public void put(Gymnastic gymnastic, long id) {
		gymnasticDao.findById(id).ifPresent((x)->{
			gymnastic.setId(id);
			gymnasticDao.save(gymnastic);
		});
		
	}

	@Override
	public void delete(long id) {
		gymnasticDao.deleteById(id);
		
	}

}

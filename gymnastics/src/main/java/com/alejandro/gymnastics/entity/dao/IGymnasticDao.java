package com.alejandro.gymnastics.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.alejandro.gymnastics.models.Gymnastic;

public interface IGymnasticDao extends CrudRepository<Gymnastic, Long>{

}

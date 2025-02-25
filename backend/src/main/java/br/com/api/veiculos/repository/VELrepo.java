package br.com.api.veiculos.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.veiculos.model.VelModel;


@Repository
public interface VELrepo  extends CrudRepository<VelModel,Long>
{
    
}

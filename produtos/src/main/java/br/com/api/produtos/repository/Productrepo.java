package br.com.api.produtos.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.produtos.model.Modelproduct;



@Repository
public interface Productrepo extends CrudRepository<Modelproduct,Long>
{
    
}

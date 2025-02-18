package br.com.example.produtos.repository;


//import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import br.com.example.produtos.model.Modelproduct;


@Repository
public interface ProductRepo extends CrudRepository<Modelproduct,Long>
{    
    //List<Modelproduct> save();
}

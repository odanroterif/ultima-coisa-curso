package br.com.api.produtos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import br.com.api.produtos.model.Modelproduct;
import br.com.api.produtos.model.Modelresponse;
import br.com.api.produtos.repository.Productrepo;




@Service
public class Productservice 
{
    @Autowired
    private Productrepo pr;

    public Iterable<Modelproduct> list()
    {
        return pr.findAll();
    }

    
    @Autowired
    private Modelresponse mr;

    public ResponseEntity<?> sign_alter( Modelproduct mp,String action )
    {
        if ( mp.getName().equals("") ) 
        {
            mr.setMessage("Nome do produto obrigatório");
            return new ResponseEntity<Modelresponse>(mr, HttpStatus.BAD_REQUEST );
        }
        else if (mp.getMark().equals("")) 
        {
            mr.setMessage("Marca do produto obrigatório");
            return new ResponseEntity<Modelresponse>(mr, HttpStatus.BAD_REQUEST );
        }
        else if (action.equals("cadastrar")) 
        {
            return new ResponseEntity<Modelproduct>(mp, HttpStatus.CREATED);
        } 
        else 
        {
            return new ResponseEntity<Modelproduct>(mp, HttpStatus.OK);
        }
    }


    public ResponseEntity<Modelresponse> delete(long code)
    {
        pr.deleteById(code);
        mr.setMessage("REMOÇÃO CONCLUIDA");

        return new ResponseEntity<Modelresponse>(mr, HttpStatus.OK); 
    }
}

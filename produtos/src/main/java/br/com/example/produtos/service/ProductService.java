package br.com.example.produtos.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import br.com.example.produtos.model.Modelproduct;
import br.com.example.produtos.model.Modelresward;
import br.com.example.produtos.repository.ProductRepo;



@Service
public class ProductService 
{
    @Autowired
    private ProductRepo pr; 
    
    public Iterable<Modelproduct> list()
    {
        return pr.findAll();
    }


    @Autowired 
    private Modelresward mr;

    public ResponseEntity<?> signINalter(Modelproduct mp,String action)
    {
        if (mp.getName().equals(""))
        {
            mr.setMessage("NOME DO PRODUTO OBRIGÁTORIO");
            return new ResponseEntity<Modelresward>(mr,HttpStatus.BAD_REQUEST);
        }
        else if (mp.getMark().equals(""))
        {
            mr.setMessage("NOME DA MARCA OBRIGÁTORIO");
            return new ResponseEntity<Modelresward>(mr,HttpStatus.BAD_REQUEST);
        }
        else if (action.equals("cadastrar"))
        {
            return new ResponseEntity<Modelproduct>(pr.save(mp),HttpStatus.CREATED);
        }                
        else
        {
            return new ResponseEntity<Modelproduct>(pr.save(mp),HttpStatus.OK);
        }
    }              

    public ResponseEntity<Modelresward> remov(long code)
    {
        pr.deleteById(code);
        mr.setMessage("PRODUTO REMOVIDO");
    
        return new ResponseEntity<Modelresward>(mr,HttpStatus.OK);
    } 
}

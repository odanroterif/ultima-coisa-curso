package br.com.api.produtos.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.produtos.model.Modelproduct;
import br.com.api.produtos.service.Productservice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin(origins = "*")
public class ProductControl 
{
    @Autowired
    private Productservice ps;


    @GetMapping("")
    public String vericonect() 
    {
        return "PLUTÃO NÃO É PLANETA (api ok)";
    }
    
    @GetMapping("/listar")
    public Iterable<Modelproduct> list() 
    {
        return ps.list();
    }
    
    @PostMapping("/cadastrar")
    public ResponseEntity<?> singin(@RequestBody Modelproduct mp) 
    {            
        return ps.sign_alter(mp,"cadastrar");
    }
    
    @PostMapping("/alterar")
    public ResponseEntity<?> update(@RequestBody Modelproduct entity) 
    {            
        return ps.sign_alter(entity,"alterar");
    }

    @DeleteMapping("/remover/{code}")
    public ResponseEntity<?> update(@PathVariable Long code) 
    {            
        return ps.delete(code);
    }
}

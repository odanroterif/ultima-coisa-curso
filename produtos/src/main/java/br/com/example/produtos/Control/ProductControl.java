package br.com.example.produtos.Control;

import org.springframework.web.bind.annotation.RestController;

import br.com.example.produtos.model.Modelproduct;
import br.com.example.produtos.model.Modelresward;
import br.com.example.produtos.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;







@RestController
@CrossOrigin(origins = "*")
public class ProductControl 
{
    @Autowired
    private ProductService ps;

    @GetMapping("")
    public String route() 
    {
        return "PLUTÂO NÃO É PLANETA";
    }   
    
    @GetMapping("/listar")
    public Iterable<Modelproduct>list() 
    {
        return ps.list();
    }
    
    @PostMapping("/cadastro")
    public ResponseEntity<?> in(@RequestBody Modelproduct entity) 
    {        
        return ps.signINalter(entity,"cadastrar");
    }
    

    @PutMapping("/alterar")
    public ResponseEntity<?> update(@RequestBody Modelproduct entity) 
    {        
        return ps.signINalter(entity,"alter");
    }
    
    
    @DeleteMapping("/apagar/{code}")
    public ResponseEntity<Modelresward> delete(@PathVariable long code)
    {
        return ps.remov(code);
    }
}

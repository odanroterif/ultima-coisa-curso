package br.com.api.veiculos.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.veiculos.model.VelModel;
import br.com.api.veiculos.service.VelService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;





@RestController
@CrossOrigin(origins = "*")
public class VelControl 
{
    @Autowired
    private VelService vs;
    
    @GetMapping("")
    public String testconnection() 
    {
        return "ola francisco";
    }
    

    @GetMapping("/listar")
    public Iterable<VelModel> list() 
    {
        return vs.list();
    }
    
    @PostMapping("/cadastrar")
    public ResponseEntity<?> singin(@RequestBody VelModel entity) 
    {            
        return vs.sign_alter(entity,"cadastrar");
    }
    
    @PutMapping("/renovarinfo")
    public ResponseEntity<?> update(@RequestBody VelModel entity) 
    {            
        return vs.sign_alter(entity,"alterar");
    }

    @DeleteMapping("/remover/{code}")
    public ResponseEntity<?> remove(@PathVariable Long code) 
    {            
        return vs.delete(code);
    }
}

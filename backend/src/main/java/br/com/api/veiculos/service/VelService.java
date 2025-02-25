package br.com.api.veiculos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.veiculos.model.ResponseModel;
import br.com.api.veiculos.model.VelModel;
import br.com.api.veiculos.repository.VELrepo;

@Service
public class VelService 
{
    private VELrepo vr;   
    
    public Iterable<VelModel> list()
    {
        return vr.findAll();
    }

    @Autowired
    private ResponseModel rm;

    public ResponseEntity<?> sign_alter( VelModel vm,String action )
    {
        if ( vm.getMark().equals("") ) 
        {
            rm.setMessage("Marca do produto obrigatório");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST );
        }
        else if (vm.getModel().equals("")) 
        {
            rm.setMessage("Modelo do produto obrigatório");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST );
        }
        else if (vm.getYear().equals("")) 
        {
            rm.setMessage("Ano do produto obrigatório");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST );
        }
        else if (action.equals("cadastrar")) 
        {
            return new ResponseEntity<VelModel>(vr.save(vm), HttpStatus.CREATED);
        } 
        else 
        {
            return new ResponseEntity<VelModel>(vr.save(vm), HttpStatus.OK);
        }
    }

    public ResponseEntity<ResponseModel> delete(long code)
    {
        vr.deleteById(code);
        rm.setMessage("REMOÇÃO CONCLUIDA");

        return new ResponseEntity<ResponseModel>(rm, HttpStatus.OK); 
    }
}

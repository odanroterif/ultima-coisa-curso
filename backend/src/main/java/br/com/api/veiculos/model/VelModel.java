package br.com.api.veiculos.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "veiculo")
@Getter
@Setter
public class VelModel 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long code;    

    private String mark;
    private String model;
    private String year;
}

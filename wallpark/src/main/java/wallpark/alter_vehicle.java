package wallpark;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;


public class alter_vehicle 
{
    Connection conn;
    PreparedStatement state;
    ResultSet result;
    
    public void alter(String plate_id,String color,String model)
    {
        String sql_update = "UPDATE wallpark.carro SET cor = ?,modelo = ? WHERE placa = ?";        
        
        conn = new connection_class().conect();
        
        try 
        {
            state = conn.prepareStatement(sql_update);                   
            state.setString(1, color);
            state.setString(2, model);
            state.setString(3, plate_id);
            
            
            state.execute();            
            state.close();
        } catch (SQLException ex) 
        {
            JOptionPane.showMessageDialog(null, ex + " alter");
        }
    }   
    
    public void alter(String plate_id,String color)
    {
        String sql_update = "UPDATE wallpark.carro SET cor = ? WHERE placa = ?";        
        
        conn = new connection_class().conect();
        
        try 
        {
            state = conn.prepareStatement(sql_update);                   
            state.setString(1, color);
            state.setString(2, plate_id);            
            
            
            state.execute();            
            state.close();
        } catch (SQLException ex) 
        {
            JOptionPane.showMessageDialog(null, ex + " alter");
        }
    }  
     
    public void alter(String plate_id,String model,int trash)
    {
        String sql_update = "UPDATE wallpark.carro SET nome = ?,age = ? WHERE placa = ?";        
        
        conn = new connection_class().conect();
        
        try 
        {
            state = conn.prepareStatement(sql_update);                               
            state.setString(1, model);
            state.setString(2, plate_id);
            
            
            state.execute();            
            state.close();
        } catch (SQLException ex) 
        {
            JOptionPane.showMessageDialog(null, ex + " alter");
        }
    }  
      
    public void verify_plate(String plate)
    {
        String sql_querry = "SELECT placa FROM wallpark.carro";    
        boolean verify = false;
        
        
        try 
        {
            conn = new connection_class().conect();
            state = conn.prepareStatement(sql_querry);
            result = state.executeQuery(); 
            
            while (result.next())
            {                                
                if (plate.equals(result.getString("placa")))
                {
                    verify = true;
                    
                    break;
                }
            }
               if (verify == false)
               {
                   JOptionPane.showMessageDialog(null,"PLACA DE VEICULO NULO OU INVÁLIDO: alteração de dados não foi efetuada e a janela será fechada, favor inserir cpf na próxima vez");                                       
               }
            state.close();
        } catch (SQLException ex)
        {
            JOptionPane.showMessageDialog(null,ex + "verify");
        }
          
    }
}

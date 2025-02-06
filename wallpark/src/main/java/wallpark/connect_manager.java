package wallpark;


import interacters.vacancy;
import interacters.vehicle;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.swing.JOptionPane;

public class connect_manager 
{
    Connection conn;
    PreparedStatement state;
    ResultSet result;
    ArrayList<vacancy> querryvel = new ArrayList<>();    
    
    public void sign_in(vehicle mobil,vacancy day)
    {
        String insert_sql = "INSERT INTO carro (placa,cor,modelo) VALUES (?,?,?)";            
        conn = new connection_class().conect();
        
        
        try
        {            
            state = conn.prepareStatement(insert_sql);           
            state.setString(1,mobil.getPlate());
            state.setString(2,mobil.getColor()); 
            state.setString(3,mobil.getModel());            
            state.execute();
            state.close();
        }
        catch (SQLException e) 
        {
            JOptionPane.showMessageDialog(null, e + " connect manager");
        }
    }
    
    public void deleter(String plate)
    {
        String sql_delete = "DELETE FROM wallpark.carro WHERE placa= ?";        
        
        conn = new connection_class().conect();
        
        try 
        {
            state = conn.prepareStatement(sql_delete);                   
            state.setString(1, plate);
            
            
            state.executeUpdate();            
            state.close();
        } catch (SQLException ex) 
        {
            JOptionPane.showMessageDialog(null, ex + " deleter");
        }
    }     
    
    public ArrayList<vacancy> viewer()
    {
        String sql_querry = "SELECT * FROM wallpark.vaga ORDER BY idvaga";        
        
        conn = new connection_class().conect();
        
        try 
        {
            state = conn.prepareStatement(sql_querry);
            result = state.executeQuery();            
            
            while (result.next()) 
            {                                
                vacancy day = new vacancy();
                
                day.setId(result.getString("idvaga"));
                day.setDisponibilit(result.getString("disponibilidade"));                    
                day.setPid(result.getString("carro_placa"));
                
                
                querryvel.add(day);
            }
            state.close();
        } catch (SQLException ex) 
        {
            JOptionPane.showMessageDialog(null, ex + " viewer");
        }
        return querryvel;
    }
    
    public boolean verify_employ(String user,String pass)
    {
        String sql_querry = "SELECT nome,senha FROM wallpark.funcionario";    
        boolean verify = false;
        
        
        try 
        {
            conn = new connection_class().conect();
            state = conn.prepareStatement(sql_querry);
            result = state.executeQuery(); 
            
            while (result.next())
            {                                
                if (user.equals(result.getString("nome")) && pass.equals(result.getString("senha")))
                {
                    verify = true;
                    
                    break;
                }
            }               
            state.close();
        } catch (SQLException ex)
        {
            JOptionPane.showMessageDialog(null,ex + "verify");
        }
          
        return verify;
    }
}

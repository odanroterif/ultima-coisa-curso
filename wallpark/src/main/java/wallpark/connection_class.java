package wallpark;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.swing.JOptionPane;

public class connection_class
{
    public Connection conect()
    {
        Connection conect = null;
        
        
        try
        {
            String url = "jdbc:mysql://localhost/wallpark?user=root&password";
            conect = DriverManager.getConnection(url);
        }
        catch (SQLException e) 
        {
            JOptionPane.showMessageDialog(null, e.getMessage());
        }
             
        
        return conect;
    }
}

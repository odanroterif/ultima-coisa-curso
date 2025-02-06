package interacters;


public class vacancy 
{
    private String disponibilit; 
    private String id;
    private String pid;

    
    public String getDisponibilit() 
    {
        return disponibilit;
    }

    
    public void setDisponibilit(String disponibilit) 
    {
        this.disponibilit = disponibilit;
    }

   
    public String getId() 
    {
        return id;
    }
    
    
    public void setId(String id) 
    {
        this.id = id;
    }

    /**
     * @return the pid
     */
    public String getPid() {
        return pid;
    }

    /**
     * @param pid the pid to set
     */
    public void setPid(String pid) {
        this.pid = pid;
    }
}

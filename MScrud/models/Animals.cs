using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MScrud.models;

[Table("animais")]
public class Animals
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("idanimal")]
    public int Id { get; set; }

    [Required]
    [MaxLength(70)]
    [Column("nome")]
    public string Name { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    [Column("nome_do_animal")]
    public string AnimalName { get; set; } = string.Empty;
}
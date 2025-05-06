using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MScrud.data;
using MScrud.models;

namespace MScrud.Controllers;

[ApiController]
[EnableCors("*")]
[Route("v1/GerenciarAnimais")]
public class At : ControllerBase
{
    private readonly AppDbContext _context;

    public At(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Animals>>> ViewerAll() => await _context.ATcrud.ToListAsync();

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Animals dog)
    {
        if (!ModelState.IsValid)
            BadRequest(ModelState);

        _context.ATcrud.Add(dog);
        await _context.SaveChangesAsync();

        return Created("Cadastro Realizado.", dog);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Animals cat)
    {
        if (id != cat.Id)
            return BadRequest("A atualização falhou, o animal que você busca não existe");


        _context.Entry(cat).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return Ok(cat);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Del(int id)
    {
        var animal = await _context.ATcrud.FindAsync(id);
        var died = animal?.Name;

        if (animal != null && id != animal.Id)
            return NotFound("Aviso: a pessoa que você procura ja foi removida ou não existe");


#pragma warning disable CS8604 // Possible null reference argument.
        _context.ATcrud.Remove(animal);
#pragma warning restore CS8604 // Possible null reference argument.
        await _context.SaveChangesAsync();

        return Ok($"{died} foi retirado do sistema!");
    }
}
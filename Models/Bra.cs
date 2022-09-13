namespace bramatch_v1.Models;

public class Bra
{
    public Guid ID { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public BraSize Size { get; set; }
    public Guid SizeID { get; set; }
    public ICollection<String> StyleTypes { get; set; }
}
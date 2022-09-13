namespace bramatch_v1.Models;

public class UserProfile
{
    private ApplicationUser User { get; set; }
    public String About { get; set; }
    public double Band { get; set; }
    public double Bust { get; set; }
    public double Point { get; set; }
    public string MeasurmentSystem { get; set; }
    public bool Reduction { get; set; }
    public bool Binding { get; set; }
    public bool BreastFeeding { get; set; }
    public bool Implants { get; set; }
    public string ImplantType { get; set; }
    public bool WeightLoss { get; set; }
    public List<Bra> Bras { get; set; }
}
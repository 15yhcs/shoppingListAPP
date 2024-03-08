export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingrediants: string;
    
    constructor(name: string, description: string, imagePath: string, ingrediants: string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingrediants = ingrediants
    }
}
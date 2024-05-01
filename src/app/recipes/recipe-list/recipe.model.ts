import { Ingredients } from "../../shared/ingredient.modal";
export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingrediants: string;
    public ingrediantsList?: Ingredients;
    
    constructor(name: string, description: string, imagePath: string, ingrediants: string, ingrediantsList?: Ingredients){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingrediants = ingrediants
        this.ingrediantsList = ingrediantsList
    }
}
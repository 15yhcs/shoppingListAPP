import { Ingredients } from "../../shared/ingredient.modal";
export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingrediants: string;
    public ingrediantsList?: Ingredients;
    public id: number;
    
    constructor(name: string, description: string, imagePath: string, ingrediants: string, id: number, ingrediantsList?: Ingredients){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingrediants = ingrediants
        this.ingrediantsList = ingrediantsList
        this.id = id
    }
}
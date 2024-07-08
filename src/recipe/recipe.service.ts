import { Injectable } from '@nestjs/common';
import { Recipe, RecipeStatus } from './recipe.entity';
import { v4} from 'uuid';
import { UpdateRecipeDto } from './dto/recipe.dto';

@Injectable()
export class RecipeService {


    private recipe: Recipe[] = [
            {
                id:'1',
                name: 'first recipe',
                type: 'algo',
                instruction1: 'some recipe', 
                instruction2: 'some recipe',
                instruction3: 'some recipe',
                status: RecipeStatus.ACTIVE
            },
        ];

    getAllRecipe(){
        return this.recipe;
    }

    createRecipe(name:string, type:string, instruction1:string, instruction2:string, instruction3:string){
        const recipe = {
            id: v4(),
            name,
            type,
            instruction1,
            instruction2,
            instruction3,
            status: RecipeStatus.ACTIVE,
        };
        this.recipe.push(recipe);

        return recipe;
    }

    deleteRecipe(id:string){
        this.recipe = this.recipe.filter(recipe => recipe.id !==id)
    }

    getRecipeById(id:string):Recipe{
        return this.recipe.find(recipe => recipe.id === id)
    }

    updateRecipe(id:string, updatedFields:UpdateRecipeDto):Recipe{
        const recipe = this.getRecipeById(id)
        const newRecipe = Object.assign(recipe, updatedFields)
        this.recipe = this.recipe.map(recipe => recipe.id === id ? newRecipe: recipe)
        return newRecipe;
    }
    
}
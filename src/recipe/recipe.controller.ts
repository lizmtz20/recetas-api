import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto, UpdateRecipeDto } from './dto/recipe.dto';

@Controller('recipe')
export class RecipeController {


    constructor(private RecipeService: RecipeService){}

    @Get()
    getAllRecipe(){
        return this.RecipeService.getAllRecipe()
    }

    @Post()
    createRecipe(@Body() newRecipe: CreateRecipeDto){
        return this.RecipeService.createRecipe(newRecipe.name, newRecipe.type, newRecipe.instruction1, newRecipe.instruction2, newRecipe.instruction3)
    }

    @Delete(':id')
    deleteRecipe(@Param('id') id:string){
        this.RecipeService.deleteRecipe(id)
    }

    @Patch(":id")
    updateRecipe(@Param('id') id:string, @Body() updateFields:UpdateRecipeDto){
        return this.RecipeService.updateRecipe(id, updateFields)
    }
}


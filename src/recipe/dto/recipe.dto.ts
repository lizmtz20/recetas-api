import { RecipeStatus } from "../recipe.entity"
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

export class CreateRecipeDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    name: string

    @IsString()
    @IsNotEmpty()
    type: string

    @IsString()
    @IsNotEmpty()
    instruction1: string

    @IsString()
    @IsNotEmpty()
    instruction2: string

    @IsString()
    @IsNotEmpty()
    instruction3: string
}

export class UpdateRecipeDto{
    @IsString()
    @IsOptional()
    name?: string

    @IsString()
    @IsOptional()
    type?: string

    @IsString()
    @IsOptional()
    instruction1?: string

    @IsString()
    @IsOptional()
    instruction2?: string

    @IsString()
    @IsOptional()
    instruction3?: string

    @IsString()
    @IsOptional()
    @IsIn([RecipeStatus.FALSE, RecipeStatus.ACTIVE])
    status?: RecipeStatus
}
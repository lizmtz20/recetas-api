export enum RecipeStatus{
    ACTIVE = 'ACTIVE',
    FALSE = 'FALSE'
}

export class Recipe{
    id: string;
    name: string;
    type: string;
    instruction1: string;
    instruction2: string;
    instruction3: string;
    status: RecipeStatus;
}


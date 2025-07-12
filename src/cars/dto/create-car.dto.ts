import {IsString,MinLength} from 'class-validator';

export class CreateCarDto{
    @IsString({message:`que fue pe, ese campo no existe, el campo se llama brand`})
    readonly brand:string;

    @IsString({message:`que fue pe, ese campo no existe, el campo se llama model`})
    // para poner un limite de caracteres
    // @MinLength(3)
    readonly model:string;
}
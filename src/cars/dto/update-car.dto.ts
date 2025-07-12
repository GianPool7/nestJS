import {IsString,MinLength,IsOptional,IsUUID} from 'class-validator';

export class UpdateCarDto{

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?:    string;

    @IsString({message:`que fue pe, ese campo no existe, el campo se llama brand`})
    @IsOptional()
    readonly brand?: string;

    @IsString({message:`que fue pe, ese campo no existe, el campo se llama model`})
    @IsOptional()
    // para poner un limite de caracteres
    // @MinLength(3)
    readonly model?: string;
}
import { Controller,Get,Post,Patch,Delete,Body,Param,ParseIntPipe,ParseUUIDPipe,UsePipes,ValidationPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes( ValidationPipe )
export class CarsController {

    constructor(
        private readonly carsService:CarsService
    ){}


    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id',new ParseUUIDPipe({version:'5'}) ) id:string ){
        console.log({ id });
        return this.carsService.findOneById( id )
    }

    @Post()
    createCar(@Body() createCarDto:CreateCarDto){
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    editCar(
        @Param('id',ParseUUIDPipe) id : string,
        @Body() UpdateCarDto:UpdateCarDto)
    {
        return this.carsService.update(id,UpdateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id',ParseUUIDPipe) id:string){
        return this.carsService.delete(id)
    }

}
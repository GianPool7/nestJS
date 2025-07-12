import { Injectable,NotFoundException,BadRequestException } from '@nestjs/common';
import{ v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto,UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars:Car[]=[
        // {
        //     id:uuid(),
        //     brand:'toyota',
        //     model:'Corolla'
        // },
        // {
        //     id:uuid(),
        //     brand:'honda',
        //     model:'civic'
        // },
        // {
        //     id:uuid(),
        //     brand:'Jeep',
        //     model:'cheroke'
        // }
    ];

    findAll(){
        return this.cars
    }

    findOneById(id:string){
        const car=this.cars.find(car=>car.id===id);

        if (!car) throw new NotFoundException(`car with id '${id}' not found`);

        return car
    }

    create(createCarDto:CreateCarDto){

        const newCar:Car={
            id:uuid(),
            ...createCarDto
        }

        this.cars.push(newCar);

        return newCar;
    }

    update(id:string, UpdateCarDto:UpdateCarDto){

        let carDB=this.findOneById(id);

        if (UpdateCarDto.id && UpdateCarDto.id !== id) {
            throw new BadRequestException(`car id is not valid inside body`)
        }

        this.cars=this.cars.map(car=>{
            if (car.id===id) {
                carDB={...carDB,...UpdateCarDto,id}
                return  carDB;
            }
            return car;
        })

        // carro actualizado
        return ;

    }

    delete(id:string){
        const car=this.findOneById(id);
        this.cars=this.cars.filter(car=> car.id !==id );
    }

    fillCarsWithSeedData(cars:Car[]){
        this.cars=cars;
        //console.log(`los carros : `, this.cars);
        
    }

}

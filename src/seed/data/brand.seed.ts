import {v4 as uuid} from 'uuid'
import { Brand } from "src/brands/entities/brand.entity";

export const BRAND_SEED:Brand[]=[
    {
        id:uuid(),
        name:"volvo",
        createdAt:new Date().getTime(),
    },
    {
        id:uuid(),
        name:"jeep",
        createdAt:new Date().getTime(),
    },
    {
        id:uuid(),
        name:"honda",
        createdAt:new Date().getTime(),
    }
]
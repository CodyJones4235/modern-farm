import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createWheat } from "./seeds/wheat.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { addPlant } from "./field.js"


export const plantSeeds = (plans) => {
    for (const plan of plans){
        for (const items of plan){
            switch (items){
             case "Asparagus":
                addPlant(createAsparagus());
                break;
             case "Soybean":
                addPlant(createSoybean());
                break;
            case "Corn":
                addPlant(createCorn());
                break;
            case "Wheat":
                addPlant(createWheat());
                break;
            case "Sunflower":
                addPlant(createSunflower());
                break;
            default:
                break;
            }
        }
    }

}
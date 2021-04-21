const plants = [];

export const addPlant = (seeds) => {
    if (Array.isArray(seeds)){
        for (const seed of seeds){
            plants.push(seed)
        }
    }
    else{
        plants.push(seeds);
    }
}

export const usePlants = (seeds) => {
    return plants
}



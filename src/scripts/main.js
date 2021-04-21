import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPlan } from "./plan.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
console.log(addPlant())

// console.log(yearlyPlan)
// console.log(asparagusSeed)
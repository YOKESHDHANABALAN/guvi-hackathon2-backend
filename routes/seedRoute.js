import express from 'express'
import data from '../data.js';
import Cars from '../models/carsModel.js';
import Category from '../models/typeModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    await Cars.remove({});
    const createdCars = await Cars.insertMany(data.cars);

     await Category.remove({});
    const createdCategory = await Category.insertMany(data.category);


    res.send({createdCars,createdCategory});
});


   

export default seedRouter;
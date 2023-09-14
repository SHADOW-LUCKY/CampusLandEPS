import DBconnection from "../config/database.js";

export const allmedics = async (req, res) => {
    try {
        const db = await DBconnection();
        const collection = db.collection('medicos');
        const result = await  collection.find().toArray();
        res.status(200).json({
            data: result
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: error
        })
    }
}
/* 3. Obtener todos los médicos de una especialidad en específico (por ejemplo, **‘Cardiología’**) */
/* medico especifico se requiere escribir en el body la especialidad */
export const especificmedic = async (req, res) => {
    try {
        const db = await DBconnection();
        const collection = db.collection('medicos');

        const {especialidad} = req.body

        const result = await  collection.find({especialidad}).toArray();
        res.status(200).json({
            data: result
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: error
        })
    }
}
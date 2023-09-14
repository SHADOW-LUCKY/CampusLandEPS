import DBconnection from "../config/database.js";
/*  Obtener todos los pacientes de manera alfabética. */
export const listUserABC = async (req, res) => {
    try {
        const db = await DBconnection();
        const collection = db.collection('usuario');
        const result = await  collection.find().sort({nombre: 1}).toArray();
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


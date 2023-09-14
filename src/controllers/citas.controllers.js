import DBconnection from "../config/database.js";

/* Encontrar todas las citas de un día en específico (por ejemplo, **‘2023-07-12’**)*/
export const especificday = async (req, res) => {
    try {
        const db = await DBconnection();
        const collection = db.collection('cita');
        const {dia} = req.body
        const result = await  collection.find({fecha : {$eq: dia}}).toArray();
        result.length > 0 ? (
            res.status(200).json({
                data: result
            })
        ):(
            res.status(400).json({
                message: "No hay citas canceladas en ese mes",
                data: result
            })
        )
    } catch (error) {
        res.status(400).json({
            message: error
        })
        console.log(error);
    }
}

/* Encontrar la próxima cita para un paciente en específico (por ejemplo, el paciente con **user_id 1**) */

/* export const nextcita = async (req, res) => {
    try {
        const db = await DBconnection();
        const collection = db.collection('cita');
        const {nombre} = req.body
        const result = await collection.find({usuario : {$eq: nombre}}).toArray();
        let array = []
        result.forEach(e => {
            e.estado == "Atendida"|| e.estado == "Cancelada" ? array.push(e)
        })
        result.length > 0 ? (
            
            res.status(200).json({
                data: array
            })         
        ):(
            res.status(400).json({
                message: "No hay citas proximas para este usuario",
                data: result
            })
        )
    } catch (error) {
        res.status(400).json({
            message: error
        })
        console.log(error);
    }
} */
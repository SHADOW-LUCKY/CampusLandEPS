import express from 'express' 
import dotenv from 'dotenv'
import userRoutes from './src/routes/usuario.routes.js'
import medicRoutes from './src/routes/medicos.routes.js'
import citaRoutes from './src/routes/citas.routes.js'

dotenv.config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.use('/user', userRoutes)
app.use('/medic', medicRoutes)
app.use('/cita', citaRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})



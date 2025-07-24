import express from "express"
import cors from 'cors'
import movies from './api/movies.route.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/movies", movies)

app.get('/', (req, res) => {
    res.send('Root route working!')
});

app.use('/{*any}',(req,res)=>{
    res.status(404).json({error: "not found"})
})

export default app
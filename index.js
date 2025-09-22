import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log('Working')
    
    res.send('hello from ghislain')
})

app.listen(PORT, () => {
    console.log(`server Running on http://localhost:${PORT}`)
})
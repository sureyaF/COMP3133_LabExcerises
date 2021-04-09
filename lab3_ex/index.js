const express = require(`express`)
const app = express()
const mongoose = require(`mongoose`)
const port = 8080

const bodyParser=require('body-parser')

require(`dotenv/config`)
const usrl=process.env.DB_CONNECTION
const restaurantsRoute=require(`./routes/restaurants`)


//Middlewares
app.use(bodyParser.json())

app.use(`/restaurants`,restaurantsRoute)

//Routes
/*
app.get('/', (req, res) => {
    res.send(`we are home`)
})

app.get('/restaurants', (req, res) => {
    res.send(`we are in restaurants`)
})
*/
//Connect to db

mongoose.connect(usrl,
    { useUnifiedTopology: true,useNewUrlParser: true },
    ()=>{console.log(`Connected to DB..`)}
    )


app.listen(port,
    () => {
        console.log(`server is running on port: ${port}`)
    }
)
const express = require('express')
const port = 8083
const app = express()


const mongoose = require(`mongoose`)
const url = 'mongodb+srv://sureyaF:UnicornFarah369@cluster0.v5ecj.mongodb.net/gbc_full_stack?retryWrites=true&w=majority'
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true },
    () => { console.log(`DB Connected --------------------------------------------------`) }
)

const UserRoutes = require(`./routes/UserRoutes`)

app.use(express.json());
app.use(UserRoutes);

//const bodyParser = require('body-parser')








//app.use(`/users`, userRoutes)
//app.use(bodyParser.json())




app.listen(port, () => { console.log(`server is running at ${port} -----------------------------------`) })
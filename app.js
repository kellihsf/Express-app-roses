const express = require('express')
const es6Renderer = require('express-es6-template-engine')
const nameslist = require('./routes/nameslist')


const app = express()
const port = "3000"

const db = require('./models/db')

const indexRouter = require('./routes/index')
// const namesList = require('./routes/nameslist')

app.get('/', (req, res) =>{
    res.json(db);
})

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(express.static('public'))

// app.use("/", indexRouter)
// app.use("/nameslist", namesList)

// app.get("/", (req, res) => { 
//     res.render('home', {
//         partials: {
//             head: "/partials/home" 
//         }
//     });     
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
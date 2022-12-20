//? Dependencies
const express = require('express')
const cors = require('cors')
const db = require('./utils/database')

//? Files
const { port } = require('./config')

//? Routes
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const categoryRouter = require('./categories/categories.router')
const recipeRouter = require('./recipes/recipes.router')

const initModels = require('./models/initModels')

//? Initial configs
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Ok!',
        users: `localhost: ${port}/api/v1/users`
    })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/categories', categoryRouter)
app.use('/api/v1/recipes', recipeRouter)

db.authenticate()
    .then(() => {
        console.log('Database Authenticated');
    })
    .catch(err => {
        console.log(err);
    })

db.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch(err => {
        console.log(err);
    })

initModels()

app.listen(port, () =>{
    console.log(`Server started at port ${port}!`)
})
import express from 'express'
import { run } from './database/connect'
import { router } from './routes'

const app = express()    
app.use(express.json())

Main()

app.use(router)
app.listen('3000', () => console.log('Server online!'))

async function Main() { 
    await run()   

}
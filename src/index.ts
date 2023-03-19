import express from 'express'
import { run } from './database/connect'
import { router } from './routes'
import  cors  from 'cors'

const app = express()
app.use(express.json())

Main()

app.use(cors())
app.use(router)
app.listen('3000', () => console.log('Server online!'))

async function Main() {
    await run()
}
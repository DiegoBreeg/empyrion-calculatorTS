import { connect, set } from 'mongoose';
import 'dotenv/config'


async function run() {
    try {
        console.log('Connecting do Database')
        set('strictQuery', true)
        await connect(String(process.env.uri))
        console.log('Connected!')
    } catch (err) {
        console.log(err)
    }

}

export { run }
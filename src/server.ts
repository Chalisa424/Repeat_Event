import express, {Request, Response} from 'express';
const app = express()
const port = 3000

app.get('/',(req: Request, res:Response)=>{
    let returnObj = {
        name: 'John Doe',
        age: 30,
        occupation: 'Software Engineer'
    }
    res.send(returnObj)
})

app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`)
})
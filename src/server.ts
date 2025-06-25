import express, {Request, Response} from 'express';
import type { Event } from './models/Event.ts';
import { getEventByCategory, getAllEvents,getEventById, addEvent } from './repository/EventRepository.js';

const app = express()
app.use(express.json())
const port = 3000



app.get('/',(req: Request, res:Response)=>{
    res.send('Hello World!')
})

app.get('/test',(req: Request, res:Response)=>{
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
})

app.get('/events',async (req,res)=> {
    if (req.query.category) {
        const category = req.query.category  as string;
        const filteredEvents = await getEventByCategry(category as string);
        res.json(filteredEvents);
    } else {
        res.json(await getAllEvents());
    }
})

app.get('/events/:id',async (req,res)=>{
    const id = parseInt(req.params.id);
    const event = await getEventById(id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send('Event not found');
    }
})

app.post('/events',async (req,res) =>{
  const newEvent : Event = req.body;
  await addEvent(newEvent)
  res.json(newEvent);
})

app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`)
})





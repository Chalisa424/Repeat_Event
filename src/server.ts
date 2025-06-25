import express, {Request, Response} from 'express';
import { get } from 'http';
const app = express()
const port = 3000

app.use(express.json())

app.get('/',(req: Request, res:Response)=>{
    res.send('Hello World!')
})

app.get('/test',(req: Request, res:Response)=>{
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
})

app.get('/events',(req,res)=> {
    if (req.query.category) {
        const category = req.query.category  as string;
        const filteredEvents = getEventByCategry(category as string);
        res.json(filteredEvents);
    } else {
        res.json(getAllEvents());
    }
})

app.get('/events/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const event = getEventById(id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send('Event not found');
    }
})

app.post('/events',(req,res) =>{
  const newEvent : Event = req.body;
  addEvent(newEvent)
  res.json(newEvent);
})

app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`)
})

function getEventByCategry(category : string): Event[]{
     const filteredEvents = events.filter((event)=> event.category === category);
     return filteredEvents;
}

function getAllEvents(): Event[]{
    return events;
}

function getEventById(id: number): Event | undefined {
    return events.find((event)=> event.id === id);
}

function addEvent(newEvent : Event): Event{
    newEvent.id = events.length + 1;
    events.push(newEvent);
    return newEvent;
}
interface Event{
    id : number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    petAllowed: boolean;
    organizer: string;
}

const events: Event[] = [{
   
    id: 1,
    category: 'Music',
    title: 'Concert in the Park',
    description: 'Join us for a free concert featuring local bands.',
    location: 'Central Park',
    date: '2023-10-15',
    time: '18:00',
    petAllowed: true,
    organizer: 'City Events Committee'
},
{
    id: 2,
    category: 'Art',
    title: 'Art Exhibition',
    description: 'Local artists showcase their latest works.',
    location: 'Downtown Gallery',
    date: '2023-11-01',
    time: '10:00',
    petAllowed: false,
    organizer: 'Art Lovers Association'
},
{
    id: 3,
    category: 'Sports',
    title: 'Community Soccer Match',
    description: 'Friendly soccer match for all ages.',
    location: 'Riverside Field',
    date: '2023-09-20',
    time: '15:00',
    petAllowed: true,
    organizer: 'Youth Sports Club'
},
{
    id: 4,
    category: 'Education',
    title: 'Tech Workshop',
    description: 'Learn the basics of coding in a fun environment.',
    location: 'City Library',
    date: '2023-10-05',
    time: '14:00',
    petAllowed: false,
    organizer: 'Tech for All'
},
{
    id: 5,
    category: 'Food',
    title: 'Farmers Market',
    description: 'Fresh produce and local goods every weekend.',
    location: 'Market Square',
    date: '2023-10-21',
    time: '09:00',
    petAllowed: true,
    organizer: 'Local Farmers Association'
},
{
    id: 6,
    category: 'Theater',
    title: 'Outdoor Play',
    description: 'Enjoy a classic play performed under the stars.',
    location: 'Open Air Theater',
    date: '2023-10-28',
    time: '19:30',
    petAllowed: false,
    organizer: 'City Theater Group'

}]


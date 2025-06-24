import express, {Request, Response} from 'express';
const app = express()
const port = 3000

app.get('/',(req: Request, res:Response)=>{
    res.send('Hello World!')
})

app.get('/test',(req: Request, res:Response)=>{
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
})

app.get('/events',(req,res)=> {
    res.json(events);
})

app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`)
})

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
import type { Event } from "../models/Event";
import connection from "../db";

export async function getEventByCategory(category : string):Promise<Event[]>{
    const [row] = await connection.execute('SELECT * FROM events WHERE category = ?', [category]);
        return row as Event[]; 
}

export async function getAllEvents():Promise<Event[]> {
    const [row] = await connection.execute('SELECT * FROM events')
    return row as Event[];
}

export async function getEventById(id: number):Promise<Event |undefined> {
    const [row] = await connection.execute('SELECT * FROM events WHERE id = ?',[id]);
    const events = row as Event[];//แปลงข้อมูลที่ได้จากฐานข้อมูลให้ TypeScript เข้าใจว่าเป็น array ของ Event
    return events.length > 0 ? events[0] : undefined;
}

export async function addEvent(newEvent:Event):Promise<Event> {
    const {category, title, description, location, date, time, petAllowed, organizer} = newEvent;
    const result = await connection.execute('INSERT INTO events(category, title, description, location, date, time, petAllowed, organizer) VALUES (?,?,?,?,?,?,?,?)',[category, title, description, location, date, time, petAllowed, organizer]);
    newEvent.id = (result as any).insertId;         
    return newEvent;
}


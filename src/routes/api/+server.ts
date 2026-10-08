import {json} from '@sveltejs/kit';

export async function GET() {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/4.0`;

    const response = await fetch(url);
    const data = await response.json();

    return json(data);
}
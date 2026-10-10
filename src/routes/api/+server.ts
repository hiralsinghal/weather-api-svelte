import {json} from '@sveltejs/kit';

import { SECRET_API_KEY } from '$env/static/private';

export async function GET() {
    const url = `https://api.openweathermap.org/data/4.0/onecall/timeline/1h?lat=${lat}&lon=${lon}&appid=${SECRET_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return json(data);
}
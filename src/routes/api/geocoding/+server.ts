import { json } from "@sveltejs/kit";
import { RequestHandler } from "@sveltejs/kit";
import { SECRET_API_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ url, fetch }) => {
    const city = url.searchParams.get('city')?.trim();
    const country = url.searchParams.get('country')?.trim();

    if (!city) {
        return json({error: 'city is required'}, {status: 400});
    }

    const query = [city, country].filter(Boolean).join(',');

    const response = await fetch (
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${SECRET_API_KEY}`
    );

    const data = await response.json();

    return json(data, {status: response.status});
};

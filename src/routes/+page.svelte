<script lang="ts">
<<<<<<< HEAD
    let apiResults, baseURL = "https://api.openweathermap.org/data/4.0";

    const getAPIAsync = (baseURL) => {
        fetch(baseURL)
        .then((response) => response.json())
        .then((response) => apiResults = response);
    }

    const handleClick = () => {
        getAPIAsync(URL);
    }

    $state apiResults
=======
    let weatherData: any = null;

    async function getWeatherData() {
        const res = await fetch('/api');
        weatherData = await res.json();
    }
>>>>>>> fadf47cf4e60a738e1075404ea307375dda791fb
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<<<<<<< HEAD
<button onclick={handleClick}>Fetchs</button>

<div>{apiResults ? JSON.stringify(apiResults, null, 2):""}</div>
=======
<button onclick={getWeatherData}>Fetch Weather Data</button>
>>>>>>> fadf47cf4e60a738e1075404ea307375dda791fb

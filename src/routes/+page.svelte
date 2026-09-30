<script lang="ts">
    let weatherData: any = null;

    async function getWeatherData() {
        const res = await fetch('/api');
        weatherData = await res.json();
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<button onclick={getWeatherData}>Fetch Weather Data</button>


<script lang="ts">
    let apiResults, URL = "https://api.openweathermap.org/data/4.0";

    const getAPIAsync = (URL) => {
        fetch(URL)
        .then((response) => response.json())
        .then((response) => apiResults = response);
    }

    const handleClick = () => {
        getAPIAsync(URL);
    }

    $$: apiResults
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<button onclick={handleClick}>Fetchs</button>

<div>{apiResults ? JSON.toString(apiResults, null, 2):""}</div>
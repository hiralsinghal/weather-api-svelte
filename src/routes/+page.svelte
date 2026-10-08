
<script lang="ts">
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
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<button onclick={handleClick}>Fetchs</button>

<div>{apiResults ? JSON.stringify(apiResults, null, 2):""}</div>
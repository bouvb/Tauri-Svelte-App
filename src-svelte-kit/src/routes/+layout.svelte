<script lang="ts">
	import './layout.css';
	import Sidebarmenu from '$lib/components/sidebarmenu/sidebarmenu.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
	<title>Tauri App - Home</title>
</svelte:head>

<div class="app-layout">
	<Navbar />
	<Sidebarmenu />
	{@render children()}
</div>

<style>
	:global(#svelte) {
		width: 100%;
		height: 100%;
	}

	.app-layout {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		font-family: var(--font-prestige);
		color: var(--color-black-border);

		border-color: var(--color-black-border);
	}
</style>

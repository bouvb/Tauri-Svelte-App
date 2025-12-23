<script lang="ts">
	// lib
	import githubIcon from '$lib/assets/github.svg';
	import { appRoutes } from '$lib/routes.js';

	let apps = appRoutes.filter((route) => route.path !== '/');
</script>

<header class="flex-none flex flex-col items-center justify-center gap-2 w-full h-30">
	<h1 class="text-2xl font-bold">Home</h1>
	<p>Welcome to my Tauri app 💻</p>
</header>
<main class="flex-auto p-4 flex flex-col items-center justify-start w-full gap-3">
	<h2 class="text-xl font-medium text-orange-400">Apps</h2>
	<div
		class="flex flex-col items-center justify-center gap-3 m-2 bg-grey-normal py-7 px-1 w-60 rounded border-2 border-black-border">
		{#each apps as app}
			<a
				href={app.path}
				class="cursor-pointer no-underline hover:bg-grey-dark hover:underline active:bg-grey-second decoration-2 rounded p-1 px-2 w-full text-center"
				>{app.title}</a>
		{/each}
	</div>
</main>
<footer
	class="flex-none flex flex-col items-center justify-center gap-1 w-full h-24 p-2 border-t-2 border-black-border bg-whitegray text-black-border text-[12px]">
	<a
		href="https://github.com/bouvb/Tauri-Svelte-App"
		class="w-fit inline-flex gap-2 items-center hover:cursor-pointer pt-1 text-black-border text-[12px] mx-auto"
		target="_blank">
		<img src={githubIcon} alt="GitHub Icon" class="size-4 inline-block" />
		<p>Project page</p>
	</a>
</footer>

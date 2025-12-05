<script lang="ts">
	import arrowCircleLeftIcon from '$lib/assets/angle-circle-left.svg';
	import { appRoutes } from '$lib/routes.js';
	import { sidebarOpen, closeSidebar } from './sidebarmenu-store.svelte.js';
	import SidebarmenuElem from './subcomponents/sidebarmenu-elem.svelte';
</script>

<aside class="absolute w-64 h-full bg-grey-light border-r-2 p-4 flex flex-col" class:open={$sidebarOpen}>
	<button
		onclick={closeSidebar}
		class="flex-none w-full inline-flex gap-2 items-center mb-4 hover:underline hover:cursor-pointer hover:bg-grey-normal p-1 rounded active:bg-grey-dark">
		<img src={arrowCircleLeftIcon} alt="close Icon" class="size-4.5" />
		<p>close</p>
	</button>
	<h2>Sidebar Menu</h2>
	<hr class="mb-4 border" />
	<ul class="grow">
		{#each appRoutes as route}
			<SidebarmenuElem onclick={closeSidebar} {...route} />
		{/each}
	</ul>
	<div class="flex-none mt-8 text-sm text-grey-dark">
		<p>© 2025 My Tauri Svelte App</p>
		<p>Version 0.0.1</p>
	</div>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.5s ease-in-out;
	}

	aside.open {
		left: 0;
	}
</style>

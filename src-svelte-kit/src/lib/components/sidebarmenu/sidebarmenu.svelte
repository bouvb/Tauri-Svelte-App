<script lang="ts">
	// lib
	import arrowCircleLeftIcon from '$lib/assets/angle-circle-left.svg';
	import githubIcon from '$lib/assets/github.svg';
	import { appRoutes } from '$lib/routes.js';
	import { clickOutside } from '$lib/actions/click-outside.js';

	// component & store
	import { sidebarOpen, closeSidebar } from './sidebarmenu-store.svelte.js';
	import SidebarmenuElem from './subcomponents/sidebarmenu-elem.svelte';
</script>

<aside
	class="absolute w-64 h-full bg-grey-light border-r-2 p-4"
	class:open={$sidebarOpen}
	tabindex="-1"
	use:clickOutside={closeSidebar}>
	<nav aria-label="Apps menu" class="h-full flex flex-col">
		<button
			class="flex-none w-full inline-flex gap-2 items-center mb-4 [&>p]:no-underline hover:[&>p]:underline hover:cursor-pointer hover:bg-grey-normal [&>p]:decoration-2 p-1 rounded active:bg-grey-dark"
			aria-label="Closing menu"
			type="button"
			onclick={closeSidebar}>
			<img src={arrowCircleLeftIcon} alt="close Icon" class="size-4.5" />
			<p>close</p>
		</button>
		<h2>Apps Menu</h2>
		<hr class="mb-4 border" />
		<ul class="grow">
			{#each appRoutes as route}
				<SidebarmenuElem {...route} onclick={closeSidebar} />
			{/each}
		</ul>
		<div class="flex-none mt-8 text-sm text-grey-dark">
			<p>© 2025 My Tauri Svelte App</p>
			<p>Version 0.0.1</p>
			<a
				href="https://github.com/bouvb/Tauri-Svelte-App"
				class="w-fit inline-flex gap-2 items-center hover:cursor-pointer pt-1 text-black-border text-[12px]"
				target="_blank">
				<img src={githubIcon} alt="GitHub Icon" class="size-4 inline-block" />
				<p>Project page</p>
			</a>
		</div>
	</nav>
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

<script lang="ts">
	// lib
	import SidebarmenuBtn from '$lib/components/sidebarmenu/sidebarmenu-btn.svelte';
	import { appRoutes } from '$lib/routes.js';

	// store
	import { page } from '$app/state';

	// current app
	let currentApp = $derived(appRoutes.find((app) => app.path === '/' + page.url.pathname.split('/')[1]));
</script>

<nav
	id="navbar"
	class="bg-grey-light flex-none inline-flex gap-2 items-center h-12 header p-2 border-b-2 border-black-border">
	<SidebarmenuBtn />
	{#if !currentApp?.children}
		<h2 class="ml-1.5">{currentApp?.title}</h2>
	{:else}
		<h2 class="ml-1.5">
			<a class="cursor-pointer no-underline hover:underline decoration-2" href={currentApp.path}
				>{currentApp?.title}</a>
		</h2>
		<p>•</p>
		<div tabindex="-1" class="menu inline-block relative focus-within:[&>ul]:flex focus-within:[&>button]:bg-red">
			<button
				class="cursor-pointer hover:bg-grey-normal p-1 rounded active:bg-grey-dark"
				type="button"
				aria-haspopup="menu"
				aria-expanded="false"
				aria-controls="app-menu">
				Menu
			</button>
			<ul
				id="app-menu"
				role="menu"
				class="hidden absolute z-10 top-full -left-2 bg-grey-light border-b-2 border-x-2 border-black-border
				p-2 flex-col gap-2 shadow-lg">
				{#each currentApp.children as child}
					<li role="menuitem">
						<a
							href={currentApp.path + child.path}
							class="cursor-pointer w-fit whitespace-nowrap hover:bg-grey-normal p-1 rounded active:bg-grey-dark no-underline hover:underline decoration-2"
							>{child.title}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

<script lang="ts">
	import appsIcon from '$lib/assets/apps.svg';
	import { sidebarOpen, toggleSidebar } from './sidebarmenu-store.svelte.js';
</script>

<button onclick={toggleSidebar}>
	<img src={appsIcon} alt="apps icon" class="size-4.5" class:clicked={$sidebarOpen} />
</button>

<style>
	img {
		rotate: -90deg;
		transition: rotate 0.3s ease-in-out;
	}

	img.clicked {
		rotate: 0deg;
	}
</style>

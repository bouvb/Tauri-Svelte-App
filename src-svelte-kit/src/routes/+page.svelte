<script lang="ts">
	import { invoke } from '@tauri-apps/api/core';

	let greetInput = '';
	let greetMsg = '';

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
		let res: string = '';
		try {
			res = await invoke('greet', { name: greetInput });
		} catch (e) {
			res = 'error: ' + (e as Error).message;
		}
		greetMsg = res;
	}
</script>

<header class="flex-none">
	<h1>Home</h1>
	<p>Welcome to my Tauri app</p>
</header>
<main class="flex-auto bg-orange-normal">
	<h2>Apps</h2>
	<div class="row">
		<a href="/api-caller">api caller </a>
	</div>
</main>
<footer class="flex-none flex flex-col items-center justify-center w-full h-24 border-t">
	<!-- TODO : Faire en sorte de pas pouvoir aller ailleurs que sur cette page -->
	<p>Page du projet</p>
</footer>

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

<main class="container">
	<h1>Welcome to Tauri</h1>

	<div class="row">
		<a href="https://vite.dev" target="_blank">
			<img src="/src/lib/assets/vite.svg" class="logo vite" alt="Vite logo" />
		</a>
		<a href="https://tauri.app" target="_blank">
			<img src="/src/lib/assets/tauri.svg" class="logo tauri" alt="Tauri logo" />
		</a>
		<a href="https://www.typescriptlang.org/docs" target="_blank">
			<img src="/src/lib/assets/typescript.svg" class="logo typescript" alt="typescript logo" />
		</a>
	</div>
	<p>Click on the Tauri logo to learn more about the framework</p>

	<form class="row" id="greet-form" on:submit|preventDefault={greet}>
		<input id="greet-input" placeholder="Enter a name..." bind:value={greetInput} />
		<button type="submit">Greet</button>
	</form>
	<p id="greet-msg">{greetMsg}</p>

	<a href="/api-caller" class="mx-auto w-fit"> nav to API Caller</a>

	<button id="test-btn" class="test-btn-class" type="button"> Test Btn </button>
	<p id="test-msg"></p>
</main>

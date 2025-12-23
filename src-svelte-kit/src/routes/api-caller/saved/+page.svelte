<script lang="ts">
	import { invoke } from '@tauri-apps/api/core';

	let wordInput = '';
	let resToDisplay = '';

	const callAPI = async () => {
		let word: string = wordInput ? wordInput : 'hello';
		let res: string = '';

		try {
			// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
			res = await invoke('call_api', {
				word: word,
			});
		} catch (e) {
			res = 'error: ' + (e as Error).message;
		} finally {
			resToDisplay = res as string;
		}
	};
</script>

<main class="container h-full flex flex-col items-center justify-center mx-auto p-4 gap-2">
	<h1>Saved</h1>

	<!-- <input class="w-auto rounded" type="text" placeholder="Enter your word e.g. hello" bind:value={wordInput} />
	<button class="btn-primary" type="button" on:click|preventDefault={() => callAPI()}>Call Api</button>
	<textarea readonly class="grow p-2 w-full mx-4 resize-none border rounded bg-grey-normal">{resToDisplay}</textarea> -->
</main>

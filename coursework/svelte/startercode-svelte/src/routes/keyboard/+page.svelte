<script lang="ts">
	let searchText = '';

	const keys = [
		'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
		'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
		'Z', 'X', 'C', 'V', 'B', 'N', 'M'
	];

	function addChar(char: string) {
		searchText += char;
	}

	function removeLast() {
		searchText = searchText.slice(0, -1);
	}

	function search() {
		console.log('Searching for:', searchText);
	}

	function onKeyPress(e: KeyboardEvent) {
		const char = e.key.toUpperCase();
		if (char.match(/^[A-Z]$/)) {
			addChar(char);
		} else if (e.key === 'Backspace') {
			removeLast();
		} else if (e.key === 'Enter') {
			search();
		}
	}
</script>

<svelte:window onkeydown={onKeyPress} />

<div class="container">
	<div class="search-container">
		<input type="text" placeholder="Search anonymous chats..." bind:value={searchText} readonly />
		<div class="search-text">{searchText}</div>
	</div>

	<div class="keyboard">
		<div class="keyboard-row">
			{#each keys.slice(0, 10) as key}
				<button class="key" onclick={() => addChar(key)}>{key}</button>
			{/each}
		</div>

		<div class="keyboard-row">
			{#each keys.slice(10, 19) as key}
				<button class="key" onclick={() => addChar(key)}>{key}</button>
			{/each}
		</div>

		<div class="keyboard-row">
			{#each keys.slice(19, 26) as key}
				<button class="key" onclick={() => addChar(key)}>{key}</button>
			{/each}
		</div>

		<div class="keyboard-row action-row">
			<button class="key space" onclick={() => addChar(' ')}>Space</button>
			<button class="action-btn backspace" onclick={removeLast}>⌫</button>
		</div>

		<div class="keyboard-row action-row">
			<span class="counter">{searchText.length}</span>
			<button class="action-btn search" onclick={search}>Go</button>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background: linear-gradient(135deg, #1a1f3a 0%, #2d1b4e 100%);
		color: white;
		padding: 1rem;
		gap: 1rem;
	}

	.search-container {
		position: relative;
		width: 100%;
	}

	input {
		width: 100%;
		padding: 1rem;
		background: rgba(255, 255, 255, 0.1);
		border: 2px solid rgba(77, 217, 217, 0.3);
		border-radius: 8px;
		color: white;
		font-size: 1rem;
	}

	input::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}

	input:focus {
		outline: none;
		border-color: #4dd9d9;
	}

	.search-text {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1rem;
		color: #4dd9d9;
		font-size: 1rem;
		pointer-events: none;
	}

	.keyboard {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex: 1;
		justify-content: center;
	}

	.keyboard-row {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.keyboard-row.action-row {
		justify-content: space-between;
		padding: 0 1rem;
		gap: 1rem;
	}

	.key {
		min-width: 32px;
		height: 40px;
		padding: 0.5rem;
		background: rgba(77, 217, 217, 0.1);
		border: 1px solid rgba(77, 217, 217, 0.3);
		border-radius: 6px;
		color: white;
		cursor: pointer;
		font-size: 0.9rem;
		font-weight: 600;
		transition: all 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.key:hover {
		background: rgba(77, 217, 217, 0.2);
		border-color: #4dd9d9;
	}

	.key:active {
		transform: scale(0.95);
	}

	.key.space {
		flex: 1;
		min-width: 150px;
	}

	.action-btn {
		min-height: 40px;
		padding: 0.5rem 1rem;
		background: rgba(77, 217, 217, 0.2);
		border: 1px solid rgba(77, 217, 217, 0.4);
		border-radius: 6px;
		color: white;
		cursor: pointer;
		font-size: 0.9rem;
		font-weight: 600;
		transition: all 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.action-btn:hover {
		background: rgba(77, 217, 217, 0.3);
		border-color: #4dd9d9;
	}

	.action-btn.backspace {
		min-width: 60px;
	}

	.action-btn.search {
		background: #4dd9d9;
		color: #1a1f3a;
		border: none;
		font-weight: 700;
		min-width: 80px;
	}

	.action-btn.search:hover {
		background: #3ac5c5;
	}

	.counter {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 60px;
		padding: 0.5rem;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(77, 217, 217, 0.3);
		border-radius: 6px;
		font-size: 0.9rem;
	}
</style>

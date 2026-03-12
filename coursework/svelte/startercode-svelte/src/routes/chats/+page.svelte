<script lang="ts">
	import { goto } from '$app/navigation';

	let chats = [
		{ id: 1, name: 'Chat 1', lastMessage: '...' },
		{ id: 2, name: 'Chat 2', lastMessage: '...' },
		{ id: 3, name: 'Chat 3', lastMessage: '...' },
		{ id: 4, name: 'Chat 4', lastMessage: '...' }
	];

	function openChat(id: number) {
		goto(`/chat/${id}`);
	}

	function newChat() {
		goto('/start');
	}
</script>

<div class="container">
	<header class="chat-header">
		<div class="header-top">
			<h1>Anonify</h1>
		</div>
	</header>

	<div class="chat-list">
		{#each chats as chat (chat.id)}
			<button class="chat-item" onclick={() => openChat(chat.id)}>
				<div class="avatar"></div>
				<div class="chat-info">
					<div class="chat-name">{chat.name}</div>
					<div class="chat-preview">{chat.lastMessage}</div>
				</div>
			</button>
		{/each}
	</div>

	<button class="fab" onclick={newChat} title="New Chat">+</button>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background: linear-gradient(135deg, #1a1f3a 0%, #2d1b4e 100%);
		color: white;
	}

	.chat-header {
		padding: 1.5rem;
		background: rgba(0, 0, 0, 0.3);
		border-bottom: 1px solid rgba(77, 217, 217, 0.2);
	}

	.header-top h1 {
		margin: 0;
		color: #4dd9d9;
		font-size: 1.8rem;
		font-weight: 700;
		text-align: center;
	}

	.chat-list {
		flex: 1;
		overflow-y: auto;
		padding: 0.5rem;
	}

	.chat-item {
		display: flex;
		gap: 1rem;
		width: 100%;
		padding: 1rem;
		background: rgba(77, 217, 217, 0.05);
		border: 1px solid rgba(77, 217, 217, 0.1);
		border-radius: 8px;
		color: white;
		cursor: pointer;
		transition: all 0.2s;
		margin-bottom: 0.5rem;
		text-align: left;
	}

	.chat-item:hover {
		background: rgba(77, 217, 217, 0.1);
		border-color: rgba(77, 217, 217, 0.3);
	}

	.avatar {
		width: 50px;
		height: 50px;
		min-width: 50px;
		border-radius: 50%;
		background: rgba(77, 217, 217, 0.3);
		border: 2px solid rgba(77, 217, 217, 0.5);
	}

	.chat-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.chat-name {
		font-weight: 600;
		color: #4dd9d9;
		margin-bottom: 0.25rem;
	}

	.chat-preview {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.6);
	}

	.fab {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background-color: #4dd9d9;
		color: #1a1f3a;
		border: none;
		font-size: 1.8rem;
		font-weight: 700;
		cursor: pointer;
		box-shadow: 0 4px 15px rgba(77, 217, 217, 0.4);
		transition: all 0.3s;
	}

	.fab:hover {
		background-color: #3ac5c5;
		transform: scale(1.1);
	}

	.fab:active {
		transform: scale(0.95);
	}
</style>

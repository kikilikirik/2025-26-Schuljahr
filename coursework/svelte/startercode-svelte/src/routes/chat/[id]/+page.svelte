<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let messages = [
		{ id: 1, text: 'Hello!', isOwn: false },
		{ id: 2, text: 'Hi there!', isOwn: true }
	];
	let newMessage = '';

	function sendMessage() {
		if (newMessage.trim()) {
			messages = [
				...messages,
				{
					id: messages.length + 1,
					text: newMessage,
					isOwn: true
				}
			];
			newMessage = '';
		}
	}

	function goBack() {
		goto('/chats');
	}
</script>

<div class="container">
	<header class="chat-header">
		<button class="back-btn" onclick={goBack}>←</button>
		<h1>Chat #{$page.params.id}</h1>
		<div></div>
	</header>

	<div class="messages">
		{#each messages as message (message.id)}
			<div class="message" class:own={message.isOwn}>
				<div class="message-bubble">
					{message.text}
				</div>
			</div>
		{/each}
	</div>

	<div class="input-area">
		<input
			type="text"
			placeholder="Type a message..."
			bind:value={newMessage}
			onkeydown={(e) => {
				if (e.key === 'Enter') sendMessage();
			}}
		/>
		<button onclick={sendMessage}>Send</button>
	</div>
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
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		background: rgba(0, 0, 0, 0.3);
		border-bottom: 1px solid rgba(77, 217, 217, 0.2);
	}

	.back-btn {
		background: none;
		border: none;
		color: #4dd9d9;
		font-size: 1.5rem;
		cursor: pointer;
		padding: 0.5rem;
		transition: all 0.2s;
	}

	.back-btn:hover {
		color: #3ac5c5;
		transform: scale(1.1);
	}

	.chat-header h1 {
		margin: 0;
		color: #4dd9d9;
		font-size: 1.2rem;
		flex: 1;
		text-align: center;
	}

	.messages {
		flex: 1;
		overflow-y: auto;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.message {
		display: flex;
		justify-content: flex-start;
	}

	.message.own {
		justify-content: flex-end;
	}

	.message-bubble {
		max-width: 70%;
		padding: 0.75rem 1rem;
		border-radius: 12px;
		background: rgba(77, 217, 217, 0.2);
		border: 1px solid rgba(77, 217, 217, 0.3);
		word-wrap: break-word;
	}

	.message.own .message-bubble {
		background: #4dd9d9;
		color: #1a1f3a;
		border: none;
	}

	.input-area {
		display: flex;
		gap: 0.5rem;
		padding: 1rem;
		background: rgba(0, 0, 0, 0.3);
		border-top: 1px solid rgba(77, 217, 217, 0.2);
	}

	input {
		flex: 1;
		padding: 0.75rem;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(77, 217, 217, 0.3);
		border-radius: 6px;
		color: white;
		font-size: 1rem;
	}

	input::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}

	input:focus {
		outline: none;
		border-color: #4dd9d9;
		background: rgba(255, 255, 255, 0.15);
	}

	button {
		padding: 0.75rem 1.5rem;
		background-color: #4dd9d9;
		color: #1a1f3a;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		font-weight: 600;
		transition: all 0.2s;
	}

	button:hover {
		background-color: #3ac5c5;
	}

	button:active {
		transform: scale(0.95);
	}
</style>

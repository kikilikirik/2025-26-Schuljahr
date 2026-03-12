<script lang="ts">
	import { goto } from '$app/navigation';

	function startChat() {
		goto('/chats');
	}
</script>

<div class="container">
	<div class="logo">
		<svg width="60" height="60" viewBox="0 0 80 80" fill="none">
			<!-- Alien head -->
			<circle cx="40" cy="35" r="18" fill="#4dd9d9" />
			<!-- Left eye -->
			<ellipse cx="32" cy="30" rx="5" ry="8" fill="#1a3a3a" />
			<!-- Right eye -->
			<ellipse cx="48" cy="30" rx="5" ry="8" fill="#1a3a3a" />
			<!-- Mouth -->
			<path d="M 35 40 Q 40 42 45 40" stroke="#1a3a3a" stroke-width="2" fill="none" />
		</svg>
	</div>
	<h1>Anonify</h1>
	<button onclick={startChat}>Start Chat</button>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background: linear-gradient(135deg, #1a1f3a 0%, #2d1b4e 100%);
		color: white;
		text-align: center;
		gap: 2rem;
	}

	.logo {
		animation: float 3s ease-in-out infinite;
	}

	h1 {
		font-size: 2.5rem;
		margin: 0;
		color: #4dd9d9;
		font-weight: 700;
		letter-spacing: 2px;
	}

	button {
		padding: 1rem 2rem;
		font-size: 1.1rem;
		background-color: #4dd9d9;
		color: #1a1f3a;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		font-weight: 600;
		transition: all 0.3s;
		box-shadow: 0 4px 15px rgba(77, 217, 217, 0.3);
	}

	button:hover {
		background-color: #3ac5c5;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(77, 217, 217, 0.4);
	}

	button:active {
		transform: translateY(0);
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-20px);
		}
	}
</style>

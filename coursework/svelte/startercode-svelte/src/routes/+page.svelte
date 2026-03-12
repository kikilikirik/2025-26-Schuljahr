<script lang="ts">
</script>

<div class="container">
	<div class="logo">
		<svg width="80" height="80" viewBox="0 0 80 80" fill="none">
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
	<p>Anonymous Chat Application</p>
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
		font-size: 3rem;
		margin: 0;
		color: #4dd9d9;
		font-weight: 700;
		letter-spacing: 2px;
	}

	p {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
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

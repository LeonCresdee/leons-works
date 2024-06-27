<script>
	export const prerender = true;
	export const trailingSlash = 'always';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<slot></slot>

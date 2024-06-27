<script>
	import { base } from '$app/paths';
</script>

<div class="navbar">
	<a href={base} class="title">Leons.Works</a>
</div>

<style lang="sass">
.title
  font-family: $font-header
  font-size: 42px
  display: flex
  align-items: baseline
  color: $colour-text
  text-decoration: none
  letter-spacing: 0.1em

.navbar
  margin-bottom: 2rem
  padding: 4rem 0

</style>

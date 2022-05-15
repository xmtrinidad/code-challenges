<script lang="ts">
  import '../styles/global.css';
  import AppHeader from '../components/app-header.svelte';
</script>

<AppHeader></AppHeader>

<main>
  <slot></slot>
</main>

<!-- <footer>
  <span>This be the footer</span>
</footer> -->
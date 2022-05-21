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

<style>
  main {
    margin: 100px 0 24px 0;
  }
</style>
<script lang="ts">
  import Sun from "./svgs/sun.svelte";
  import Moon from "./svgs/moon.svelte";

  let isDarkTheme = false;

  function onThemeToggle() {
    isDarkTheme = !isDarkTheme;
  }
</script>

<button class="theme-toggle" on:click={onThemeToggle}>
  <Sun svgColor="#ffffff"></Sun>
  <div class="toggle-bar">
    <span class="toggle-bar-circle" data-darktheme={isDarkTheme}></span>
  </div>
  <Moon svgColor="#ffffff"></Moon>
</button>


<style>
  .theme-toggle {
    display: flex;
  }

  .toggle-bar {
    width: 46px;
    height: 24px;
    background-color: #fff;
    border-radius: 24px;
    display: flex;
    align-items: center;
    padding: 0 4px;
    margin: 0 12px;
  }

  .toggle-bar-circle {
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: #5864de;
    transition: transform .2s;
  }

  .toggle-bar-circle[data-darktheme="true"] {
    transform: translateX(23px);
  }
</style>
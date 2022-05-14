<script lang="ts">
  import ThemeToggle from "./theme-toggle.svelte"
</script>

<header>
  <div class="col col-left">
    <h1>devjobs</h1>
  </div>
  <div class="col col-right">
    <ThemeToggle></ThemeToggle>
  </div>
</header>


<style>
  header {
    /* background-color: #5964e0; */
    background-image: url('src/assets/header-bg.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 48px 32px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media(min-width: 768px) {
    header {
      border-bottom-left-radius: 75px;
      padding: 48px 90px
    }
  }

  
</style>
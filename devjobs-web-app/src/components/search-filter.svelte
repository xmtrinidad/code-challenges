<script lang="ts">
  import FilterIcon from "./svgs/filter.svelte";
  import SearchIcon from './svgs/search.svelte';
</script>

<div class="search-filter">
  <div class="col-mobile title-input-container">
    <label for="title_input">Filter by title, companies, expertise, etc</label>
    <input placeholder="Filter by title" type="text" id="title_input">
  </div>
  <div class="col-mobile mobile-actions-col">
    <button class="filter-btn"><FilterIcon svgColor="#6e8098" width="28px" height="28px"></FilterIcon></button>
    <button class="search-btn"><SearchIcon svgColor="#fff"></SearchIcon></button>
  </div>
</div>

<style>
  .search-filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 100px;
    background-color: #fff;
    padding: 16px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.2);
  }

  .mobile-actions-col {
    display: flex;
    gap: 12px
  }

  .title-input-container {
    width: 100%;
  }

  #title_input {
    width: 100%;
  }

  .filter-btn,
  .search-btn {
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-btn {
    background-color: #5965df;
    border-radius: 6px;
  }
</style>
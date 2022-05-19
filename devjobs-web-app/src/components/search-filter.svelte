<script lang="ts">
  import FilterIcon from "./svgs/filter.svelte";
  import SearchIcon from './svgs/search.svelte';

  let isFilterActive = false;

  function filterToggle() {
    isFilterActive = !isFilterActive;
  }

  function onSearch() {
    console.log('search works');
  }
</script>

<div class="search-filter-mobile">
  <div class="mobile-main">
    <div class="col-mobile input-container">
      <label for="title_input">Filter by title, companies, expertise, etc</label>
      <input placeholder="Filter by title" type="text" id="title_input">
    </div>
    <div class="col-mobile mobile-actions-col">
      <button class="filter-btn" on:click={filterToggle}><FilterIcon svgColor="#6e8098" width="28px" height="28px"></FilterIcon></button>
      <button class="search-btn" on:click={onSearch}><SearchIcon svgColor="#fff"></SearchIcon></button>
    </div>
  </div>
  {#if isFilterActive}
    <div class="mobile-additional">
      <div class="col-mobile input-container">
        <label for="location_input">Filter by location</label>
        <input placeholder="Filter by location" type="text" id="location_input">
      </div>
      <div class="col-mobile full-time-mobile-checkbox-container">
        <input type="checkbox" id="full-time-checkbox" name="vehicle1" value="Bike">
        <label for="full-time-checkbox">Full Time Only</label>
      </div>
    </div>
  {/if}
  
</div>

<style>
  .search-filter-mobile {
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

  .mobile-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .col-mobile {
    display: flex;
    align-items: center;
  }

  .mobile-actions-col {
    display: flex;
    gap: 12px
  }

  .input-container {
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

  .mobile-additional {
    margin-top: 12px;
  }

  label[for="full-time-checkbox"] {
    opacity: 1;
    pointer-events: initial;
    position: static;
    color: #000;
    font-weight: bold;
    margin-left: 4px;
  }

  @media (min-width: 768px) {
    .mobile-additional {
      display: none;
    }
  }
</style>
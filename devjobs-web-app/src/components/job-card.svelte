<script type="ts">
  import type { JobCard } from '../types/JobCard';
  export let jc: JobCard;

  let iconBgColor = randomizeIconBackgroundColor();

  function randomizeIconBackgroundColor() {
    const hexCodes = ['#e06dae', '#3cb3d3', '#3e3b94', '#f0b529', '#e66c3b', '#242021', '#5965df', '#f97f68', '#007dfe', '#492a28', '#61dcad', '#ff5860'];

    return hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  
</script>

<div class="job-card">
  <div class="job-card-header">
    <div style="background-color: {iconBgColor}" class="job-card-header__logo">
    {@html jc.icon}
    </div>
  </div>
  <div class="job-card-body">
    <div class="job-card-body__time">
      <span>{jc.time}h Ago</span>
      <span class="dot-separator">•</span>
      {#if jc.isFullTime}
        <span>Full Time</span>
      {:else}
        <span>Part Time</span>
      {/if}
    </div>
    <div class="job-card-body__job-title">
      <h2>{jc.jobTitle}</h2>
    </div>
    <div class="job-card-body__job-company">
      <span class="company">{jc.company}</span>
    </div>
  </div>
  <div class="job-card-footer">
    {#each jc.locations as location, i}
      {#if i === jc.locations.length-1}
        <button class="location-name-filter">{location}</button>
      {:else}
        <button class="location-name-filter">{location},</button>
      {/if}
    {/each}
    
  </div>
</div>

<style>
  .job-card {
    width: 290px;
    background-color: #fff;
    border-radius: 8px;
    padding: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .job-card-header {
    margin-bottom: -28px;
  }

  .job-card-body {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .job-card-header__logo {
    /* Default backup color */
    background-color: #e06dae;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -52px;
  }

  :global(.job-card-header__logo svg) {
    fill: #fff;
  }

  .job-card-body__time,
  .job-card-body__job-company {
    color: #8c90a0;
    font-size: 1.22rem;
    display: flex;
    gap: 12px;
  }

  .job-card-body__job-title h2 {
    color: #191f2e;
  }

  .job-card-footer {
    margin-top: 16px;
    display: flex;
    gap: 6px;
  }

  .location-name-filter {
    font-size: 1rem;
    color: #6168df;
    font-weight: 600;
  }
</style>
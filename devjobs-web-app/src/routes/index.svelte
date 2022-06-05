<script lang="ts">
  import type { JobCard } from '../types/JobCard';
  import JobCardComponent from '../components/job-card.svelte';

  const jobCards: Promise<JobCard[]> = (async () => {
    const response = await fetch('http://localhost:5000/api/jobs');
    const results = await response.json();
    return results.jobs;
  })();

  
</script>

<div class="job-cards">
  {#await jobCards}
    <p>Getting jobs...</p>
  {:then jobs}
    {#each jobs as job}
      <JobCardComponent {job}></JobCardComponent>
    {/each}
  {:catch error}
    <p>An error occurred!</p>
  {/await}
  
</div>

<style>
  .job-cards {
    margin: 0 28px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
</style>
<script lang="ts">
  import type { Card } from '../types/Card';
  import JobCard from '../components/job-card.svelte';

  const cards: Card[] = [
    { icon: '', time: 1, isFullTime: true, jobTitle: '', company: '', location: '' }
  ]
</script>

<div class="job-cards">
  <JobCard></JobCard>
  <JobCard></JobCard>
  <JobCard></JobCard>
</div>

<style>
  .job-cards {
    margin: 0 28px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
</style>
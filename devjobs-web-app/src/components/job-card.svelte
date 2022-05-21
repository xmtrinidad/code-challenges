<div class="job-card">
  <div class="job-card-header">
    <div class="job-card-header__logo">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z"/></svg>
    </div>
  </div>
  <div class="job-card-body">
    <div class="job-card-body__time">
      <span>5h Ago</span>
      <span class="dot-separator">•</span>
      <span>Full Time</span>
    </div>
    <div class="job-card-body__job-title">
      <h2>Senior Software Engineer</h2>
    </div>
    <div class="job-card-body__job-company">
      <span class="company">Scoot</span>
    </div>
  </div>
  <div class="job-card-footer">
    <button class="location-name-filter">United Kingdom</button>
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

  .job-card-header__logo svg {
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
  }

  .location-name-filter {
    font-size: 1rem;
    color: #6168df;
    font-weight: 600;
  }
</style>
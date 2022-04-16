<script>
  import Dice from "../components/svgs/dice.svelte";
  let promise = fetchNewAdvice();

  async function fetchNewAdvice() {
    const response = await self.fetch("https://api.adviceslip.com/advice");

    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  }

  function getNewAdvice() {
    promise = fetchNewAdvice();
  }
</script>

<div class="advice-box">
  <div class="advice-box-header">
    {#await promise}
      <!-- <h2></h2> -->
    {:then data}
      <h2>ADVICE #{data.slip.id}</h2>
    {/await}
  </div>
  <div class="advice-box-body">
    {#await promise}
      <p>...Getting quote</p>
    {:then data}
      <p>{data.slip.advice}</p>
    {/await}
  </div>
  <div class="advice-box-break">
    <div class="line" />
    <div class="bars">
      <div class="bar" />
      <div class="bar" />
    </div>
    <div class="line" />
  </div>
  <div class="advice-box-footer">
    <button on:click={getNewAdvice}><Dice /></button>
  </div>
</div>

<style>
  .advice-box {
    margin: 60px auto;
    position: relative;
    width: 524px;
    background-color: #313a49;
    padding: 24px;
    text-align: center;
    border-radius: 12px;
  }

  .advice-box-header h2 {
    margin: 0;
    font-size: 0.9rem;
    letter-spacing: 1.5px;
    color: #50feaa;
  }

  .advice-box-body p {
    color: #b7c8d4;
    margin: 24px 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .advice-box-break {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 32px;
  }

  .advice-box-break .line {
    height: 2px;
    background-color: #3a4453;
    width: 100%;
  }

  .advice-box-break .bars {
    display: flex;
    gap: 4px;
    margin: 0 10px;
  }

  .advice-box-break .bar {
    width: 4px;
    height: 12px;
    border-radius: 4px;
    background-color: #cfdfe9;
  }

  .advice-box-footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .advice-box-footer button {
    position: absolute;
    background-color: #50feaa;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -32px;
  }
</style>

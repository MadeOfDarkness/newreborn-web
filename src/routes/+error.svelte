<script>
  import { page } from '$app/stores';
</script>

<svelte:head><title>NewReborn - Web | {$page.status}</title></svelte:head>
<section>
  <h1>{$page.status}: {$page.error.message}</h1>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url('https://i.imgur.com/BfUEEEN.jpg');   
    height: 68.6vh; 
  }

  h1 {
    text-transform: uppercase;
    font-size: 56px;
    text-align: center;
    -webkit-text-stroke: 2px #000000;
    backdrop-filter: blur(10px);
    padding: 10px 34px;
  }
</style>
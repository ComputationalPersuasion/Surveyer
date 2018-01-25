<template>
  <div id="app">
    <s-survey>
      <h1 slot="header">Cycling in the city</h1>
    </s-survey>
  </div>
</template>

<script>
import { SSurvey, SStep } from './components';

export default {
  name: 'app',
  components: {
    SStep,
    SSurvey,
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Welcome to Vue.js Single File Component
      <a href="https://vuejs.org" target="_blank" 
        rel="noopener">Vue.js documentation</a>.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
h1 { margin: 40px 0 0; }
a { color: #42b983; }
</style>



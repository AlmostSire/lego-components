<template>
  <div>hello world</div>
</template>

<script lang="ts" setup>
const fn = () => {
  console.log(1);
};
fn();

interface IProps {
  name: string;
}
defineProps<IProps>();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

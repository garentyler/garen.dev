<template>
  <p :style="{ color: color }">
    {{ text }}
  </p>
</template>

<script>
export default {
  props: {
    color: String,
    text: String,
  },
};
</script>

<style scoped lang="scss">
p {
  font-size: 12em;
  margin: 0px;
  padding: 0px;
}
</style>

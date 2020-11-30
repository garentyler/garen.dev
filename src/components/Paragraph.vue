<template>
  <div class="paragraph">
    <p>
      <slot />
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.paragraph {
  display: flex;
  justify-content: center;
  p {
    text-align: center;
    max-width: 50vw;
  }
}
</style>

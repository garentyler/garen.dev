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
  @media screen and (max-width: 1200px) {
    p {
      max-width: 75vw;
    }
  }
  @media screen and (max-width: 700px) {
    p {
      max-width: 90vw;
    }
  }
}
</style>

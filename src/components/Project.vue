<template>
  <div class="project">
    <Container>
      <a
        v-if="!!projectLink"
        :href="projectLink"
        target="_blank"
      >
        <h3> {{ projectName }} </h3>
      </a>
      <h3 v-else> {{ projectName }} </h3>
    </Container>
    <Paragraph>
      <slot />
    </Paragraph>
  </div>
</template>

<script>
import Paragraph from '@/components/Paragraph.vue';
import Container from '@/components/Container.vue';

export default {
  components: {
    Paragraph,
    Container,
  },
  props: ['projectName', 'projectLink'],
};
</script>

<style scoped lang="scss">
.project {
  margin-bottom: 30px;
  h3 {
    margin-bottom: 10px !important;
  }
}
</style>

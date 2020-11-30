<template>
  <div class="photography">
    <h1>Photography</h1>
    <Container>
      <Paragraph>
        Shot on iPhone Xs, iPhone 12, and Sony Alpha a6000 with 16-50mm kit lens.
      </Paragraph>
    </Container>
    <hr>
    <label style="padding-right: 6px;">Columns:</label>
    <select v-model="numGalleryColumns">
      <option
        v-for="n in numGalleryColumnOptions"
        :key="n"
        :value="n"
      >
        {{ n }}
      </option>
    </select>
    <PhotoGallery
      :photos="photos"
      :num-cols="numGalleryColumns"
    />
  </div>
</template>

<script>
import Container from '@/components/Container.vue';
import Paragraph from '@/components/Paragraph.vue';
import PhotoGallery from '@/components/PhotoGallery.vue';
import { PHOTOS_URL } from '@/consts';
import ky from 'ky';

export default {
  components: {
    Container,
    Paragraph,
    PhotoGallery,
  },
  data() {
    return {
      photos: [],
      numGalleryColumns: 3,
    };
  },
  computed: {
    numGalleryColumnOptions() {
      const options = [];
      for (let i = 2; i <= 5; i++) {
        options.push(i);
      }
      return options;
    },
  },
  async mounted() {
    this.photos = await ky.get(PHOTOS_URL).json();
    this.photos.sort((a, b) => new Date(a.mtime) < new Date(b.mtime));
  },
};
</script>

<style scoped lang="scss">
.photography {
  text-align: center;
}
</style>

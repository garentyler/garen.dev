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
        v-for="n in maxGalleryColumns"
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
      maxGalleryColumns: 5,
    };
  },
  computed: {
    width() {
      return window.innerWidth;
    },
  },
  async mounted() {
    this.photos = await ky.get(PHOTOS_URL).json();
    this.photos.sort((a, b) => new Date(a.mtime) < new Date(b.mtime));
    this.numGalleryColumns = this.calcNumColumns(window.innerWidth);
    window.addEventListener('resize', () => {
      this.numGalleryColumns = this.calcNumColumns(window.innerWidth);
    });
  },
  methods: {
    calcNumColumns(width) {
      const maxColumnWidth = 500;
      return Math.min(
        this.maxGalleryColumns,
        Math.floor(width / maxColumnWidth) + 1,
      );
    },
  },
};
</script>

<style scoped lang="scss">
.photography {
  text-align: center;
}
</style>

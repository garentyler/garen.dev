<template>
  <div class="photography">
    <h1>Photography</h1>
    <Container>
      <Paragraph>
        Shot on iPhone Xs, iPhone 12, DJI Mavic Air 2, and Sony Alpha a6000 with 16-50mm kit lens.<br>
        Click each picture for full quality, prints are available via contacting me.
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
    const fullPhotos = [];
    const smallPhotos = [];
    const photos = await ky.get(PHOTOS_URL).json();
    photos.forEach((p) => {
      const nameWithoutExtension = p.name.split('.').slice(0, -1).join('.');
      const extension = p.name.split('.').pop();
      if (nameWithoutExtension.slice(-6) === '-small') {
        smallPhotos.push({
          ...p,
          actualName: `${nameWithoutExtension.slice(0, -6)}.${extension}`,
        });
      } else {
        fullPhotos.push(p);
      }
    });
    this.photos = fullPhotos.map((fullSize) => {
      const smallSize = smallPhotos.find((sm) => sm.actualName === fullSize.name);
      return {
        name: fullSize?.name || smallSize?.name,
        fullSize: fullSize?.name || smallSize?.name,
        smallSize: smallSize?.name || fullSize?.name,
      };
    });
    this.photos = this.shuffle(this.photos);
    this.numGalleryColumns = this.calcNumColumns(window.innerWidth);
    window.addEventListener('resize', () => {
      this.numGalleryColumns = this.calcNumColumns(window.innerWidth);
    });
  },
  methods: {
    shuffle(arr) {
      // Stolen from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array.
      const a = arr;
      let j;
      let x;
      let i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    },
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

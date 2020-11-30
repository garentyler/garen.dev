<template>
  <div class="photo-gallery">
    <div
      class="gallery-column"
      v-for="(column, columnNum) in columns"
      :key="columnNum"
      :style="columnStyle"
    >
      <a
        v-for="photo in column"
        :key="photo.name"
        :href="`${PHOTOS_URL}/${photo.name}`"
      >
        <img
          class="gallery-image"
          :src="`${PHOTOS_URL}/${photo.name}`"
          :alt="photo.name"
        >
      </a>
    </div>
  </div>
</template>

<script>
import { PHOTOS_URL } from '@/consts';

export default {
  props: {
    photos: {
      type: Array,
      default: () => ([]),
    },
    numCols: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      PHOTOS_URL,
    };
  },
  computed: {
    columns() {
      const cols = [];
      for (let i = 0; i < this.numCols; i++) {
        cols.push([]);
      }
      // console.log(cols);
      this.photos.forEach((p, i) => {
        // console.log(`${p.name} (${i}) goes in column ${i % this.numCols}`);
        cols[i % this.numCols].push(p);
      });
      // console.log(cols);
      return cols;
    },
    columnStyle() {
      return {
        width: `${Math.floor(100 / this.numCols)}%`,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.photo-gallery {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;

  .gallery-column {
    padding: 0.5rem;

    .gallery-image {
      width: 100%;
      margin-top: 0.5rem;
      border: 2px solid white;
      // box-shadow: 0px 15px 10px 1px black;
    }
  }
}
</style>

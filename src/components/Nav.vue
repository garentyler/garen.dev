<template>
  <div>
    <div class="nav dark-theme">
      <router-link to="/">
        <img class="G_logo" alt="My logo" src="@/assets/G_logo.svg" />
      </router-link>
      <span v-if="!mobileView" class="items">
        <a
          v-for="item in items"
          :key="item.label"
          @click="onItemClick(item).preventDefault"
        >
          {{ item.label }}
        </a>
      </span>
      <a
        v-if="mobileView"
        class="right"
        @click="toggleMobileItems"
      >
        <i class="fas fa-bars"></i>
      </a>
    </div>
    <span v-if="mobileView && showMobileItems" class="items-mobile">
      <a
        v-for="item in items"
        :key="item.label"
        @click="onItemClick(item).preventDefault"
      >
        {{ item.label }}
      </a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {
      mobileView: false,
      showMobileItems: false,
    };
  },
  methods: {
    onItemClick(navItem) {
      this.showMobileItems = false;
      if (navItem.routerLink) {
        this.$router.push(navItem.link);
      } else {
        window.location = navItem.link;
      }
    },
    toggleMobileItems() {
      this.showMobileItems = !this.showMobileItems;
    },
    onResize() {
      this.mobileView = window.innerWidth < 700;
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
};
</script>

<style scoped lang="scss">
.items-mobile {
  width: 100%;
  a {
    display: block;
    padding: 20px;
    height: 18px;
    line-height: 1;
    text-align: center;
    color: #f2f2f2;
    background-color: #111;
    border-top: 1px dotted #333;

    &:hover {
      color: #f2f2f2;
      background-color: #009444;
    }
  }
}
.nav {
  overflow: hidden;
  height: 58px;
  transition: background-color 0.5s ease-in-out;
  background-color: #111;

  > * {
    float: left;
    display: block;
    text-align: center;
    color: #f2f2f2 !important; // Override link colors.
    line-height: 1;
    transition: background-color 0.2s ease-in-out;
    font-size: 20px !important;

    &:first-child {
      padding: 10px;
    }
    &.right {
      float: right;
    }
    &:not(:first-child) {
      padding: 20px;
      color: #f2f2f2;
      height: 18px;

      &.items {
        padding-left: 0px;
        padding-right: 0px;
        text-align: center;

        a {
          padding: 20px;
          height: 18px;
          color: #f2f2f2;

          &:hover {
            color: #f2f2f2;
            background-color: #009444;
          }
        }
      }
    }
  }

  .G_logo {
    width: 40px;
    height: 40px;
    margin: 0px;
    padding: 0px;
  }
}
</style>

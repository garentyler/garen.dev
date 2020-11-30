<template>
  <div
    class="nav"
    :class="{
      'dark-theme': $store.state.currentTheme == 'dark',
      'light-theme': $store.state.currentTheme == 'light',
    }"
  >
    <router-link to="/">
      <img class="G_logo" alt="My logo" src="@/assets/G_logo.svg" />
    </router-link>
    <a href="https://github.com/garentyler">GitHub</a>
    <router-link to="/code">Code</router-link>
    <a href="mailto:garentyler@gmail.com">Contact</a>
    <a
      class="right"
      @click="toggleTheme"
    >
      <span v-if="$store.state.currentTheme == 'light'">
        Light Theme <i class="fas fa-sun" style="padding-left: 8px;"></i>
      </span>
      <span v-else>
        Dark Theme <i class="fas fa-moon" style="padding-left: 8px;"></i>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'nav',
  methods: {
    toggleTheme() {
      switch (this.$store.state.currentTheme) {
        case 'dark':
          this.$store.commit('setTheme', 'light');
          break;
        case 'light':
          this.$store.commit('setTheme', 'dark');
          break;
        default:
          this.$store.commit('setTheme', 'dark');
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  overflow: hidden;
  height: 58px;
  transition: background-color 0.5s ease-in-out;

  &.light-theme {
    background-color: #333;

    a:not(:first-child):hover {
      background-color: #00a651;
    }
  }

  &.dark-theme {
    background-color: #111;

    a:not(:first-child):hover {
      background-color: #009444;
    }
  }

  a {
    float: left;
    display: block;
    text-align: center;
    color: #f2f2f2 !important; // Override link colors.
    line-height: 1;

    transition: background-color 0.2s ease-in-out;

    &.right {
      float: right;
    }

    &:first-child {
      padding: 10px;
      height: 38px;
    }

    &:not(:first-child) {
      font-size: 20px !important;
      padding: 20px;
      color: #f2f2f2;
      height: 18px;

      &:hover {
        color: #f2f2f2;
        // background-color: #009444; // Darker green.
        background-color: #00a651; // Lighter green.
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

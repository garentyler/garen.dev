<template>
  <div id="app">
    <Nav :items="navItems" />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      navItems: [
        {
          link: 'https://github.com/garentyler',
          label: 'GitHub',
          routerLink: false,
        },
        {
          link: '/code',
          label: 'Code',
          routerLink: true,
        },
        {
          link: '/photos',
          label: 'Photography',
          routerLink: true,
        },
        {
          link: 'mailto:garentyler@gmail.com',
          label: 'Contact',
          routerLink: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0px !important;
  padding: 0px !important;
  width: 100% !important;
  height: 100% !important;
}

* {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  line-height: 1.8;

  a {
    text-decoration: none;
  }

  h1 {
    padding: 0px;
    margin: 50px;
    font-size: 50px;
  }

  h2 {
    padding: 0px;
    margin: 30px;
    font-size: 40px;
  }

  h3 {
    padding: 0px;
    margin: 20px;
    font-size: 30px;
  }

  hr {
    margin: 36px 0px;
    padding: 0px;
    margin-left: auto;
    margin-right: auto;
    max-width: 50%;
    border: 1px solid #bbb;
  }

  .smallhr {
    margin-left: auto;
    margin-right: auto;
    max-width: 50%;
    border: 1px dashed #ccc;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s !important;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0 !important;
    transform: translateY(30px) !important;
  }
}
</style>

<template>
  <div class="main">
    <MobileApp v-if="isMobile" />
    <DesktopApp v-else />
  </div>
</template>

<script>
import DesktopApp from "./components/desktop/Desktop.vue";
import MobileApp from "./components/mobile/Mobile.vue";

export default {
  name: "App",
  components: { 
    DesktopApp,
    MobileApp,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    isMobileDevice() {
      this.isMobile = screen.width <= 1080
    },
    windowResized() {
      this.isMobileDevice();
    },
  },
  created() {
    this.isMobileDevice();
    window.addEventListener("resize", this.windowResized);   
  },
};
</script>

<style>
* {
  font-family: "Barlow Condensed", sans-serif;
}

.main {
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: white;
}
</style>

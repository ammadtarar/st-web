<template>
  <div class="desktop">
    <Home @onClickNavItem="onClickNavItem" />
    <About id="about" />
    <Services id="services" />
    <Portfolio id="portfolio" />
    <Contact id="contact" />
    <Footer />
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Services from "./pages/Services.vue";
import Portfolio from "./pages/Portfolio.vue";
import Contact from "./pages/Contact.vue";
import Footer from "./pages/Footer.vue";

export default {
  name: "Desktop",
  components: {
    Home,
    About,
    Services,
    Portfolio,
    Contact,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    onClickNavItem(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
};
</script>

<style scoped>
.desktop {
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
}
</style>

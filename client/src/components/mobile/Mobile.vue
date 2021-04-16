<template>
  <div class="mobile">
    <Home @onClickMenu="onClickMenu" @onClickLearnMore="onClickLearnMore" />
    <About id="about" />
    <Services id="services" />
    <Portfolio id="portfolio" />
    <Contact id="contact" />
    <Footer />

    <div class="menu-card" v-if="showMenu">
      <img
        src="../../assets/ic_close.png"
        class="menu-close"
        @click="onClickClose"
      />

      <img src="../../assets/st-logo-full.png" alt="" class="menu-logo" />

      <button class="menu-item" @click="onClickMenuItem" id="about">
        about
      </button>
      <button class="menu-item" @click="onClickMenuItem" id="services">
        services
      </button>
      <button class="menu-item" @click="onClickMenuItem" id="portfolio">
        portfolio
      </button>
      <button
        class="menu-item menu-contact-bt"
        @click="onClickMenuItem"
        id="contact"
      >
        contact
      </button>
    </div>
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
  name: "Mobile",
  components: {
    Home,
    About,
    Services,
    Portfolio,
    Contact,
    Footer,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    onClickLearnMore() {
      this.scrollToItem("about");
    },
    onClickMenuItem(item) {
      this.showMenu = false;
      this.scrollToItem(item.target.id);
    },
    scrollToItem(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    onClickMenu() {
      this.showMenu = true;
    },
    onClickClose() {
      this.showMenu = false;
    },
  },
  created() {},
};
</script>

<style>
.mobile {
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
}

.menu-card {
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.95) 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
}

.menu-close {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 20px;
  height: 20px;
  z-index: 4;
  padding: 10px;
}

.menu-logo {
  width: 100px;
  margin-bottom: 30px;
}

.menu-item {
  font-size: 22px;
  font-weight: 300;
  color: rgb(31, 30, 30);
  background: transparent;
  outline: none;
  border: none;
  margin-top: 40px;
}

.menu-contact-bt {
  height: 50px;
  line-height: 50px;
  width: 150px;
  border-radius: 25px;
  background: transparent;
  color: #eb6d89;
  border: 2px solid #eb6d89;
  line-height: 20px;
  transition: 0.5s all;
}
</style>

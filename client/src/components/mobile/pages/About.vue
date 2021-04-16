<template>
  <div class="mobile-about">
    <div class="moile-about-content">
      <label class="mobile-home-title">
        about
      </label>

      <label class="mobile-home-desc">
        Looking for a software or marketing related solutions? Need someone to
        help you design or develop your mobile app or website or design and run
        an awesome marketing campaign ? If so, then you are at the right place.
        We at Sawa Technologies are committed to provide our clients with best
        tech and marketing related solutions. We are a boutique firm focusing
        specialize in cutting edge software and marketing services.
      </label>
    </div>

    <img src="../../../assets/abst_about_building.png" class="mobile-about-bg">
  </div>
</template>

<script>
export default {
  name: "Mobile-About",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style scoped>
.mobile-about {
  width: 100vw;
  min-height: 100vh;
  background: white;
  position: relative;
}

.moile-about-content {
  width: calc(100% - 40px);
  margin: 20px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
}

.mobile-home-title {
  color: black;
  font-size: 68px;
  font-weight: 200;
  margin-top: 30px;
}

.mobile-home-desc {
  color: black;
  font-size: 25px;
  font-weight: 100;
  margin-top: 30px;
}

.mobile-about-bg{
    position: absolute;
    bottom: 5%;
    left: 50%;
    z-index: 1;
    width: 90%;
    opacity: 0.2;
    transform: translateX(-50%);
}
</style>

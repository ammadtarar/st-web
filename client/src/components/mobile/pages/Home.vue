<template>
  <div class="mobile-home">
    <div class="mobile-nav-bar">
      <img src="../../../assets/st-logo-horizontal.png" alt="" class="mobile-logo" />
      <img src="../../../assets/ic_burger.png" alt="" class="bt-hamburger" @click="onClickMenu"/>
    </div>

    <div class="mobile-home-content">

        <label class="mobile-home-title">
            empowering<br>
            innovations
        </label>

        <label class="mobile-home-desc">
            Turning your ideas into reality <br>
            with engineering excellence 
        </label>

        <button class="mobile-home-learn-more" @click="onClickLearnMore">Learn More</button>


        


    </div>

    <img src="../../../assets/abst_home.png" alt="" class="mobile-home-bg">
  </div>
</template>

<script>
export default {
  name: "Mobile-Home",
  components: {},
  data() {
    return {};
  },
  methods: {
    onClickLearnMore(){
      this.$emit("onClickLearnMore");
    },
    onClickMenu(){
      this.$emit("onClickMenu");
    }
  },
  created() {},
};
</script>

<style scoped>
.mobile-home {
  width: 100vw;
  height: 100vh;
  background: url("../../../assets/bg_home.png");
  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.mobile-nav-bar {
  width: calc(100% - 40px);
  margin: 20px;
  height: 50px;
  display: flex;
}

.mobile-logo {
  height: 100%;
  float: left;
}

.bt-hamburger {
  width: 20px;
  height: 20px;
  margin-left: auto;
  padding: 10px;
}

.mobile-home-content{
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    position: absolute;
    top: 30%;
    left: 0;
    transform: translateY(-30%);
    
}

.mobile-home-title{
    font-size: 3.5rem;
    font-weight: 600;
    color: #F8F8FF;
    line-height: 50px;
    padding: 20px;
}

.mobile-home-desc{
    font-size: 22px;
    font-weight: 300;
    color: #535461;
    padding: 0px 20px;
}

.mobile-home-learn-more {
  float: left;
  height: 50px;
  line-height: 50px;
  width: 150px;
  border-radius: 25px;
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 16px;
  background: transparent;
  color: #eb6d89;
  border: 2px solid #eb6d89;
  line-height: 20px;
  margin-top: 40px;
  transition: 0.5s all;
  margin-left: 20px;
}

.mobile-home-bg{
    width: 80%;
    margin-left: auto;
    z-index: 1;
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0.4;
}
</style>

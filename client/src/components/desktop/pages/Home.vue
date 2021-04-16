<template>
  <div class="container">
    <div class="nav">
      <img src="../../../assets/st-logo-full.png" alt="" class="logo" />
      <div class="nav-btns">
        <button class="btn-solid" @click="onClickNavItem('contact')">contact</button>
        <button class="btn-hollow" @click="onClickNavItem('portfolio')">portfolio</button>
        <button class="btn-hollow" @click="onClickNavItem('services')">services</button>
        <button class="btn-hollow" @click="onClickNavItem('about')">about</button>
      </div>
    </div>

    <div class="content">
      <div id="content-left" class="content-left">
        <label class="title">empowering<br />innovations</label>
        <label class="desc"
          >Turning your ideas into reality<br />with engineering excellence
        </label>
        <button class="learn-more">Learn More</button>
      </div>
      <div class="content-right">
        <div class="right">
          <img
            id="abstract"
            src="../../../assets/abst_home.png"
            alt=""
            class="abstract"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  methods:{
    onClickNavItem(id){
      this.$emit("onClickNavItem", id);
    }
  },
  mounted() {
    // console.log("mounted");

    var abstract = document.getElementById("abstract");
    var content_left = document.getElementById("content-left");
    setTimeout(() => {
      abstract.setAttribute("class", "slide-in");
      content_left.setAttribute("class", "content-left-show");
    }, 100);
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url("../../../assets/bg_home.png");
  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.nav {
  width: calc(100% - 100px);
  height: 150px;
  margin-left: 50px;
  margin-top: 50px;
  box-sizing: border-box;
}

.logo {
  float: left;
  width: 100px;
}

.nav-btns {
  float: right;
  height: 100px;
  /* background: red; */
  box-sizing: border-box;
}

.btn-hollow {
  float: right;
  height: 50px;
  line-height: 50px;
  width: 100px;
  margin-left: 25px;
  border-radius: 25px;
  border: none;
  outline: none;
  background: transparent;
  color: white;
  font-weight: 700;
  font-size: 16px;
  transition: 0.5s all;
}

.btn-hollow:hover {
  font-size: 18px;
  background: -webkit-linear-gradient(100deg, #8d3b8c 0%, #eb6d89 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-solid {
  float: right;
  height: 50px;
  width: 150px;
  margin-left: 25px;
  border-radius: 25px;
  border: none;
  outline: none;
  background: url("../../../assets/btn_bg.png");
  background-size: cover;
  color: white;
  font-weight: 700;
  font-size: 16px;
  transition: 0.25s all;
  padding-bottom: 2px;
}

.btn-solid:hover {
  box-shadow: 0px 0px 12px 0px gray;
  font-size: 18px;
}

.content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-top: 20px;
}

.content-left {
  opacity: 0;
  transform: scale(0);
  width: 40%;
  height: 100%;
  transition: 0.5s all;
  
}

.content-left-show {
  width: 40%;
  height: 100%;
  float: left;
  box-sizing: border-box;
  padding-left: 50px;
  animation: fadeIn 1.5s forwards;
  -webkit-animation: fadeIn 1.5s forwards;
}

@keyframes fadeIn {
  100% {
    opacity: 1;
    transform:  translateY(0%);
  }
  0% {
    opacity: 0;
    transform:  translateY(100%);
    
  }
}

.title {
  margin-top: 150px;
  color: white;
  font-weight: 700;
  font-size: 75px;
  width: 100%;
  float: left;
  line-height: 60px;
}

.desc {
  width: 100%;
  margin-top: 40px;
  font-size: 500;
  color: #535461;
  font-size: 24px;
  float: left;
}

.learn-more {
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
}

.learn-more:hover {
  background: url("../../../assets/btn_bg.png");
  background-size: cover;
  color: white;
  border: none;
}

.content-right {
  float: right;
  width: 60%;
  height: 100%;
  box-sizing: border-box;
}

.right {
  width: 80%;
  float: right;
  margin-top: 10%;
}

.abstract {
  width: 0px;
  height: 0px;
  opacity: 0;
}

.slide-in {
  animation: slide-in 1.5s forwards;
  -webkit-animation: slide-in 1.5s forwards;
}

@keyframes slide-in {
  100% {
    transform: translateX(0%);
    width: 100%;
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  20% {
    opacity: 0.1;
  }
  10% {
    transform: translateX(200%);
    opacity: 0;
  }
}
</style>

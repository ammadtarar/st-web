<template>
  <div class="about-container" >

    <div class="about-bg-container">
      <img src="../../../assets/abst_about_building.png" alt="" class="about-building">
      <img src="../../../assets/abst_circles.png" class="about-circles">
    </div>    

    <div class="about-content">
      <label class="about-title">about</label>
      <label class="about-desc">
        Looking for a software or marketing related solutions? Need <br>
        someone to help you design or develop your mobile app or <br>
        website or design and run an awesome marketing campaign ? <br>
        If so, then you are at the right place. We at Sawa Technologies <br>
        are committed to provide our clients with best tech and <br>
        marketing related solutions. We are a boutique firm focusing <br> 
        specialize in cutting edge software and marketing services.
      </label>
      
    </div>
  </div>
</template>



<script>
export default {
  name: "About",
  props: {}
};
</script>

<style scoped>
.about-container {
  width: 100vw;
  height: 100vh;
  background: white;
  overflow: hidden;
  position: relative;
}

.about-bg-container{
  width: 100%;
  height: 100%;
}

.about-circles{
  width: 45%;
  position: absolute;
  bottom: 0;
  right: 0;
}

.about-building{
  width: 35%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.about-content{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10%;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.about-title{
  font-size: 68px;
  font-weight: 300;
}

.about-desc{
  font-size: 26px;
  font-weight: 200;
  margin-top: 30px;
}
</style>

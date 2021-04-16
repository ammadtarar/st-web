<template>
  <div class="services-container">
    <div class="services-bg-container">
      <img src="../../../assets/bg_services.png" alt="" class="bg-services" />
    </div>

    <div class="services-content-container">
      <div class="services-top-content">
        <label class="services-title">services</label>
        <label class="services-desc">
          We transform real life scenarios in web and mobile solutions by
          offering a unique combination of creativity, knowledge and technology.
          From Mobile Apps Development to Enterprise Solutions, Hyperlocal
          eCommerce Solutions to Web Solutions, We can build a right technology
          product for you.
        </label>
      </div>
      <div class="services-bottom-content">
          <div class="services-bottom-left">
              <div class="services-bottom-left-inner-container">
                  <div class="services-bottom-left-inner-container-child">
                      <div class="service-line" style="background: linear-gradient(#B6518B , #DC658A);"></div>
                      <div class="service-item-content">
                          <label class="service-item-title" style="color : #B6518B">Mobile Apps</label>
                          <label class="service-item-desc">
                              Delivering world’s Best Mobile App Development Solutions consistently to make daily life easier. We also specialize in technologies hot in China , such as WeChat MiniPrograms and more ...
                          </label>
                      </div>
                  </div>
                  <div class="services-bottom-left-inner-container-child" style="margin-left : 80px">
                      <div class="service-line" style="background: linear-gradient(#3F3D56 , #9392A6);"></div>
                      <div class="service-item-content">
                          <label class="service-item-title" style="color : #3F3D56">On-Demand</label>
                          <label class="service-item-desc">
                              We also provide provide developers on demand for on-going project. If you have an on-going or exisiting project you want some help or need new featrure , you can leverage our developers on hourly basis.
                          </label>
                      </div>
                  </div>
              </div>
              <div class="services-bottom-left-inner-container" style="margin-top : 40px">
                  <div class="services-bottom-left-inner-container-child">
                      <div class="service-line" style="background: linear-gradient(#803D95 , #A93978);"></div>
                      <div class="service-item-content">
                          <label class="service-item-title" style="color : #803D95">Websites</label>
                          <label class="service-item-desc">
                              We can design and develop all kinds of websites for , from portfolio websites to full fledge e-commerce websites with onine stores and crms with full for desktops and mobile.
                          </label>
                      </div>
                  </div>
                  <div class="services-bottom-left-inner-container-child" style="margin-left : 80px">
                      <div class="service-line" style="background: linear-gradient(#EB6D89 , #CAADBC);"></div>
                      <div class="service-item-content">
                          <label class="service-item-title" style="color : #EB6D89">Wechat MiniPrograms</label>
                          <label class="service-item-desc">
                              Weather you’re a busines based or expanding to Chinese market , Wechat MiniProgram app is the way to go. Wechat Miniprograms are the apps that run on Wechat and caters to both ios and android users.
                          </label>
                      </div>
                  </div>
              </div>
          </div>
          <img class="services-bottom-right" src="../../../assets/abst_services.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  props: {},
};
</script>

<style scoped>
.services-container {
  width: 100vw;
  min-height: 100vh;
  background: rgba(242, 242, 242, 100%);
  position: relative;
}

.services-bg-container {
  width: 100%;
  height: auto;
}

.bg-services {
  width: 30%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.services-content-container {
  width: calc(100% - 100px);
  height: 100%;
  position: absolute;
  top: 50px;
  left: 50px;
  box-sizing: border-box;
}

.services-top-content {
  box-sizing: border-box;
}

.services-title {
  font-size: 68px;
  font-weight: 300;
  width: 100%;
  float: left;
}

.services-desc {
  width: 100%;
  font-size: 26px;
  font-weight: 200;
  margin-top: 30px;
  float: left;
}

.services-bottom-content{
    box-sizing: border-box;
    width: 100%;
    float: left;
    margin-top: 50px;
}

.services-bottom-left{
    width: 60%;
    height: 520px;
    float: left;
    margin-top: 5%;
}

.services-bottom-right{
    width: 30%;
    float: right;
    margin-top: 15%;
}

.services-bottom-left-inner-container{
    width: 100%;
    height: 50%;
    float: left;
    box-sizing: border-box;
}

.services-bottom-left-inner-container-child{
    height: calc(100% - 40px);
    width: calc(50% - 80px);
    float: left;
    box-sizing: border-box;
}

.service-line{
    width: 3px;
    height: 100%;
    float: left;
}

.service-item-content{
    width: calc(100% - 23px);
    height: 100%;
    float: left;
    /* background: pink; */
    margin-left: 20px;
    box-sizing: border-box;
    position: relative;
}

.service-item-title{
    font-size: 26px;
    font-weight: 500;
    width: 100%;
    float: left;
}

.service-item-desc{
    font-size: 22px;
    font-weight: 300;
    margin-top: 20px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>

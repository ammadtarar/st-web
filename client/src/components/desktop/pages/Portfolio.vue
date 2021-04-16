<template>
  <div class="portfolio-container">


    <div class="portfolio-content-container">
      <div class="portfolio-top-content">
        <label class="portfolio-title">portfolio</label>
        <label class="portfolio-desc">
          We have worked with bunch of companies for around the globe . Some of them are listed below.
        </label>
      </div>
      <div class="portfolio-bottom-content">
          <div class="portfolio-bottom-right">
              <div class="portfolio-bottom-left-inner-container">
                  <div class="portfolio-bottom-left-inner-container-child" style="border-left: 3px solid black;">
                      <div class="portfolio-item-content">
                          <img src="../../../assets/ic_mybarre.png" class="portfolio-item-logo">
                          <label class="portfolio-item-desc">
                              MYBarre fitness is wellness and fitness company based in Shanghai. We designed and devloped their Wechat MiniProgarm , CRM website and server. 
                          </label>
                      </div>
                  </div>
                  <div class="portfolio-bottom-left-inner-container-child" style="margin-left : 50px; border-left: 3px solid #155AC4;">
                      <div class="portfolio-item-content">
                          <img src="../../../assets/ic_pt.png" class="portfolio-item-logo">
                          <label class="portfolio-item-desc">
                              Pushtalents is Frech human resources company . We designed and devloped crm system and backend website. We also integrated server apis to their existing mobile apps and frontend website.
                          </label>
                      </div>
                  </div>
                  <div class="portfolio-bottom-left-inner-container-child" style="margin-left : 50px; border-left: 3px solid #5F9FC1;">
                      <div class="portfolio-item-content">
                          <img src="../../../assets/ic_sim.png" class="portfolio-item-logo">
                          <label class="portfolio-item-desc">
                              System in Motion is a French company based in Shanghai. They provide technology solutions to big cooperations. We worked on serveral projects with them. Including mobile apps, webs and backends
                          </label>
                      </div>
                  </div>
              </div>
              <div class="portfolio-bottom-left-inner-container" style="margin-top : 40px">
                  <div class="portfolio-bottom-left-inner-container-child" style="border-left: 3px solid black;">
                      <div class="portfolio-item-content">
                          <img src="../../../assets/ic_17hi.png" class="portfolio-item-logo">
                          <label class="portfolio-item-desc">
                              17Hi is a startup based in Shanghai , China. 17Hi conencts bars to consumers. <br>
We developed entire mobile and web suite for them.
                          </label>
                      </div>
                  </div>
                  <div class="portfolio-bottom-left-inner-container-child" style="margin-left : 50px; border-left: 3px solid #4169C0;">
                      <div class="portfolio-item-content">
                          <img src="../../../assets/ic_il.png" class="portfolio-item-logo" style="height : 50px">
                          <label class="portfolio-item-desc">
                              System in Motion is a French company based in Shanghai. They provide technology solutions to big cooperations. We worked on serveral projects with them. Including mobile apps, webs and backends
                          </label>
                      </div>
                  </div>
                  <div class="portfolio-bottom-left-inner-container-child" style="margin-left : 50px; border-left: 3px solid #EB5B7D;">
                      <div class="portfolio-item-content">
                          <img src="../../../assets/ic_wp.png" class="portfolio-item-logo">
                          <label class="portfolio-item-desc">
                              System in Motion is a French company based in Shanghai. They provide technology solutions to big cooperations. We worked on serveral projects with them. Including mobile apps, webs and backends
                          </label>
                      </div>
                  </div>
              </div>
          </div>
          <img class="portfolio-bottom-left" src="../../../assets/abst_portfolio.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  props: {},
};
</script>

<style scoped>
.portfolio-container {
  width: 100vw;
  height: 100vh;
  /* background: rgba(242, 242, 242, 44%); */
  position: relative;
}

.portfolio-content-container {
  width: calc(100% - 100px);
  height: 100%;
  position: absolute;
  top: 20px;
  left: 50px;
  box-sizing: border-box;
}

.portfolio-top-content {
  box-sizing: border-box;
}

.portfolio-title {
  font-size: 68px;
  font-weight: 300;
  width: 100%;
  float: left;
}

.portfolio-desc {
  width: 100%;
  font-size: 26px;
  font-weight: 200;
  margin-top: 30px;
  float: left;
}

.portfolio-bottom-content{
    box-sizing: border-box;
    width: 100%;
    float: left;
    margin-top: 50px;
}

.portfolio-bottom-right{
    width: 80%;
    height: 520px;
    float: right;
    margin-top: 5%;

}

.portfolio-bottom-left{
    width: 20%;
    float: left;
    margin-top: 15%;
    margin-left: -50px;
}

.portfolio-bottom-left-inner-container{
    width: 100%;
    height: 60%;
    float: left;
    box-sizing: border-box;
}

.portfolio-bottom-left-inner-container-child{
    width: calc(33% - 40px);
    float: left;
    box-sizing: border-box;
}


.portfolio-item-content{
    width: calc(100% - 23px);
    height: 100%;
    float: left;
    /* background: pink; */
    margin-left: 20px;
    box-sizing: border-box;
    position: relative;
}

.portfolio-item-title{
    font-size: 26px;
    font-weight: 500;
    width: 100%;
    float: left;
}

.portfolio-item-logo{
  max-width: 80%;
  float: left;
}

.portfolio-item-desc{
    font-size: 22px;
    font-weight: 300;
    margin-top: 50px;
    width: 100%;
    float: left;
}
</style>

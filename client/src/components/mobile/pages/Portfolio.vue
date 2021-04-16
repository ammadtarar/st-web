<template>
  <div class="mobile-portfolio">
    <div class="moile-portfolio-content">
      <label class="mobile-home-title">
        portfolio
      </label>

      <label class="mobile-home-desc">
        We have worked with bunch of companies for around the globe . Some of
        them are listed below.
      </label>

      <div class="mobile-portfolio-scroll">
        <div class="services-card">
          <div class="services-card-content">
            <div
              class="services-card-line"
              style="background: linear-gradient(#155AC4 , #213950);"
            ></div>
            <div class="services-card-inner-content">
              <label class="services-card-title" style="color : #155AC4"
                >PushTalents</label
              >
              <label class="services-card-desc">
                Pushtalents is Frech human resources company . We designed and
                devloped crm system and backend website. We also integrated
                server apis to their existing mobile apps and frontend website.
              </label>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="services-card-content">
            <div
              class="services-card-line"
              style="background: linear-gradient(#EB5B7D , #001C77);"
            ></div>
            <div class="services-card-inner-content">
              <label class="services-card-title" style="color : #EB5B7D"
                >WhatsPoppin</label
              >
              <label class="services-card-desc">
                Weather you’re a busines based or expanding to Chinese market ,
                Wechat MiniProgram app is the way to go. Wechat Miniprograms are
                the apps that run on Wechat and caters to both ios and android
                users.
              </label>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="services-card-content">
            <div
              class="services-card-line"
              style="background: linear-gradient(#000000 , #000000);"
            ></div>
            <div class="services-card-inner-content">
              <label class="services-card-title" style="color : #000000"
                >17Hi</label
              >
              <label class="services-card-desc">
                17Hi is a startup based in Shanghai , China. 17Hi conencts bars
                to consumers. <br />
                We developed entire mobile and web suite for them.
              </label>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="services-card-content">
            <div
              class="services-card-line"
              style="background: linear-gradient(#4169C0 , #4169C0);"
            ></div>
            <div class="services-card-inner-content">
              <label class="services-card-title" style="color : #4169C0"
                >Idea Lab</label
              >
              <label class="services-card-desc">
                Idea lab is a co-working startup based in Shenzhen , China.
                <br />
                We designed and developer their frontend website , a CRM and
                server side apps.
              </label>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="services-card-content">
            <div
              class="services-card-line"
              style="background: linear-gradient(#5B5B5E , #505050);"
            ></div>
            <div class="services-card-inner-content">
              <label class="services-card-title" style="color : #5B5B5E"
                >MYBarre Fitness</label
              >
              <label class="services-card-desc">
                MYBarre fitness is service companny based in Shanghai. We
                designed and devloped their Wechat MiniProgarm , CRM website and
                server.
              </label>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="services-card-content">
            <div
              class="services-card-line"
              style="background: linear-gradient(#5F9FC1 , #234892);"
            ></div>
            <div class="services-card-inner-content">
              <label class="services-card-title" style="color : #5F9FC1"
                >Systems in Motion</label
              >
              <label class="services-card-desc">
                System in Motion is a French company based in Shanghai. They
                provide technology solutions to big cooperations. We worked on
                serveral projects with them. Including mobile apps, webs and
                backends
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <img src="../../../assets/abst_portfolio.png" class="mobile-portfolio-bg" />
  </div>
</template>

<script>
export default {
  name: "Mobile-Portfolio",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style scoped>
.mobile-portfolio {
  width: 100vw;
  min-height: 100vh;
  position: relative;
}

.moile-portfolio-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
}

.mobile-home-title {
  color: black;
  font-size: 68px;
  font-weight: 200;
  margin-top: 10px;
  padding: 20px 20px 0px 20px;
}

.mobile-home-desc {
  color: black;
  font-size: 25px;
  font-weight: 100;
  padding: 20px;
}

.mobile-portfolio-bg {
  position: absolute;
  bottom: 2%;
  left: 0;
  z-index: 1;
  width: 100%;
  opacity: 0.4;
}

.mobile-portfolio-scroll {
  width: calc(100% - 40px);
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 4px 20px;
  overflow-x: auto;
  white-space: nowrap;

}

::-webkit-scrollbar {
    display: none;
}

.mobile-portfolio-scroll > *:not(:last-child) {
  margin-right: 30px;
}

.services-card {
  display: inline-block;
  position: relative;
  width: 60vw;
  background: rgba(255, 255, 255, 0.923);
  border-radius: 8px;
  box-shadow: 2px 2px 10px 0px rgba(128, 128, 128, 0.542);
  overflow: hidden;
}

.services-card-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.services-card-line {
  width: 10px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.services-card-inner-content {
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  width: calc(100% - 30px);
  margin-left: 20px;
}

.services-card-title {
  font-size: 26px;
  font-weight: 500;
  width: 100%;
  float: left;
  white-space: pre-line;
}

.services-card-desc {
  margin-top: 18px;
  font-size: 18px;
  font-weight: 300;
  white-space: pre-line;
}
</style>

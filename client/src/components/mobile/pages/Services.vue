<template>
  <div class="mobile-services">
    <div class="moile-services-content">
      <label class="mobile-home-title">
        services
      </label>

      <label class="mobile-home-desc">
        We transform real life scenarios in web and mobile solutions by offering
        a unique combination of creativity, knowledge and technology. From
        Mobile Apps Development to Enterprise Solutions, Hyperlocal eCommerce
        Solutions to Web Solutions, We can build a right technology product for
        you.
      </label>

      <div class="mobile-services-scroll">
        <div class="services-card">
          <div class="services-card-content">
            <div
              class="services-card-line"
              style="background: linear-gradient(#B6518B , #DC658A);"
            ></div>
            <div class="services-card-inner-content">
              <label class="services-card-title" style="color : #B6518B"
                >Mobile Apps</label
              >
              <label class="services-card-desc">
                Delivering world’s Best Mobile App Development Solutions
                consistently to make daily life easier. We also specialize in
                technologies hot in China , such as WeChat MiniPrograms and more
                ...
              </label>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="services-card-content">
            <div
              class="services-card-line"
              style="background: linear-gradient(#3F3D56 , #9392A6);"
            ></div>
            <div class="services-card-inner-content">
              <label class="services-card-title" style="color : #3F3D56"
                >On-Demand</label
              >
              <label class="services-card-desc">
                We also provide provide developers on demand for on-going
                project. If you have an on-going or exisiting project you want
                some help or need new featrure , you can leverage our developers
                on hourly basis.
              </label>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="services-card-content">
            <div
              class="services-card-line"
              style="background: linear-gradient(#803D95 , #A93978);"
            ></div>
            <div class="services-card-inner-content">
              <label class="services-card-title" style="color : #803D95"
                >Websites</label
              >
              <label class="services-card-desc">
                We can design and develop all kinds of websites for , from
                portfolio websites to full fledge e-commerce websites with onine
                stores and crms with full for desktops and mobile.
              </label>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="services-card-content">
            <div
              class="services-card-line"
              style="background: linear-gradient(rgb(31, 197, 31) , rgb(74, 179, 74));"
            ></div>
            <div class="services-card-inner-content">
              <label
                class="services-card-title"
                style="color : rgb(31, 197, 31)"
                >Wechat MiniPrograms</label
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
      </div>
    </div>

    <img src="../../../assets/bg_services.png" class="mobile-services-bg" />
  </div>
</template>

<script>
export default {
  name: "Mobile-Services",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style scoped>
.mobile-services {
  width: 100vw;
  min-height: 100vh;
  background: rgba(242, 242, 242, 100%);
  position: relative;
}

.moile-services-content {
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

.mobile-services-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 90%;
  opacity: 1;
}

.mobile-services-scroll {
  width: calc(100% - 40px);
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px 20px;
  overflow-x: auto;
  white-space: nowrap;
}

.mobile-services-scroll > *:not(:last-child) {
  margin-right: 30px;
}

.services-card {
  display: inline-block;
  position: relative;
  width: 60vw;
  background: rgba(255, 255, 255, 0.6723);
  border-radius: 8px;
  box-shadow: 0px 0px 4px 2px rgba(128, 128, 128, 0.042);
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

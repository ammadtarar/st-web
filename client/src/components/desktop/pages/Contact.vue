<template>
  <div class="contact">
    <div class="contact-container">
      <div class="contact-content">
        <div class="contact-content-left">
          <label class="contact-title">contact</label>
          <label class="contact-desc">
            Leave us a message and let us know how we can help. Our tech
            consultants will reach out to you as soon as possible
          </label>

          <div class="contact-form">
            <div class="form-row">
              <input
                type="text"
                class="field name"
                placeholder="Your name"
                style="float : left"
                v-model="form.name"
              />
              <input
                type="email"
                class="field email"
                placeholder="Your email"
                style="float : right"
                v-model="form.email"
              />
            </div>
            <input type="text" class="field subject" placeholder="Subject"  v-model="form.subject"/>
            <textarea class="field message" placeholder="Message" v-model="form.message"></textarea>
            <div class="actions">
              <button class="submit" @click="onClickSubmit" v-if="!submitting">
                Submit
              </button>
              <div class="submitting" v-if="submitting">
                <div class="loader"></div>
              </div>
            </div>
          </div>
        </div>
        <img src="../../../assets/abst_contact.png" class="contact-content-right" />
      </div>
    </div>

    <div class="popup" v-if="showPopup">
      <div class="card">
        <img src="../../../assets/abst_sent.png" class="sent-img" />
        <label class="card-title">Thank You ...</label>
        <label class="card-content"
          >You have recieved your message. We will get back to you as soon as
          possible. <br /><br />
          Have a nice day.</label
        >
        <button class="submit" @click="onClickDismiss" style="width : 100% !important">
          Dismiss
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Contact",
  props: {},
  data() {
    return {
      submitting: false,
      showPopup: false,
      form: {},
    };
  },
  methods: {
    onClickSubmit() {
      console.log("onClickSubmit");
      this.submitting = true;

      var host = window.location.host;
      console.log("host = ", host);

      axios
        .post(`${host}/send/email`, {
          name: this.form.name,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
        })
        .then((res) => {
          console.log("Email sent");
          console.log(res);
          setTimeout(() => {
            this.submitting = false;
            this.showPopup = true;
            this.form = {};
          }, 1000);
        })
        .catch((err) => {
          console.log("Email failed");
          console.log(err);
          setTimeout(() => {
            this.submitting = false;
            this.showPopup = true;
            this.form = {};
          }, 1000);
        });
    },
    onClickDismiss(){
      this.showPopup = false;
      this.submitting = false;
    }
  },
  mounted() {},
};
</script>

<style scoped>
.contact {
  width: 100vw;
  height: 100vh;
  position: relative;

}
.contact-container {
  width: 100vw;
  height: 100vh;
  background: rgba(242, 242, 242, 100%);
  position: relative;
}

.contact-content {
  margin: 50px;
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  box-sizing: border-box;
}

.contact-content-left {
  height: 100%;
  width: 60%;
  float: left;
  box-sizing: border-box;
}

.contact-content-right {
  width: 35%;
  float: right;
  margin-top: 20%;
  margin-left: 5%;
}

.contact-title {
  font-size: 68px;
  font-weight: 300;
  width: 100%;
  float: left;
  margin-top: 50px;
}

.contact-desc {
  width: 100%;
  font-size: 26px;
  font-weight: 200;
  margin-top: 30px;
  float: left;
}

.contact-form {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-top: 50px;
  float: left;
}

.form-row {
  width: 100%;
  float: left;
}

.field {
  padding: 0px 10px;
  height: 50px;
  border: 0.5px solid #7070718e;
  float: left;
  background: transparent;
  border-radius: 4px;
  font-size: 18px;
  outline-color: #eb6d89;
  background: rgba(255, 255, 255, 0.308);
}

.name {
  width: calc(50% - 34px) !important;
}

.email {
  width: calc(50% - 34px) !important;
}

.subject {
  margin-top: 20px;
  width: calc(100% - 24px);
}

.message {
  margin-top: 20px;
  height: 300px !important;
  width: calc(100% - 24px) !important;
  padding-top: 10px;
}

.actions {
  float: right;
}
.submit {
  float: left;
  height: 50px;
  line-height: 50px;
  width: 200px;
  border-radius: 25px;
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 18px;
  background: transparent;
  color: #eb6d89;
  border: 2px solid #eb6d89;
  line-height: 20px;
  margin-top: 20px;
  transition: 0.5s all;
}

.submit:hover {
  float: right;
  height: 50px;
  width: 200px;
  margin-left: 25px;
  border-radius: 25px;
  border: none;
  outline: none;
  background: url("../../../assets/btn_bg.png");
  background-size: cover;
  color: white;
  font-weight: 700;
  font-size: 18px;
  transition: 0.25s all;
  padding-bottom: 2px;
  margin-top: 20px;
  transition: 0.5s all;
}

.submitting {
  float: right;
  height: 50px;
  width: 200px;
  margin-left: 25px;
  border-radius: 25px;
  border: none;
  outline: none;
  background: url("../../../assets/btn_bg.png");
  background-size: cover;
  margin-top: 20px;
  transition: 0.5s all;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid transparent; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.popup {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(128, 128, 128, 0.199);
  top: 0;
  left: 0;
  z-index: 100000;
}

.card {
  width: 400px;
  background: white;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: 0px 0px 10px 10px rgba(128, 128, 128, 0.122);
  box-sizing: border-box;
  padding: 30px;
}

.card-title {
  font-size: 38px;
  font-weight: 300;
  width: 100%;
  float: left;
}

.card-content {
  font-size: 24px;
  font-weight: 100;
  width: 100%;
  float: left;
  margin-top: 30px;
  margin-bottom: 20px;
}

.sent-img {
  width: 60px;
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>

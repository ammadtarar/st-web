<template>
  <div class="mobile-contact">
    <div class="moile-contact-content">
      <label class="mobile-home-title">
        contact
      </label>

      <label class="mobile-home-desc">
        Leave us a message and let us know how we can help. Our tech consultants
        will reach out to you as soon as possible
      </label>

      <div class="form">
        <input
          type="text"
          class="input"
          placeholder="Your name"
          v-model="form.name"
        />
        <input
          type="email"
          class="input"
          placeholder="Your email"
          v-model="form.email"
        />
        <input
          type="text"
          class="input"
          placeholder="Subject"
          v-model="form.subject"
        />
        <textarea
          class="input textarea"
          placeholder="Message"
          v-model="form.message"
        ></textarea>
        <div class="actions">
          <button
            class="mobile-submit"
            v-if="!submitting"
            @click="onClickSubmit"
          >
            Submit
          </button>
          <div class="submitting" v-if="submitting">
            <div class="loader"></div>
          </div>
        </div>
      </div>
    </div>

    <img src="../../../assets/abst_portfolio.png" class="mobile-contact-bg" />

    <div class="popup" v-if="showPopup">
      <div class="card">
        <img src="../../../assets/abst_sent.png" class="sent-img" />
        <label class="card-title">Thank You ...</label>
        <label class="card-content"
          >You have recieved your message. We will get back to you as soon as
          possible. <br /><br />
          Have a nice day.</label
        >
        <button
          class="mobile-submit"
          @click="onClickDismiss"
          style="width : 100% !important"
        >
          Dismiss
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Mobile-Contact",
  components: {},
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
    onClickDismiss() {
      this.showPopup = false;
      this.submitting = false;
    },
  },
  created() {},
};
</script>

<style scoped>
.mobile-contact {
  width: 100vw;
  position: relative;
}

.moile-contact-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
  background: #f9f9f9;
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

.mobile-contact-bg {
  position: absolute;
  bottom: 2%;
  left: 0;
  z-index: 1;
  width: 100%;
  opacity: 0.4;
}

.form {
  width: calc(100vw - 40px);
  padding: 20px 20px 60px 20px;
  display: flex;
  flex-direction: column;
}

.form > *:not(:last-child) {
  margin-bottom: 10px;
}

.input {
  padding: 0px 10px;
  height: 40px;
  border: 0.5px solid #7070715b;
  float: left;
  background: transparent;
  border-radius: 4px;
  font-size: 18px;
  outline-color: #eb6d89;
  background: rgba(255, 255, 255, 0.308);
}

.textarea {
  height: 200px !important;
  padding-top: 10px;
}

.mobile-submit {
  height: 50px;
  line-height: 40px;
  width: 100%;
  border-radius: 25px;
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 18px;
  background: transparent;
  color: #eb6d89;
  border: 2px solid #eb6d89;
  margin-top: 10px;
  transition: 0.5s all;
}

.submitting {
  float: right;
  height: 50px;
  width: 100%;
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
  width: 100%;
  height: 100%;
  background: rgba(128, 128, 128, 0.799);
  top: 0;
  left: 0;
  z-index: 100000;
}

.card {
  width: 90%;
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
  font-size: 32px;
  font-weight: 300;
  width: 100%;
  float: left;
}

.card-content {
  font-size: 22px;
  font-weight: 100;
  width: 100%;
  float: left;
  margin-top: 30px;
  margin-bottom: 20px;
}

.sent-img {
  width: 45px;
  position: absolute;
  top: 25px;
  right: 20px;
}
</style>

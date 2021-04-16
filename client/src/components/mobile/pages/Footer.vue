<template>
  <div class="mobile-footer">
    <label class="mobile-footer-title">Address</label>
    <label class="mobile-footer-text">
      270 , Block R , Paragon City<br />
      Lahore , 53200<br />
      Pakistan
    </label>

    <label class="mobile-footer-title">Contact</label>
    <label class="mobile-footer-text" style="text-align : center">
      info@sawatechnologies.org<br />
      +92-315-5988883<br />
      +92-42-37153624
    </label>

    <label class="mobile-footer-title">Social Media</label>
    <div class="icons-container">
      <img src="../../../assets/ic_fb.png" class="icon" />
      <img
        src="../../../assets/ic_wx.png"
        class="icon"
        style="margin-left : 10px; margin-right : 10px"
      />
      <img src="../../../assets/ic_gp.png" class="icon" />
    </div>

    <label class="copyright">© 2021. All rights reserved by Sawa Technologies</label>

  </div>
</template>

<script>
export default {
  name: "Mobile-Footer",
};
</script>

<style scoped>
.mobile-footer {
  background: #504f60;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  align-items: center;

}

.mobile-footer-title {
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-top: 40px;
}

.mobile-footer-text {
  font-size: 18px;
  font-weight: 200;
  color: white;
  margin-top: 8px;
  text-align: center;
}

.icons-container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
}

.icon{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    transition: 0.5s all;
}

.copyright{
    background: #3F3D56;
    color: white;
    font-size: 16px;
    font-weight: 300;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-top: 40px;
}

</style>

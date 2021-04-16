<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-inner-container">
                <label class="footer-inner-title">Address</label>
                <label class="text">
                    270 , Block R , Paragon City<br>
                    Lahore , 53200<br>
                    Pakistan
                </label>
            </div>
            <div class="footer-inner-container">
                <label class="footer-inner-title">Contact</label>
                <label class="text" style="text-align : center">
                    info@sawatechnologies.org<br>
                    +92-315-5988883<br>
                    +92-42-37153624
                </label>
            </div>
            <div class="footer-inner-container">
                <label class="footer-inner-title">Social Media</label>
                <div class="icons-container">
                    <img src="../../../assets/ic_fb.png" class="icon">
                    <img src="../../../assets/ic_wx.png" class="icon" style="margin-left : 10px; margin-right : 10px">
                    <img src="../../../assets/ic_gp.png" class="icon">
                </div>
            </div>
        </div>
        <label class="copyright">© 2021. All rights reserved by Sawa Technologies</label>
    </div>
</template>
<style scoped>
.footer{
    background: #504F60;
    width: 100vw;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
}

.footer-content{
    width: 100%;
    height: calc(100% - 50px);
    box-sizing: border-box;
}

.footer-inner-container{
    width: calc(33.33% - 20px);
    height: calc(100% - 40px);
    float: left;
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-inner-title{
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin-bottom: 20px;
}

.text{
    font-size: 18px;
    font-weight: 300;
    color: white;
    text-align: center;
}

.icons-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
}

.icon{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: 0.5s all;
}

.icon:hover{
    width: 70px;
    height: 70px;
}

.copyright{
    background: #3F3D56;
    color: white;
    font-size: 16px;
    font-weight: 300;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-top: 20px;
}
</style>
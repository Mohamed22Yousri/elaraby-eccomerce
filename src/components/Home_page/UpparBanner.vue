<template>
  <div class="parent">
    <img src="@/assets/images/banner-bg.jpg" alt="" />
    <div class="cont">
      <h3><span>Huge Saving</span> on UHD Televisions</h3>
      <p class="hint">Sale up to 70% off on selected items*</p>
      <v-btn
        variant="outline"
        class="py-4 px-10"
        density="combact"
        style="
          border-radius: 30px;
          text-transform: none;
          border: 1px solid white;
        "
        >Shop Now</v-btn
      >
    </div>
  </div>
</template>

<style scoped>
.parent {
  height: 390px;
  position: relative;
}
.parent img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.parent .cont {
  color: white;
  padding: 40px 0 100px;
  position: absolute;
  left: 30px;
  top: 20px;
  width: 40%;
}
.parent .cont h3 {
  font-size: 45px;
  font-weight: 900;
}
.parent .cont h3 span {
  color: rgb(58 243 255);
}
.parent .cont .hint {
  margin: 20px 40px;
}

/* medi queries */
@media (max-width: 890px) {
  .parent {
    height: 300px;
    position: relative;
  }

  .parent .cont {
    color: white;
    padding: 20px 0 100px;
    position: absolute;
    left: 30px;
    top: 20px;
    width: 400px;
  }
  .parent .cont h3 {
    font-size: 33px;
    font-weight: 900;
  }
  .parent .cont .hint {
    font-size: 12px;
  }
}
@media (max-width: 767px) {
  .parent {
    height: 250px;
    position: relative;
  }

  .parent .cont {
    color: white;
    padding: 20px 0 100px;
    position: absolute;
    left: 30px;
    top: 20px;
    width: 400px;
  }
  .parent .cont h3 {
    font-size: 27px;
    font-weight: 900;
  }
  .parent .cont .hint {
    font-size: 12px;
  }
}
@media (max-width: 580px) {
  .parent {
    height: 250px;
    position: relative;
  }

  .parent .cont {
    color: white;
    padding: 20px 0 100px;
    position: absolute;
    left: 30px;
    top: 20px;
    width: 300px;
  }
  .parent .cont h3 {
    font-size: 22px;
    font-weight: 900;
  }
  .parent .cont .hint {
    font-size: 12px;
  }
  .parent .cont button {
    height: 45px !important;
    width: 100px !important;
    font-size: 13px !important;
    text-align: center;
  }
}
</style>

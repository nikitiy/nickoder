<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__group footer__logo-links">
          <div class="footer__logo">
            <img src="images/icons/logo-full.svg" alt="">
          </div>
          <div class="footer__social-media-links">
            <icon-link v-for="link in links" :key="link.id" :href="link.url" target="_blank">
              <img :src="link.image.meta.download_url" :alt="link.image.title">
            </icon-link>
          </div>
        </div>
        <div class="footer__group footer__group-list">
          <h3 class="footer__group-title">Информация</h3>
          <div class="footer__group-list-items">
            <button class="footer__group-list-item" name="about-me" @click="Navigation">Обо мне</button>
            <button class="footer__group-list-item" name="skills" @click="Navigation">Скиллы</button>
            <button class="footer__group-list-item" name="portfolio" @click="Navigation">Портфолио</button>
            <button class="footer__group-list-item" name="services" @click="Navigation">Тарифы</button>
          </div>
        </div>
        <div class="footer__group footer__group-list">
          <h3 class="footer__group-title">Контакты</h3>
          <div class="footer__group-list-items">
            <a :href="'tel:' + formatPhoneNumber" class="footer__group-list-item">
              <img src="images/icons/phone-icon.svg" alt="">
              {{ contacts_data.phone_number }}
            </a>
            <a :href="'mailto:' + contacts_data.email" class="footer__group-list-item">
              <img src="images/icons/mail-icon.svg" alt="">
              {{ contacts_data.email }}
            </a>
            <a class="footer__group-list-item">
              <img src="images/icons/location-icon.svg" alt="">
              {{ contacts_data.location }}
            </a>
          </div>
        </div>
      </div>
      <div class="footer__info">

      </div>
    </div>
  </footer>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  methods: mapActions(['Navigation']),
  computed: {
    ...mapGetters(['contacts_data', 'links']),
    formatPhoneNumber() {
      return this.contacts_data.phone_number.replaceAll(" ", "").replace("-", "").replace("(", "").replace(")", "")
    }
  }
}
</script>

<style lang="scss">
.footer {
  @extend %mt-120;
}
.footer__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba($color: $color_white, $alpha: .3);
}
.footer__group {

}
.footer__group-list {

}
.footer__logo {
  width: 170px;

  img {
    width: 100%;
  }
}
.footer__social-media-links {
  display: flex;
  gap: 15px;
  margin-top: 30px;

  .icon-link {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 8px;
  }
}
.footer__group-title {
  color: $color_white;
  font-size: 20px;
  font-weight: 500;
}
.footer__group-list-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 15px;
}
.footer__group-list-item {
  color: rgba($color: $color_white, $alpha: .6);
  font-size: 16px;
}
button.footer__group-list-item {background-color: rgba(0, 0, 0, 0); text-align: start;}
.footer__info {
  padding: 20px 0;
}
a.footer__group-list-item {
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 16px;
  }
}

@media screen and (max-width: 1000px) {
  .footer__logo {
    width: 130px;
  }
  .footer__group-title {font-size: 16px;}
  .footer__group-list-item {font-size: 14px;}
}
@media screen and (max-width: 720px) {
  .footer__content {
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
  }
  .footer__logo-links {grid-column: span 2;}
  .footer__social-media-links {margin-top: 20px;}
  .footer__social-media-links .icon-link {width: 35px;height: 35px;}
}
@media screen and (max-width: 420px) {
  .footer__group-title {font-size: 14px;}
  .footer__group-list-item {font-size: 12px;}
  a.footer__group-list-item img {width: 13px;}
}
</style>


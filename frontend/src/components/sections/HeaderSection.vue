<template>
  <header class="header" id="header">
    <div class="container">
      <div class="header__content">
        <div class="header__burger-icon" @click="openBurger">
          <keyboard-key>&#60;/&#62;</keyboard-key>
        </div>
        <div class="header__logo">
          <img src="images/icons/logo.svg" alt="">
        </div>
        <nav class="header__navigation">
          <ul>
            <li><button name="about-me" @click="Navigation">Обо мне</button></li>
            <li><button name="skills" @click="Navigation">Скиллы</button></li>
            <li><button name="portfolio" @click="Navigation">Портфолио</button></li>
            <li><button name="services" @click="Navigation">Тарифы</button></li>
          </ul>
        </nav>
        <div class="header__contacts">
          <button class="header__contacts__nav" name="footer" @click="Navigation">Контакты</button>
          <icon-link class="header__icon-link" :href="header_link.url" target="_blank">
            <img :src="header_link.image.url" :alt="header_link.image.alt">
          </icon-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  methods: {
    ...mapActions(['ChangeBurgerStatus', 'Navigation']),
    openBurger() {
      this.ChangeBurgerStatus(true);
    }
  },
  computed: {
    ...mapGetters(['header_link']),
  }
}
</script>

<style lang="scss">

.header {
  margin-top: 30px;
}
.header__content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  border: 1px solid rgba($color: $color_white, $alpha: .18);
  border-radius: 100px;
}
.header__burger-icon {
  width: 30px;
  display: none;

  .keyboard-key {
    display: block;
    width: 45px;
    height: 45px;
    font-size: 15px;
    border-radius: 6px;

    &:hover {
      font-size: 13px;
      .keyboard-key__content {
        border: 1px solid rgba($color: $color_white, $alpha: .07);
      }
    }

    .keyboard-key__border {
      padding: 2px;

      .keyboard-key__content {
        border-radius: 6px;
      }
    }
  }
}
.header__logo {
  width: 35px;

  img {
    width: 100%;
  }
}
.header__navigation {
  ul {
    display: flex;
    gap: 50px;

    button {
      background-color: rgba(0, 0, 0, 0);
      color: rgba($color: $color_white, $alpha: .8);
      font-size: 16px;
    }
  }
}
.header__contacts {
  display: flex;
  align-items: center;
  gap: 20px;
}
.header__contacts__nav {
  color: $color_blue;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0);
}
.header__icon-link {
  width: 62px;
  height: 62px;
  padding: 14px;
}

@media screen and (max-width: 1000px) {
  .header__content {
    border: 0;
    padding: 0;
  }
  .header__logo {width: 30px;}
  .header__burger-icon {display: block}
  .header__navigation, .header__contacts {display: none;}
}
</style>
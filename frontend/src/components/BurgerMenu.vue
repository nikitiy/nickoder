<template>
  <div class="burger" :class="{burger_active: getBurgerStatus, burger_closing: burgerStatusClose}" @click.stop="closeBurger">
    <div class="burger__block" :class="{burger__block_active: getBurgerStatus, burger__block_closing: burgerStatusClose}" @click.stop>
      <div class="burger__content">
        <nav class="burger__navigation">
          <ul>
            <li><button class="burger__navigation-item_active" name="header" @click="Navigate">Начало</button></li>
            <li><button class="burger__navigation-item" name="about-me" @click="Navigate">Обо мне</button></li>
            <li><button class="burger__navigation-item" name="skills" @click="Navigate">Скиллы</button></li>
            <li><button class="burger__navigation-item" name="portfolio" @click="Navigate">Портфолио</button></li>
            <li><button class="burger__navigation-item" name="services" @click="Navigate">Тарифы</button></li>
            <li><button class="burger__navigation-item" name="footer" @click="Navigate">Контакты</button></li>
          </ul>
        </nav>
        <div class="burger__contacts">
          <div class="burger__links">
            <icon-link v-for="link in links" :key="link.id" :href="link.url" target="_blank">
              <img :src="link.image.meta.download_url" :alt="link.image.title">
            </icon-link>
          </div>
          <div class="burger__contacts-items">
            <a :href="'tel:' + formatPhoneNumber" class="burger__contacts-item">
              <img src="images/icons/phone-icon.svg" alt="">
              <p>{{ contacts_data.phone_number }}</p>
            </a>
            <a :href="'mailto:' + contacts_data.email" class="burger__contacts-item">
              <img src="images/icons/mail-icon.svg" alt="">
              <p>{{ contacts_data.email }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import IconLink from "@/components/UI/IconLink.vue";

export default {
  components: {IconLink},
  data() {
    return {
      burgerStatusClose: false,
    }
  },
  computed: {
    ...mapGetters(['getBurgerStatus', 'contacts_data', 'links']),
    formatPhoneNumber() {
      return this.contacts_data.phone_number.replaceAll(" ", "").replace("-", "").replace("(", "").replace(")", "")
    }
  },
  methods: {
    ...mapActions(['ChangeBurgerStatus', 'Navigation']),
    closeBurger() {
      this.burgerStatusClose = true;
      setTimeout( () => {
        this.ChangeBurgerStatus(false);
        this.burgerStatusClose = false;
      }, 200);
    },
    Navigate(event) {
      this.burgerStatusClose = true;
      this.ChangeBurgerStatus(false);
      this.Navigation(event);
      this.burgerStatusClose = false;
    }
  },
}
</script>

<style lang="scss">
  .burger {
    visibility: hidden;
    position: fixed;
    z-index: 3;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($color: $color_black, $alpha: .0);
    transition: background-color .5s, visibility .1s;

    &_active {
      visibility: visible;
      background-color: rgba($color: $color_black, $alpha: .7);
    }
    &_closing {
      background-color: rgba($color: $color_black, $alpha: .0);
    }
  }
  .burger__block {
    background-color: $color_black;
    height: 100vh;
    width: 255px;
    border-right: 1px solid rgba($color: $color_white, $alpha: .17);
    position: relative;
    left: -100%;
    overflow: scroll;
    transition: left .4s;

    &_active {
      left: 0;
    }
    &_closing {
      left: -100%;
    }
  }
  .burger__content {
    min-height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
  }
  .burger__navigation {
    text-align: center;

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;

      li {

        button {
          background-color: rgba(0, 0, 0, 0);
          color: rgba($color: $color_white, $alpha: .5);
          font-size: 16px;
        }
        .burger__navigation-item_active {
          font-weight: 600;
          color: $color_blue;
          position: relative;
          padding-bottom: 4px;

          &::after {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: $color_blue;
          }
        }
      }
    }
  }

  .burger__contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .burger__links {
    display: flex;
    gap: 15px;

    .icon-link {
      width: 35px;
      height: 35px;
      padding: 8px;

      &:nth-child(1n + 4) {
        display: none;
      }
    }
  }
  .burger__contacts-items {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .burger__contacts-item {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 13px;
      height: 13px;
    }
    p {
      color: rgba($color: $color_white, $alpha: .5);
      font-size: 12px;
    }
  }
</style>
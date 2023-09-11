<template>
  <div class="pop-up" :class="{'pop-up_active': getPopUpStatus, 'pop-up_closing': popUpStatusClose}"
       @click.stop="closePopUp">
    <div class="container">
      <div class="pop-up__content" :class="{'pop-up__content_active': getPopUpStatus, 'pop-up__content_closing': popUpStatusClose}">
        <div class="pop-up__portfolio" v-if="getPopUpType === 'portfolio'" @click.stop>
          <div class="cross" @click="closePopUp">
            <span></span>
            <span></span>
          </div>
          <img :src="getPopUpImage.meta.download_url" :alt="getPopUpImage.title">
        </div>
        <div class="pop-up__message" v-if="getPopUpType === 'message'" @click.stop>
          <div class="cross" @click="closePopUp">
            <span></span>
            <span></span>
          </div>
          <div class="check-mark-circle1">
            <div class="check-mark-circle2">
              <img class="check-mark" src="images/icons/check-mark.svg" alt="">
            </div>
          </div>
          <div class="pop-up__message__text">
            <p><span>Спасибо!</span></p>
            <p>C Вами свяжутся в ближайшее время.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      popUpStatusClose: false,
    }
  },
  computed: {
    ...mapGetters(['getPopUpStatus', 'getPopUpType', 'getPopUpMessage', 'getPopUpImage'])
  },
  methods: {
    ...mapActions(['ChangePopUpStatus', 'ChangePopUpType']),
    closePopUp() {
      this.popUpStatusClose = true;
      this.ChangePopUpType('')
      setTimeout(() => {
        this.ChangePopUpStatus(false);
        this.popUpStatusClose = false;
      }, 200);
    }
  }
}
</script>

<style lang="scss">
.pop-up {
  visibility: hidden;
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: $color_black, $alpha: .0);
  transition: background-color .5s, visibility .5s;

  &_active {
    visibility: visible;
    background-color: rgba($color: $color_black, $alpha: .7);
  }

  &_closing {
    background-color: rgba($color: $color_black, $alpha: .0);
  }

  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.pop-up__content {
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 70px 0 30px;
  opacity: 0;
  transition: opacity .5s;

  &_active {
    opacity: 1;
  }

  &_closing {
    opacity: 0;
  }
}

.pop-up__portfolio {
  position: relative;

  img {
    width: 100%;
    border-radius: 5px;
  }
}

.pop-up__message {
  width: 495px;
  padding: 30px;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 30px;
  border-radius: 20px;
  background-color: $color_white;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);

  .cross {
    top: 15px;
    right: 15px;
  }
}
.pop-up__message p span {
  font-size: 24px;
  font-weight: 700;
}
.pop-up__message p {
  margin-top: 7px;
  font-size: 16px;
}

.check-mark-circle1 {
  min-width: 77px;
  min-height: 77px;
  border-radius: 50%;
  background-color: $color_blue;
  display: flex;
  align-items: center;
  justify-content: center;
}
.check-mark-circle2 {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: $color_white;
  display: flex;
  align-items: center;
  justify-content: center;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
}
.check-mark {
  width: 31px;
}
.cross {
  position: absolute;
  z-index: 4;
  width: 20px;
  height: 20px;
  top: -35px;
  right: 0;
  cursor: pointer;

  span {
    position: absolute;
    top: 50%;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: #9A9B9B;
    transform: rotate(45deg) translate(0, -50%);
    &:nth-child(2) {
      transform: rotate(-45deg) translate(0, -50%);
    }
  }
}


@media screen and (max-width: 780px) {
  .pop-up__message {
    width: 330px;
    padding: 30px 23px;
    flex-direction: column;
    gap: 20px;
    text-align: center;

    p {
      font-size: 14px;

      span {
        font-size: 20px;
      }
    }
  }
}
@media screen and (max-width: 680px) {
  .pop-up__content {
    padding: 40px 0 20px;
  }
  .cross {
    top: -30px;
  }
}
@media screen and (max-width: 365px) {
  .pop-up__message {width: 100%;}
}
</style>
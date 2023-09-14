<template>
  <div class="keyboard-keys" :class="{'keyboard-keys_pressed': isKeyboardPressed}" @mouseover="animation = true" @mouseleave="animation = false">
    <keyboard-key>{{ first_letter }}</keyboard-key>
    <keyboard-key>{{ second_letter }}</keyboard-key>
  </div>
</template>

<script>
export default {
  name: "keyboard-keys",
  props: ['letters'],
  data() {
    return {
      first_letter: this.letters[0],
      second_letter: this.letters[1],
      animation: false,
      isKeyboardPressed: false
    }
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  },
  watch: {
    async animation() {
      if (this.animation === true) {
        this.isKeyboardPressed = true;
        await this.sleep(400);
        this.isKeyboardPressed = false;
        this.second_letter = this.letters[2];
        await this.sleep(400);
        this.isKeyboardPressed = true;
        await this.sleep(400);
        this.isKeyboardPressed = false;
        this.second_letter = this.letters[1];
      }
    }
  }
}
</script>

<style lang="scss">
.keyboard-keys {
  position: relative;
  width: 130px;
  height: 95px;

  .keyboard-key {
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 6px;
    font-size: 28px;
    transition: transform .2s;

    &:nth-child(1) {
      top: 0;
      left: 0;
      rotate: -9deg;
      z-index: 1;
    }
    &:nth-child(2) {
      right: 0;
      bottom: 0;
      rotate: 15deg;
      z-index: 1;
    }
  }
  .keyboard-key__border {
    padding: 2px;
  }
  .keyboard-key__content {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
}

@media screen and (max-width: 1235px) {
  .keyboard-keys {
    width: 11.57%;
    height: auto;
    padding-top: 8.5%;
    position: relative;

    .keyboard-key {
      width: 53%;
      height: auto;
      padding-top: 53%;
      position: absolute;

      &:nth-child(1) {
        top: 0;
        left: 0;
        rotate: -9deg;
        z-index: 1;
      }
      &:nth-child(2) {
        right: 0;
        bottom: 0;
        rotate: 15deg;
        z-index: 1;
      }
    }
    .keyboard-key__border {
      position: absolute;
      top: 0;
      left: 0;
    }
    .keyboard-key__content {
      font-size: 2.25vw;
    }
  }
}
.keyboard-keys_pressed {
  .keyboard-key {
    font-size: 25px;

    &:nth-child(1) {
      transform: rotate(21deg);
    }
    &:nth-child(2) {
      transform: rotate(-24deg);
    }

    .keyboard-key__border {background: none; padding: 0}
    .keyboard-key__content {
      border: 1px solid rgba($color: $color_white, $alpha: .07);
      background: linear-gradient(180deg, #161620 0%, #1C1C21 100%);
    }
  }
}
</style>
<template>
  <div class="search-slide" :class="{'search-slide_hide': isHide}">
    <div class="search-slide__input-block" v-bind:class="{ 'search-slide__input-block_ready': isReady }">
      <p class="search-slide__input" :class="{'search-slide__input_ready': isReady}">{{ search_input }}</p>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {mapActions} from "vuex";

export default defineComponent({
  name: "SearchSlide",
  data() {
    return {
      search_input: "",
      type_index: 0,
      speed: 120,
      fixed_text: "Привет, я ",
      addition_text_1: "Ник",
      addition_text_2: "Full-Stack developer",
      typing_act: 1,
      isReady: false,
      isHide: false,
    }
  },
  methods: {
    ...mapActions(['switchScroll']),
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async typeText() {
      if (this.typing_act === 1) {
        this.typing_act = 2;
        this.typingText(this.fixed_text, "add");
      } else if (this.typing_act === 2) {
        this.typing_act = 3;
        this.typingText(this.addition_text_1, "add");
      } else if (this.typing_act === 3) {
        await this.sleep(1500);
        this.typing_act = 4;
        this.typingText(this.addition_text_1, "del");
      } else if (this.typing_act === 4) {
        this.typing_act = 0;
        this.typingText(this.addition_text_2, "add");
      }
    },

    typingText(text, mode) {
      if (this.type_index < text.length) {
        if (mode === "add") {
          this.search_input += text.charAt(this.type_index);
        } else if (mode === "del") {
          this.search_input = this.search_input.slice(0, -1);
        }

        this.type_index++;
        setTimeout(() => this.typingText(text, mode), this.speed);
      } else {
        this.type_index = 0;
        this.typeText();
      }
    },
  },
  watch: {
    async search_input() {
      if (this.search_input === (this.fixed_text + this.addition_text_2)) {
        await this.sleep(500);
        this.isReady = true;
        await this.sleep(700);
        this.isHide = true;
        await this.switchScroll(false);
      }
    }
  },
  mounted() {
    this.switchScroll(true);
    this.typeText();
  },
})
</script>

<style lang="scss">

.search-slide {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $color_black;
  display: flex;
  z-index: 100;

  transition: transform 1s;
}

.search-slide_hide {
  transform: translate(0, -100%);
}

.search-slide__input-block {
  margin: auto;
  padding: 12px 48px 12px 20px;
  width: 430px;
  color: $color_white;
  border: 1px solid $color_white;
  border-radius: 200px;
  background-color: $color_black;

  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    right: 20px;
    width: 18px;
    height: 18px;
    background-image: url("@/assets/images/search-icon.svg");
  }

  &_ready {
    border-color: $color_blue;
    color: $color_blue;

    &::after {
      background-image: url("@/assets/images/search-icon_ready.svg");
    }
  }
}

.search-slide__input {
  font-size: 20px;
  font-weight: 400;
  overflow: hidden;
  display: inline-block;
  border-right: 3px solid $color_white;
  padding-right: 5px;
  animation: flashing-border .75s step-end infinite;
}

.search-slide__input_ready {
  animation: flashing-border_ready .75s step-end infinite;
}

@keyframes flashing-border {
  0% {
    border-color: $color_white;
  }
  50% {
    border-color: transparent;
  }
  100% {
    border-color: $color_white;
  }
}

@keyframes flashing-border_ready {
  0% {
    border-color: $color_blue;
  }
  50% {
    border-color: transparent;
  }
  100% {
    border-color: $color_blue;
  }
}

@media screen and (max-width: 720px) {
  .search-slide__input-block {
    width: 360px;
  }
  .search-slide__input {
    font-size: 18px;
  }
}
@media screen and (max-width: 480px) {
  .search-slide__input-block {
    width: 300px;
  }
  .search-slide__input {
    font-size: 14px;
  }
}
</style>
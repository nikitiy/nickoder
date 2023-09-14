<template>
  <div class="welcome">
    <div class="container">
      <h1 class="welcome__title">
        <span>F<keyboard-key class="keyboard-key_hover">u</keyboard-key>LL - ST<keyboard-key class="keyboard-key_hover">A</keyboard-key>CK</span>
        <span>WeB <keyboard-keys :letters="['⌘', 'C', 'V']"></keyboard-keys> DEVELOPER</span>
      </h1>
      <p class="welcome__addition-text" v-html="$filters.linebreaksbr(welcome_section_data.subtitle)"></p>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  computed: mapGetters(['welcome_section_data']),
}
</script>

<style lang="scss">
.welcome {
  margin-top: 110px;
  text-align: center;
}
.welcome__title {
  font-family: "CodeNext";
  font-weight: 800;
  font-size: 120px;
  text-transform: uppercase;
  color: $color_white;

  display: flex;
  flex-direction: column;

  & > span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    &:first-child {
      color: $color_blue;
    }
  }
}
.welcome__addition-text {
  font-size: 16px;
  line-height: 123%;
  color: rgba($color: $color_white, $alpha: .8);
  max-width: 735px;
  margin: 40px auto 0;
}

@media screen and (max-width: 1235px) {
  .welcome__title {
    font-size: 9.7vw;

    .keyboard-key {
      width: 8.87%;
      height: auto;
      padding-top: 8.87%;
      position: relative;
    }
    .keyboard-key__border {
      position: absolute;
      top: 0;
      left: 0;
    }
    .keyboard-key__content {
      font-size: 3.08vw;
    }
  }
}
@media screen and (max-width: 780px) {
  .welcome__addition-text {font-size: 14px;}
  .welcome__title > .keyboard-key {

  }
}
@media screen and (max-width: 720px) {
  .welcome__title {
    font-size: 9.2vw;

    & > span {
      gap: 10px;
    }
  }
  .welcome__title span > .keyboard-key {
    width: 56px;
    height: 56px;
    padding-top: 0;

    .keyboard-key__border {
      padding: 3px;
    }
  }
  .welcome__title span .keyboard-keys {
    min-width: 69px;
    width: 69px;
    height: 56px;
    padding-top: 0;

    .keyboard-key {
      width: 38px;
      height: 38px;
      padding-top: 0;
    }
  }
}
@media screen and (max-width: 575px) {
  .welcome__title {
    font-size: 9vw;
  }
  .welcome__title span > .keyboard-key {
    width: 50px;
    height: 50px;
  }
  .welcome__title span .keyboard-keys {
    min-width: 58px;
    width: 58px;
    height: 45px;

    .keyboard-key {
      width: 32px;
      height: 32px;
    }
  }
}
@media screen and (max-width: 575px) {
  .welcome__title {
    font-size: 8.8vw;
    gap: 7px;

    & > span:first-child {
      gap: 7px;
    }
  }
  .welcome__title span > .keyboard-key {
    width: 42px;
    height: 42px;
    border-radius: 6px;

    .keyboard-key__border {
      padding: 2px;

      .keyboard-key__content {
        border-radius: 6px;
        font-size: 15px;
      }
    }
  }
  .welcome__title span .keyboard-keys {
    min-width: 51px;
    width: 51px;
    height: 40px;

    .keyboard-key {
      width: 29px;
      height: 29px;

      .keyboard-key__border {

        .keyboard-key__content {
          font-size: 11px;
        }
      }
    }
  }
}
</style>
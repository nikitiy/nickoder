<template>
  <div class="about-me" id="about-me">
    <div class="container">
      <div class="about-me__content">
        <h3 class="about-me__title"><span class="span_background">ПРИВЕТ</span> МЕНЯ ЗОВУТ НИК<br/>
          Я FULL-STACK <span class="span_blue">DEVELoPER</span></h3>
        <div class="about-me__photo-block">
          <div class="blue-circle"></div>
          <img :src="about_me_section_data.photo.url" :alt="about_me_section_data.photo.alt">
        </div>
        <p class="about-me__description" v-html="$filters.linebreaksbr(about_me_section_data.subtitle)"></p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: mapGetters(['about_me_section_data']),
}
</script>

<style lang="scss">
.about-me {
  @extend %mt-120;
  overflow-y: hidden;
}
.about-me__content {
  display: grid;
  grid-template: repeat(2, auto) / minmax(auto, 543px) 471px;
  align-items: center;
  justify-content: space-between;
  gap: 30px 50px;
}

.about-me__title {
  font-family: CodeNext;
  font-weight: 800;
  font-size: 32px;
  text-transform: uppercase;
  line-height: 150%;
  color: $color_white;

  .span_background {
    line-height: 1;
    display: inline-block;
    padding: 6px 11px;
    background-color: $color_blue;
    border-radius: 15px;
    rotate: -4deg;
  }
  .span_blue {
    color: $color_blue;
  }
}
.about-me__description {
  color: rgba($color: $color_white, $alpha: .7);
  line-height: 150%;
}

.about-me__photo-block {
  grid-row: span 2;
  width: 100%;
  padding-top: 80%;
  background-color: rgba($color: $color_white, $alpha: .12);
  border-radius: 70px;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 70%;
  }
}
.blue-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 46%;
  padding-top: 46%;
  border-radius: 50%;
  filter: blur(70px);
  background-color: $color_blue;
}

@media screen and (max-width: 1100px) {
  .about-me__content {grid-template: repeat(2, auto) / minmax(auto, 420px) 45%; gap: 30px 50px;}
  .about-me__title {font-size: 28px;}
  .about-me__description {font-size: 14px;}
}
@media screen and (max-width: 1000px) {
  .about-me__content {grid-template: repeat(2, auto) / minmax(auto, 48%) 45%; gap: 30px 20px;}
  .about-me__title {font-size: 24px;}
}
@media screen and (max-width: 840px) {
  .about-me__photo-block {height: 100%; padding-top: 0; border-radius: 50px}
}
@media screen and (max-width: 760px) {
  .about-me__content {grid-template: 1fr / 1fr;}
  .about-me__photo-block {grid-row: span 1; width: 100%; padding-top: 80%; border-radius: 40px;}
}
@media screen and (max-width: 360px) {
  .about-me__title {font-size: 20px;}
  about-me__photo-block {border-radius: 30px;}
}
</style>
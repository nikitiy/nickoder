<template>
  <div @click="openPopUp" class="portfolio__item">
    <div class="portfolio__image">
      <img :src="portfolio.preview.meta.download_url" :alt="portfolio.preview.title">
    </div>
    <div class="portfolio__info">
      <div class="portfolio__top-row">
        <div class="portfolio__logo">
          <img :src="portfolio.logo.meta.download_url" :alt="portfolio.logo.title">
        </div>
        <div class="portfolio__buttons">
          <button-type-1 @click.stop="openPopUp">Посмотреть</button-type-1>
          <button-a v-if="portfolio.url" :href="portfolio.url" target="_blank" @click.stop>Перейти</button-a>
        </div>
      </div>
      <p>{{ portfolio.description }}</p>
      <div class="portfolio__background-figure">
        <img src="images/2-rectangles.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: ['portfolio'],
  methods: {
    ...mapActions(['ChangePopUpStatus', 'ChangePopUpType', 'ChangePopUpImage']),
    openPopUp() {
      this.ChangePopUpStatus(true);
      this.ChangePopUpType('portfolio');
      this.ChangePopUpImage(this.portfolio.full_image);
    }
  }
}
</script>

<style lang="scss">
.portfolio__item {
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.portfolio__image {
  width: 100%;
  padding-top: 100%;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
}

.portfolio__info {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: $color_blue;

  p {
    color: $color_white;
    font-size: 16px;
    font-weight: 500;
    line-height: 122%;
    cursor: pointer;
  }
}

.portfolio__top-row {
  display: flex;
  gap: 30px;
  flex: 1 0 auto;
}

.portfolio__logo {
  display: none;
  width: calc(50% - 30px);

  img {
    width: 100%;
  }
}

.portfolio__buttons {
  width: 100%;
  display: flex;
  gap: 10px;

  a.button-type-1 {
    color: $color_white;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.portfolio__background-figure {
  display: none;
  width: 64%;
  height: 64%;
  position: absolute;
  bottom: -5px;
  left: -10px;
  z-index: 5;

  img {
    width: 100%;
  }
}

@media (hover: hover) and (min-width: 781px) {
  .portfolio__info {
    gap: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 2;
    opacity: 0;
    transition: opacity .5s;

    &:hover {
      opacity: 1;
    }

    & p {
      padding: 0 10px 10px;
      font-size: 20px;
    }
  }
  .portfolio__logo {
    display: block;
  }
  .portfolio__buttons {
    width: 50%;
    flex-direction: column;
  }
  .portfolio__background-figure {
    display: block;
  }
}

@media (hover: none) {
  .portfolio__item {
    display: flex;
    flex-direction: column;
  }
  .portfolio__info {
    flex: 1 0 auto;
  }
  .portfolio__top-row {
    flex: 0 0 auto;
  }
  .portfolio__info p {
    order: -1;
    flex: 1 0 auto;
  }
  .portfolio__buttons {
    justify-content: flex-end;

    a.button-type-1 {
      flex: 0 0 50%;
    }

    button {
      flex: 0 0 50%;
    }
  }
}

@media screen and (hover: none) and (max-width: 1000px) {
  .portfolio__info p {
    font-size: 16px;
  }
}

@media screen and (max-width: 780px) {
  .portfolio__item {
    display: flex;
    flex-direction: column;
  }
  .portfolio__info {
    flex: 1 0 auto;
  }
  .portfolio__top-row {
    flex: 0 0 auto;
  }
  .portfolio__info p {
    order: -1;
    flex: 1 0 auto;
  }
  .portfolio__buttons {
    justify-content: flex-end;

    a.button-type-1 {
      flex: 0 0 50%;
    }

    button {
      flex: 0 0 50%;
    }
  }
}

@media screen and (max-width: 720px) {
  .portfolio__buttons .button-type-1 {
    padding: 10px 0;
    font-size: 14px;
  }
  .portfolio__info p {
    font-size: 14px;
  }
}
</style>
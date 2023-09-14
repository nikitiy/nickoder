<template>
  <div class="services__category">
    <h3 class="title title_start">{{ service.title }}</h3>
    <div class="services__info">
      <ul>
        <li v-for="text_row in service.simple_text" :key="text_row.id">{{ text_row.text }}</li>
      </ul>
    </div>
    <div class="services__price">
      <p>от <span>{{ service.price }}</span></p>
      <button name="application" @click="Navigation">заказать</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  methods: mapActions(['Navigation']),
  props: ['service']
}
</script>

<style lang="scss">
.services__category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 20px 0;
  border-bottom: 1px solid $color_white;

  &:first-child {
    border-top: 1px solid $color_white;
  }

  .title {
    text-transform: uppercase;
    font-size: 48px;
    word-break: break-word;
    width: 40%;
    max-width: 480px;
    min-width: 30%;
  }
}
.services__info {
  color: rgba($color: $color_white, $alpha: .6);
  width: 370px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 4px;

    li {
      padding: 8px 10px;
      border-bottom: 1px solid;
    }
  }
}
.services__price {
  width: 30%;
  min-width: auto;
  max-width: 260px;
  text-align: center;

  p {
    color: $color_white;

    span {
      font-size: 32px;
      font-weight: 500;
    }
  }
  button {
    margin-top: 16px;
    background-color: rgba(0, 0, 0, 0);
    color: $color_blue;
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid;
  }
}

@media screen and (max-width: 1000px) {
  .services__category {flex-direction: column; align-items: flex-start;}
  .services__category .title, .services__info, .services__price {max-width: 100%; width: 100%;}
  .services__category .title {font-size: 42px;}
}
@media screen and (max-width: 720px) {

}
@media screen and (max-width: 670px) {
  .services__category .title {font-size: 36px;}
}
@media screen and (max-width: 480px) {
  .services__category .title {font-size: 30px;}
}
@media screen and (max-width: 360px) {
  .services__category {gap: 20px;}
  .services__category .title {font-size: 28px;}
  .services__info {font-size: 14px;}
  .services__price p {font-size: 14px;}
  .services__price p span {font-size: 24px;}
  .services__price button {font-size: 14px; padding-bottom: 6px; margin-top: 10px;}
}
</style>
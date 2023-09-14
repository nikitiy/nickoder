<template>
  <div class="skills__item">
    <img :src="image" :alt="name">
  </div>
</template>

<script>
export default {
  props: ['image', 'name']
}
</script>

<style lang="scss">
.skills__item {
  width: 85px;
  height: 85px;
  background-color: rgba($color: $color_white, $alpha: .11);
  border: 1px solid $color_blue;
  border-radius: 6px;
  rotate: 45deg;
  padding: 20px;

  img {
    width: 100%;
    rotate: -45deg;
  }
}
@media screen and (max-width: 670px) {
  .skills__item {width: 42px;height: 42px; padding: 10px}
}
</style>
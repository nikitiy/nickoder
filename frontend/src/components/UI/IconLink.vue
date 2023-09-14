<template>
  <a class="icon-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "icon-link"
}
</script>

<style lang="scss">
.icon-link {
  display: inline-block;
  border-radius: 50%;
  background-color: $color_blue;

  img {
    width: 100%;
  }
}
</style>
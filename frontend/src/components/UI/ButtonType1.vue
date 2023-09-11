<template>
  <button class="button-type-1">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "button-type-1",
}
</script>

<style lang="scss">
.button-type-1 {
  width: 100%;
  padding: 12px;
  background-color: $color_white;
  border: 1px solid $color_white;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  color: $color_black;
  text-align: center;
}

@media screen and (max-width: 480px) {
  .button-type-1 {padding: 10px; font-size: 14px;}
}
</style>
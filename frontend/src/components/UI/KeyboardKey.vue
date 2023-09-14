<template>
  <div class="keyboard-key">
    <div class="keyboard-key__border">
      <div class="keyboard-key__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "keyboard-key"
}
</script>

<style lang="scss">
.keyboard-key {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  width: 100px;
  height: 100px;
  font-family: "SF";
  font-weight: 400;
  font-size: 38px;
  color: rgba($color: $color_white, $alpha: .6);
  border-radius: 13px;
  background: $color_black;
}
.keyboard-key__border {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, rgba(255, 255, 255, .34), rgba($color: $color_white, $alpha: .03), rgba($color: $color_white, $alpha: 0));
  padding: 4px;
}
.keyboard-key__content {
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #161620 0%, #34343C 100%);
}
@media screen and (hover: hover) {
    .keyboard-key_hover:hover {
      font-size: 36px;

      .keyboard-key__border {background: none; padding: 0}
      .keyboard-key__content {
        border: 2px solid rgba($color: $color_white, $alpha: .07);
        background: linear-gradient(180deg, #161620 0%, #1C1C21 100%);
      }
    }
}
</style>
<template>
  <input class="input-type-1" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
  name: "input-type-1",
  props: ['modelValue'],
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style lang="scss">
.input-type-1 {
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0);
  color: $color_white;
  font-size: 16px;
  border-bottom: 1px solid rgba($color: $color_white, $alpha: .3);
  border-radius: 0;
}
.input-type-1::placeholder {
  color: rgba($color: $color_white, $alpha: .8);
}
.input-type-1::-webkit-input-placeholder {
  color: rgba($color: $color_white, $alpha: .8);
}
.input-type-1:-moz-placeholder {
  color: rgba($color: $color_white, $alpha: .8);
}
.input-type-1:-ms-input-placeholder {
  color: rgba($color: $color_white, $alpha: .8);
}
@keyframes input_swing {
  15% {
    transform: translateX(9px);
  }
  30% {
    transform: translateX(-9px);
  }
  40% {
    transform: translateX(6px);
  }
  50% {
    transform: translateX(-6px);
  }
  65% {
    transform: translateX(3px);
  }
  100% {
    transform: translateX(0);
  }
}
.input-type-1_error {
  animation: input_swing 1s ease;
  color: #ff6464;
  border-bottom: 1px solid #ff6464;
}
.input-type-1_error::placeholder {
  color: #ff6464;
  opacity: 1;
}
.input-type-1_error:-ms-input-placeholder {
  color: #ff6464;
}
.input-type-1_error::-ms-input-placeholder {
  color: #ff6464;
}

@media screen and (max-width: 480px) {
  .input-type-1 {font-size: 14px;}
}
</style>
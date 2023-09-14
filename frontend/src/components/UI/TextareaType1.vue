<template>
  <textarea class="textarea-type-1" :value="modelValue" @input="updateInput"></textarea>
</template>

<script>
export default {
  name: "textarea-type-1",
  props: ['modelValue'],
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style lang="scss">
.textarea-type-1 {
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0);
  color: $color_white;
  font-size: 16px;
  border-bottom: 1px solid rgba($color: $color_white, $alpha: .3);
  border-radius: 0;
}
.textarea-type-1::placeholder {
  color: rgba($color: $color_white, $alpha: .8);
}
.textarea-type-1::-webkit-input-placeholder {
  color: rgba($color: $color_white, $alpha: .8);
}
.textarea-type-1:-moz-placeholder {
  color: rgba($color: $color_white, $alpha: .8);
}
.textarea-type-1:-ms-input-placeholder {
  color: rgba($color: $color_white, $alpha: .8);
}

@media screen and (max-width: 480px) {
  .textarea-type-1 {font-size: 14px;}
}
</style>
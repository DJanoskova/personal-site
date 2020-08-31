<template>
  <button :class="[type, { icon: onlyIcon }]">
    <i :class="`fas fa-${icon}`" v-if="icon" />
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    icon: String,
    type: String
  },
  computed: {
    onlyIcon() {
      return this.icon && !this.$slots.default;
    }
  }
};
</script>

<style scoped lang="scss">
button {
  border-radius: 2rem;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.2);
  outline: none;
  background: #ffffff;

  &.icon {
    padding: 0;
    height: 3.5rem;
    width: 3.5rem;
  }

  &.primary {
    background: var(--primary);
    color: #ffffff;
  }

  &:disabled {
    background: #eaeaea;
    color: #ffffff;
    cursor: default;
    box-shadow: none;
  }
}
</style>
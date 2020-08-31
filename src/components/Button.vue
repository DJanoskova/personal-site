<template>
  <component :is="tag" :class="['button', type, { icon: onlyIcon }]" v-bind="props">
    <i :class="`fas fa-${icon}`" v-if="icon" />
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    icon: String,
    type: String,
    tag: {
      type: String,
      default: "button"
    },
    href: String
  },
  computed: {
    onlyIcon() {
      return this.icon && !this.$slots.default;
    },
    props() {
      if (this.tag !== "a") return null;
      return {
        href: this.href,
        target: "_blank"
      };
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  border-radius: 2rem;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.2);
  outline: none;
  background: #ffffff;
  transition: 0.2s;
  cursor: pointer;

  &.icon {
    padding: 0;
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    cursor: default;
  }
}
</style>

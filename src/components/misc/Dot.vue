<template>
  <span class="dot" :class="{ active }" />
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.dot {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: #eaeaea;
  margin: 0.7rem;
  transition: 0.5s;

  &.active {
    background: var(--primary);
    transform: scale(2);
   }
}
</style>

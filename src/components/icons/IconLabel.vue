<template>
  <span class="container">
    <i :class="`fa-${icon}`"></i>
    {{ label }}
  </span>
</template>

<script>
export default {
  props: {
    icon: String,
    link: String,
    label: String
  }
};
</script>

<style scoped>
.container {
  margin: 0 1rem;
}
</style>

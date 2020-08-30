<template>
  <div class="section">
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped>
.section {
  margin-bottom: 4rem;
  padding-top: 2rem;
}
</style>

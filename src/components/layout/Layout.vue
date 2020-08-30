<template>
  <div class="layout">
    <Aside />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import Aside from "./Aside";

export default {
  components: {
    Aside
  }
};
</script>

<style scoped lang="scss">
.layout {
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  height: 100%;
}
</style>

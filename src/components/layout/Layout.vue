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
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  padding-left: 29rem;

  @media all and (max-width: 1300px) {
    padding-left: 2rem;
    padding-right: 2rem;
    max-width: none;
  }
}
</style>

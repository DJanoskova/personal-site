<template>
  <div class="container">
    <Card class="skill">
      <i :class="`fab fa-${icon}`" :style="{ color }" v-if="!link" />
      <a v-else :href="link" target="_blank">
        <i :class="`fab fa-${icon}`" :style="{ color }" />
      </a>
    </Card>
    {{ title }}
  </div>
</template>

<script>
import Card from "../Card";

export default {
  props: {
    icon: String,
    title: String,
    color: String,
    link: String
  },
  components: { Card }
};
</script>

<style scoped lang="scss">
.container {
  text-align: center;
}

.skill {
  margin: 0 2rem 1rem 2rem;
  padding: 2rem;

  svg {
    width: 2.5rem;
    height: auto;
  }
}
</style>

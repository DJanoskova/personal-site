<template>
  <Section title="Links">
    <div class="link-list">
      <IconCard
        v-for="data in links"
        :icon="data.icon"
        :key="data.icon"
        :title="data.title"
        :color="data.color"
        :link="data.link"
      />
    </div>
  </Section>
</template>

<script>
import links from "../../const/links";

import Section from "../layout/Section";
import IconCard from "../icons/IconCard";

export default {
  data() {
    return {
      links
    };
  },
  components: {
    Section,
    IconCard
  }
};
</script>

<style scoped>
.link-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2rem;
}
</style>

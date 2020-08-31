<template>
  <Section title="Most used skills">
    <div class="skill-list">
      <Skill
        v-for="skill in skills"
        :icon="skill.icon"
        :key="skill.icon"
        :title="skill.title"
        :color="skill.color"
      />
    </div>
  </Section>
</template>

<script>
import skills from "../../const/skills";

import Section from "../layout/Section";
import Skill from "../icons/IconCard";

export default {
  data() {
    return {
      skills
    };
  },
  components: {
    Section,
    Skill
  }
};
</script>

<style scoped>
.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2rem;
}
</style>

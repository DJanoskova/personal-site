<template>
  <Section title="GitHub projects">
    <template v-if="projects">
      <div class="project-list">
        <Project
          v-for="project in displayedProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </template>
  </Section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Project from "./Project";
import Section from "../layout/Section";

export default {
  data() {
    return {
      page: 1
    };
  },
  mounted() {
    if (!this.projects) this.PROJECTS_FETCH();
  },
  methods: {
    ...mapActions(["PROJECTS_FETCH"])
  },
  computed: {
    ...mapGetters(["projects"]),
    displayedProjects() {
      return this.projects.slice(0, this.page * 6);
    }
  },
  components: {
    Section,
    Project
  }
};
</script>

<style scoped>
.project-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
}
</style>

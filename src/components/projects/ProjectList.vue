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

      <div class="buttons">
        <button @click="handleHide" v-if="displayedProjects.length > 6">Collapse</button>
        <button @click="handleLoad" v-if="!allProjects">Display more</button>
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
    ...mapActions(["PROJECTS_FETCH"]),
    handleLoad() {
      this.page++;
    },
    handleHide() {
      this.page = 1
    }
  },
  computed: {
    ...mapGetters(["projects"]),
    displayedProjects() {
      return this.projects.slice(0, this.page * 6);
    },
    allProjects() {
      return this.projects.length === this.displayedProjects.length;
    }
  },
  components: {
    Section,
    Project
  }
};
</script>

<style scoped lang="scss">
.project-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
}

.buttons {
  margin: 1rem 0;
  text-align: center;

  button {
    margin: 0 1rem;
  }
}
</style>

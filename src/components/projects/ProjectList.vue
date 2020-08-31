<template>
  <div class="container">
    <Section title="GitHub projects">
      <transition-group
        name="list"
        tag="div"
        class="project-list"
        appear
        v-if="projects"
      >
        <Project
          v-for="project in displayedProjects"
          :key="project.id"
          :project="project"
        />
      </transition-group>
    </Section>

    <div class="buttons">
      <Button
        @click="handlePrev"
        :disabled="page <= 1"
        type="primary"
        icon="chevron-up"
      />
      <Button
        @click="handleLoad"
        :disabled="lastPage"
        type="primary"
        icon="chevron-down"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Project from "./Project";
import Section from "../layout/Section";
import Button from "../Button";

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
    handlePrev() {
      this.page--;
    }
  },
  computed: {
    ...mapGetters(["projects"]),
    displayedProjects() {
      const { page } = this;
      return this.projects.slice((page - 1) * 6, page * 6);
    },
    lastPage() {
      return this.page >= this.pages;
    },
    pages() {
      const { projects } = this;
      if (!projects) return 0;
      return Math.ceil(this.projects.length / 6);
    }
  },
  components: {
    Button,
    Section,
    Project
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
}

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

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  height: 0;
}
</style>

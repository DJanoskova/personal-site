<template>
  <div class="container">
    <Section title="GitHub projects">
      <template v-if="projects">
        <transition-group
          name="list"
          tag="div"
          class="project-list"
          appear
        >
          <Project
            v-for="project in displayedProjects"
            :key="project.id"
            :project="project"
          />
        </transition-group>
        <div class="buttons">
          <Button
            @click="handlePrev"
            :disabled="page <= 1"
            type="primary"
            icon="chevron-up"
          />
          <Dot
            v-for="loopedPage in pages"
            :active="loopedPage === page"
            :key="loopedPage"
          />
          <Button
            @click="handleLoad"
            :disabled="lastPage"
            type="primary"
            icon="chevron-down"
          />
        </div>
      </template>
    </Section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Project from "./Project";
import Section from "../layout/Section";
import Button from "../Button";
import Dot from "../misc/Dot";

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
    Dot,
    Button,
    Section,
    Project
  }
};
</script>

<style scoped lang="scss">
.container {
  position: relative;
}

.project-list {
  padding-right: 6rem;
}

.buttons {
  position: absolute;
  top: 25rem;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 0.5rem 0;
  }
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
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

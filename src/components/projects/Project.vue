<template>
  <div class="wrapper">
    <Card class="project">
      <div>
        <strong class="title">
          <a :href="projecthomepage || project.html_url" target="_blank">
            {{ project.name }}
          </a>
        </strong>
        <p>
          {{ project.description }}
        </p>
      </div>
      <IconContainer>
        <IconLabel icon="star far" :label="`${project.stargazers_count}`" />
        <IconLabel icon="code-branch fas" :label="`${project.forks_count}`" />
      </IconContainer>
    </Card>
  </div>
</template>

<script>
import IconLabel from "../icons/IconLabel";
import IconContainer from "../icons/IconContainer";
import Card from "../Card";

export default {
  props: {
    project: Object
  },
  components: {IconLabel, IconContainer, Card}
};
</script>

<style scoped>
.wrapper {
  flex-basis: calc((100% / 3) - 2rem);
  flex-shrink: 0;
  flex-grow: 0;
  background: white;
  height: 25rem;
  display: flex;
}

.project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  text-align: left;
  background: white;
  width: 100%;
}
</style>

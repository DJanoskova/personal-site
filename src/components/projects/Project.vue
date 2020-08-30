<template>
  <Card class="project">
    <div>
      <strong class="title">
        <a :href="project.html_url" target="_blank">
          {{ project.name }}
        </a>
      </strong>
      <p class="text-muted">
        {{ project.homepage }}
      </p>
      <p>
        {{ project.description }}
      </p>
    </div>
    <IconContainer>
      <IconLabel icon="star far" :label="`${project.stargazers_count}`" />
      <IconLabel icon="code-branch fas" :label="`${project.forks_count}`" />
    </IconContainer>
  </Card>
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
.project {
  flex-basis: calc((100% / 3) - 2rem);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
}
</style>

<template>
  <div class="wrapper">
    <Card class="project">
      <div>
        <strong class="title">
          <a :href="project.html_url" target="_blank">
            {{ project.name }}
          </a>
          <Button
            icon="globe"
            v-if="project.homepage"
            title="Demo"
            class="icon-homepage"
            tag="a"
            :href="project.homepage"
          />
        </strong>
        <p>
          {{ project.description }}
        </p>
      </div>
      <IconContainer>
        <IconLabel
          icon="star far"
          :label="`${project.stargazers_count}`"
          v-if="project.stargazers_count"
        />
        <IconLabel
          icon="code-branch fas"
          :label="`${project.forks_count}`"
          v-if="project.forks_count"
        />
      </IconContainer>
    </Card>
  </div>
</template>

<script>
import IconLabel from "../icons/IconLabel";
import IconContainer from "../icons/IconContainer";
import Card from "../Card";
import Button from "../Button";

export default {
  props: {
    project: Object
  },
  components: { Button, IconLabel, IconContainer, Card }
};
</script>

<style scoped lang="scss">
.wrapper {
  flex-basis: calc(100% / 3);
  flex-shrink: 0;
  flex-grow: 0;
  height: 25rem;
  display: flex;

  @media all and (max-width: 850px) {
    flex-basis: 50%;
  }

  @media all and (max-width: 600px) {
    flex-basis: 100%;
  }
}

.project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  text-align: left;
  background: white;
  width: 100%;
  position: relative;
}

.icon-homepage {
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
}
</style>

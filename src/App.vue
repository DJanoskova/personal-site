<template>
  <div id="app">
    <Layout>
      <ProjectList />
      <SkillsList />
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/layout/Layout";
import ProjectList from "./components/projects/ProjectList";
import SkillsList from "./components/skills/SkillsList";

export default {
  name: "App",
  components: {
    ProjectList,
    Layout,
    SkillsList
  }
};
</script>

<style lang="scss">
html {
  font-size: 62.5%;
}

body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  font-size: 1.6rem;
  --primary: #3c4bff;
}

#app {
  height: 100vh;
}

body * {
  box-sizing: border-box;
}

.text-muted {
  color: #898989;
}

a {
  text-decoration: none;
  color: var(--primary);

  &:hover {
    text-decoration: underline;
  }
}
</style>

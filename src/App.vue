<template>
  <div id="app">
    <Layout>
      <ProjectList />
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/layout/Layout";
import ProjectList from "./components/projects/ProjectList";

export default {
  name: "App",
  components: {
    ProjectList,
    Layout
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
</style>

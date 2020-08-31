<template>
  <div id="app">
    <Layout>
      <SkillsList />
      <ProjectList />
      <ArticleList />
      <LinkList />
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/layout/Layout";
import ProjectList from "./components/projects/ProjectList";
import SkillsList from "./components/skills/SkillsList";
import ArticleList from "./components/articles/ArticleList";
import LinkList from "./components/links/LinksList";

export default {
  name: "App",
  components: {
    ProjectList,
    Layout,
    SkillsList,
    ArticleList,
    LinkList
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
  color: #262626;
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

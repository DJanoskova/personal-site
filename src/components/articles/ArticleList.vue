<template>
  <div class="container">
    <Section title="Medium articles">
      <div id="medium-widget"></div>
    </Section>
  </div>
</template>

<script>
import Section from "../layout/Section";
// import Button from "../Button";

export default {
  mounted() {
    // eslint-disable-next-line no-undef
    MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/@danajanoskova","postsPerLine":1,"limit":10,"picture":"small","fields":["description","claps","publishAt"],"ratio":"landscape"}})
  },
  components: {
    Section
  }
};
</script>


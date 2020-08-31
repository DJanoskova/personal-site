<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  padding: 3rem;
  box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.07);
  border-radius: 1rem;
  background: white;
}
</style>

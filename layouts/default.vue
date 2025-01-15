<template>
  <div class="page">
    <Header />
    <div class="main">
      <PageTitle />
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import PageTitle from "~/components/PageTitle.vue";
</script>

<style scoped>
.page {
  width: 100%;
  padding-top: 1rem;
  box-sizing: border-box;
  border-radius: 5px;
  min-height: 100vh;
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2em;
  padding-top: 2rem;
}

.content {
  padding: 0.5rem 2rem;
  width: 100%;
  flex: 1;
}
</style>

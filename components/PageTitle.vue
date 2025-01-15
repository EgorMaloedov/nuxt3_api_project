<template>
  <div class="pageTitle">
    <h1>
      {{router.meta?.title}}
    </h1>
  </div>
</template>

<script setup lang="ts">
const router = useRoute()
</script>

<style scoped>
.pageTitle{
  background-color: #00DC82;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0.5rem 2rem;
  border-radius: 5px;
}
</style>

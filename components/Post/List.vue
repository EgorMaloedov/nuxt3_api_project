<template>
  <div>
    <h2>Список постов</h2>
    <div class="postList">
      <div v-for="post in posts" :key="post.id">
        <PostElement :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TPost } from "~/components/Post/types";
const posts = defineModel('posts', { type: Array<TPost> });
</script>

<style scoped>
.postList {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 2em;
}
</style>

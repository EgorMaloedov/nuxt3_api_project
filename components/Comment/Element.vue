<template>
  <div class="commentWrapper">
    <h3 class="commentHeading">{{ comment.name }}</h3>
    <div class="commentContent">
      {{ comment.body }}
    </div>
    <div class="commentEmail">{{ comment.email }}</div>
  </div>
</template>

<script setup lang="ts">
import type { TComment } from "~/components/Comment/types";

const props = defineProps<{
  comment: TComment;
}>();
</script>

<style scoped>
.commentWrapper {
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.commentHeading {
  font-size: 1.2em;
  margin: 0 0 5px 0;
}

.commentContent {
  font-size: 1em;
  margin-bottom: 10px;
}

.commentEmail {
  font-size: 0.9em;
  color: #ccc;
}
</style>

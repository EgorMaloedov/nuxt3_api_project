<template>
  <div class="postContainer" @click.prevent="openPost" :class="{ closed: !isExpanded }">
    <span class="close" v-if="isExpanded" @click.stop="closePost">x</span>
    <h2 class="postTitle">{{ post.title }}</h2>
    <div v-if="isExpanded" class="postBody">
      {{ post.body }}
      <CommentList :postId="post.id" />
    </div>
    <div v-else class="postPreview">Нажмите, чтобы раскрыть</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TPost } from "~/components/Post/types";

const props = defineProps<{
  post: TPost;
}>();

const isExpanded = ref(false);

const openPost = () => {
  isExpanded.value = true;
};

const closePost = () => {
  isExpanded.value = false;
};
</script>

<style scoped>
.close {
  position: absolute;
  right: 1em;
  top: 1em;
  cursor: pointer;
}

.postContainer {
  position: relative;
  padding: 2em;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.postContainer.closed:hover {
  cursor: pointer;
  background-color: #f1f1f1;
  transform: scale(1.01);
}

.postTitle {
  font-size: 1.5em;
  margin: 0;
}

.postBody {
  font-size: 1em;
  margin-top: 10px;
}

.postPreview {
  margin-top: 10px;
  font-size: 0.9em;
  font-style: italic;
}
</style>

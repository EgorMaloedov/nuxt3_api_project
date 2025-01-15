<template>
  <div class="commentsContainer">
    <h3 class="title">Комментарии:</h3>
    <Loader v-if="isLoading" />
    <div v-else class="commentsList">
      <div v-for="comment in comments" :key="comment.id" class="commentItem">
        <CommentElement :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { TComment } from "~/components/Comment/types";
import Loader from "~/components/Loader.vue";

const props = defineProps<{
  postId: number;
}>();

const comments = ref<TComment[]>([]);
const isLoading = ref(true);

const fetchComments = async (postId: number) => {
  try {
    comments.value = await $fetch<TComment[]>(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
  } catch (error) {
    console.error("Ошибка загрузки комментариев:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await fetchComments(props.postId);
});
</script>

<style scoped>
.commentsContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.commentsList {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  margin-top: 2em;
}

.title {
  margin-top: 2rem;
  color: #00DC82;
}
</style>

<template>
  <Loader v-if="isLoading" />
  <div v-if="!isLoading && posts.length > 0">
    <PostList :posts="posts" />
    <Pagination :pagesLength="totalPages" :currentPage="currentPage" @update:currentPage="updatePage" />
  </div>
  <div v-if="!isLoading && posts.length === 0">
    Посты не найдены
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Pagination from '@/components/Pagination.vue';
import type { TPost } from "~/components/Post/types";

useHead({
  title: 'Тестовое приложение nuxt'
})

const currentPage = ref(1);
const pageSize = 5;
const isLoading = ref(false);

const { data: postsData } = useFetch<TPost[]>(() => {
  const start = (currentPage.value - 1) * pageSize;
  return `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${pageSize}`;
}, {
  immediate: true,
  onRequest() {
    isLoading.value = true;
  },
  onResponse() {
    isLoading.value = false;
  },
  onRequestError({ error }) {
    isLoading.value = false;
    console.error(`Ошибка загрузки постов: ${error.message || 'Неизвестная ошибка'}`);
  }
});

const { data: totalPostsData } = useFetch<TPost[]>('https://jsonplaceholder.typicode.com/posts', {
  immediate: true,
  onRequest() {
    if (!isLoading.value) {
      isLoading.value = true;
    }
  },
  onResponse() {
    isLoading.value = false;
  },
  onRequestError({ error }) {
    isLoading.value = false;
    console.error(`Ошибка загрузки постов: ${error.message || 'Неизвестная ошибка'}`);
  }
});

const totalPosts = computed(() => totalPostsData.value?.length || 0);
const totalPages = computed(() => Math.ceil(totalPosts.value / pageSize));

const posts = computed(() => postsData.value || []);

const updatePage = (page: number) => {
  currentPage.value = page;
};

definePageMeta({
  title: "Главная"
});
</script>

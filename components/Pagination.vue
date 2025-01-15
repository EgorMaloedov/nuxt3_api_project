<template>
  <div class="pagination">
    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
      Предыдущая
    </button>

    <button :class="{ active: currentPage === 1 }" @click="changePage(1)" v-if="pagesLength > 1">1</button>

    <button v-for="page in middlePages" :key="page"
            :class="{ active: currentPage === page }"
            @click="changePage(page)">
      {{ page }}
    </button>

    <button :class="{ active: currentPage === pagesLength }"
            @click="changePage(pagesLength)"
            v-if="pagesLength > 1 && currentPage !== pagesLength">
      {{ pagesLength }}
    </button>

    <button @click="changePage(currentPage + 1)" :disabled="currentPage === pagesLength">
      Следующая
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps<{
  pagesLength: number;
  currentPage: number;
}>();

const emits = defineEmits(['update:currentPage']);

const changePage = (page: number) => {
  if (page >= 1 && page <= props.pagesLength) {
    emits('update:currentPage', page);
  }
};

const middlePages = computed(() => {
  const range = 2;
  const pages = [];
  const start = Math.max(2, props.currentPage - range);
  const end = Math.min(props.pagesLength - 1, props.currentPage + range);
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});
</script>

<style scoped>
.pagination {
  margin-top: 2em;
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
}

.pagination button {
  border: none;
  background-color: #fff;
  padding: 0.5em 0.8em;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.pagination button.active {
  background-color: #00DC82;
  color: white;
}

.pagination button:hover:not(:disabled) {
  background-color: #00DC82;
  color: white;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.pagination span {
  font-size: 1rem;
  color: #80EEC0;
}

@media (max-width: 768px) {
  .pagination {
    flex-direction: column;
    gap: 0.5em;
  }

  .pagination button {
    font-size: 0.875rem;
    padding: 0.4em 0.6em;
  }

  .pagination button:not(.active) {
    display: none;
  }

  .pagination button:first-child,
  .pagination button:last-child,
  .pagination button.active {
    display: inline-block;
  }
}
</style>

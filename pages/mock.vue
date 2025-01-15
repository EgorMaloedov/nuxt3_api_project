<template>
  <div>
    <h2>Иллюстрация работы с v-model</h2>
    <ToggleSwitch v-model="isToggled" />
    <p @click="isToggled = !isToggled">Состояние: {{ isToggled ? 'Включено' : 'Выключено' }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ToggleSwitch from "~/components/Comment/ToggleSwitch.vue";



const isToggled = ref(false);

useHead({
  title: 'Моковая страница'
})

definePageMeta({
  title: "Моковая страница"
});
</script>

<style scoped>
h2{
  margin-bottom: 2em;
}
p{
  cursor: pointer;
  margin-top: 2em;
}
</style>

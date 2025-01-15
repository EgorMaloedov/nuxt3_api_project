<template>
  <div @click="toggle" :class="{ 'active': modelValue }" class="toggle-switch">
    <span>{{ modelValue ? 'Включено' : 'Выключено' }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

function toggle() {
  emit('update:modelValue', !props.modelValue);
}
</script>

<style scoped>
.toggle-switch {
  padding: 2em;
  background-color: lightgray;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  user-select: none;
}
.toggle-switch.active {
  background-color: #00DC82;
  color: white;
}
</style>

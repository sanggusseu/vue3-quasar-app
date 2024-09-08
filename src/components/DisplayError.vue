<template>
  <div v-if="code" class="text-red text-center">
    {{ getErrorMessage(code) }}
  </div>
</template>

<script setup>
import { getErrorMessage } from 'src/utils/firebase/error-message';
const props = defineProps({
  code: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>

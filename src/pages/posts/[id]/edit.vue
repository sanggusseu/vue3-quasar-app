<template>
  <q-page padding>
    <BaseCard>
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
      </q-toolbar>
      <q-separator />
      <PostForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:tags="form.tags"
        @submit.prevent
      >
        <template #actions>
          <q-btn flat label="취소" v-close-popup />
          <q-btn type="submit" flat label="수정" color="primary" />
        </template>
      </PostForm>
    </BaseCard>
  </q-page>
</template>

<script>
const getInitialForm = () => ({
  title: '',
  category: '',
  content: '',
  tags: [],
});
</script>
<script setup>
import PostForm from 'src/components/apps/post/PostForm.vue';
import BaseCard from 'src/components/base/BaseCard.vue';
import { ref } from 'vue';

const form = ref(getInitialForm());
</script>

<style lang="scss" scoped></style>

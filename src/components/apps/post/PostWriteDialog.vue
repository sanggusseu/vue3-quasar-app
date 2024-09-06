<template>
  <q-dialog persistent v-bind="$attrs" @hide="onHide">
    <q-card :style="{ width: '660px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn v-close-popup round dense flat icon="close" />
      </q-toolbar>
      <q-separator />
      <q-form class="q-pa-md q-gutter-y-sm">
        <q-input v-model="form.title" outlined placeholder="제목" />
        <q-select v-model="form.category" outlined :options="categories">
          <template v-if="!form.category" #selected>
            <span class="text-grey-7">카테고리를 선택하세요.</span>
          </template>
        </q-select>
        <q-input
          v-model="form.content"
          type="textarea"
          outlined
          placeholder="내용을 작성해주세요"
        />
        <q-input
          v-model="tagField"
          outlined
          placeholder="태그를 입력해주세요~! (입력 후 Enter)"
          prefix="#"
        />
        <q-chip color="teal" outline dense removable @remove="removeTag"
          >vuejs</q-chip
        >
      </q-form>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="취소하기" v-close-popup />
        <q-btn type="submit" flat label="저장하기" color="primary" />
      </q-card-actions>
    </q-card>
  </q-dialog>
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
import { getCategories } from 'src/services/category';
import { ref } from 'vue';

const form = ref(getInitialForm());
const tagField = ref('');

const categories = getCategories();

const removeTag = () => console.log('removeTag');

const onHide = () => {
  form.value = getInitialForm();
  tagField.value = '';
};
</script>

<style lang="scss" scoped></style>

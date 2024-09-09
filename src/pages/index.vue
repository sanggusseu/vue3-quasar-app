<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" />
      <section class="col-7 q-gutter-y-sm">
        <PostHeader />
        <PostList :items="posts" />
      </section>
      <PostRightBar class="col-3" @open-write-dialog="openWriteDialog" />
    </div>
    <PostWriteDialog v-model="postDialog" />
  </q-page>
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';
import PostLeftBar from './components/PostLeftBar.vue';
import PostHeader from './components/PostHeader.vue';
import PostRightBar from './components/PostRightBar.vue';
import { ref } from 'vue';
import PostWriteDialog from 'src/components/apps/post/PostWriteDialog.vue';
import { useAsyncState } from '@vueuse/core';
import { getPosts } from 'src/services';

const { state: posts } = useAsyncState(getPosts, [], {
  throwError: true,
});

const postDialog = ref(false);
const openWriteDialog = () => (postDialog.value = true);
</script>

<style lang="scss" scoped></style>

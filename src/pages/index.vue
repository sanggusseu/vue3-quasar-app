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

const posts = Array.from(Array(20), (_, index) => ({
  id: 'A' + index,
  title: 'Vue3 Firebase 강의',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestiae minima accusamus. Et vero repellendus sunt, facere, voluptatum id dignissimos repudiandae quas adipisci provident ipsa iusto qui eum, pariatur nostrum.',
  readCount: 1,
  commentCount: 2,
  likeCount: 3,
  bookmarkCount: 4,
  tags: ['html', 'css', 'javascript'],
  uid: 'uid',
  category: '카테고리' + index,
}));

const postDialog = ref(false);
const openWriteDialog = () => (postDialog.value = true);
</script>

<style lang="scss" scoped></style>

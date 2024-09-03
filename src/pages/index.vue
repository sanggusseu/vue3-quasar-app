<template>
  <q-page padding>
    <div class="text-h4">커뮤니티 목록</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <PostList :items="posts" />
    </section>
  </q-page>
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';

const posts = Array.from(Array(20), (_, index) => ({
  id: index,
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
</script>

<style lang="scss" scoped></style>

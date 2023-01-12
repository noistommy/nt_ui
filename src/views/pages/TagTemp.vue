<script setup>
import PageView from '@/views/PageView'

const title = '태그'
</script>

<template>
<PageView>
  <template #header>
    <div class="main-title">{{ title }}</div>
    <div class="section-tags">
      <span class="ga-tag label deepblue">gabia ui</span>
    </div>
  </template>
  <template #body>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">기본</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-tag label primary">기본 태그</div>
        <div class="ga-tag label secondary rect">사각 태그 :: Rect</div>
        <div class="ga-tag label lightgreen">
          <i class="fa fa-star"></i>
        </div>
        <div class="ga-tag label lightblue">
          <i class="fa fa-bird"></i>
        </div>
        <div class="ga-tag label yellow">
          <i class="fa fa-crown"></i>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">점 타입</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div v-for="item in ['primary', 'secondary', 'green', 'deeppurple']" :key="item" :class="item" class="ga-tag dot"></div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">선 타입</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div v-for="item in ['primary', 'secondary', 'green', 'deeppurple']" :key="item" :class="item" class="ga-tag line"></div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">아이콘 라벨</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-tag label deeppurple">
          <i class="icon left fa fa-tag"></i>
          태그
        </div>
        <div class="ga-tag label red rect">
          <i class="icon left fa fa-n"></i>
          신규
        </div>
        <div class="ga-tag label blue">
          <i class="icon left fa fa-user"></i>
          사용자
        </div>
        <div class="ga-tag label secondary rect">
          <i class="icon left fa fa-arrow-up"></i>
          업데이트
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">호버 효과</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-tags one-of-a-kind">
          <div v-for="item in ['primary', 'secondary', 'green', 'deeppurple']" :key="item" :class="item" class="ga-tag label">{{ item }}</div>
        </div>
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>

</style>
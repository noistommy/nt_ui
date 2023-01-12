<script setup>
import PageView from '@/views/PageView'
import { ref } from 'vue'

const selectedItem = ref(0)
const selectedItem1 = ref(0)

const title = '목록'
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
        <div class="ga-list">
          <div v-for="item in 5" :key="item" class="item">아이템 {{ item }}</div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">목록 스타일</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <h4>dot</h4>
          <div class="ga-list ul">
            <div v-for="item in 5" :key="item" class="item">아이템 {{ item }}</div>
          </div>
        </div>
        <div class="wrapper">
          <h4>hyphen</h4>
          <div class="ga-list ul hyphen">
            <div v-for="item in 5" :key="item" class="item">아이템 {{ item }}</div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">아이템 선택</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-list selection">
          <div v-for="(item, i) in 5" :key="item" :class="{active: i === selectedItem}" class="item" @click="selectedItem = i">아이템 {{ item }}</div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">구분하기</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-list selection bordered">
          <div v-for="(item, i) in 5" :key="item" :class="{active: i === selectedItem1}" class="item" @click="selectedItem1 = i">아이템 {{ item }}</div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">아이콘</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-list icon">
          <div v-for="item in 5" :key="item" class="item">
            <i class="list-icon icon fa" :class="`fa-circle-${item}`"></i>
            아이템 {{ item }}
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">이미지</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-list selection">
          <div v-for="item in 5" :key="item" class="item">
            <div class="item-img">
              <img src="" alt="" />
            </div>
            <div class="item-title">아이템 {{ item }}</div>
          </div>
        </div>
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>
.ga-list {
  max-width: 500px;
}
</style>
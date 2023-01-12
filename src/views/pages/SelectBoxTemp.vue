<script setup>
import PageView from '@/views/PageView'
import { ref } from 'vue'

const title = ref('Select Box')
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
            <div class="sub-title">기본 컴포넌트</div>
          </div>
        </div>
        <div class="section-body">
          <div class="ga-select-box">
            <select>
              <option value="">선택</option>
              <option v-for="item in [1, 2, 3, 4, 5]" :key="item" :value="item">{{ item }}번 옵션</option>
            </select>
            <i class="icon fa fa-chevron-down"></i>
          </div>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">축소 :: Compact</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <div class="ga-select-box compact">
            <select>
              <option value="">선택</option>
              <option v-for="item in [1, 2, 3, 4, 5]" :key="item" :value="item">{{ item }}번 옵션</option>
            </select>
            <i class="icon fa fa-chevron-down"></i>
          </div>
        </div>
      </section>
    </template>
  </PageView>
</template>

<style scoped>

</style>
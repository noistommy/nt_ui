<script setup>
import PageView from '@/views/PageView'
import { ref } from 'vue'

const title = '체크박스 / 라디오'

const resultRadio = ref('라디오 1')
</script>

<template>
<PageView>
  <template #header>
    <div class="main-title">{{ title }}</div>
    <div class="section-tags">
      <span class="ga-tag label deepblue">gabia ui</span>
      <span class="ga-tag label deeppurple">vue 3.0</span>
    </div>
  </template>
  <template #body>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">체크박스</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <template v-for="item in [1, 2, 3]" :key="item">
          <GaCheckbox :label="`체크박스${ item }`" />
        </template>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">라벨 없음</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <template v-for="item in [1, 2, 3]" :key="item">
          <GaCheckbox />
        </template>
        <GaCheckbox type="radio" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">버튼 타입 : 라디오</h3>
          <div class="sub-title">props: type:string</div>
        </div>
      </div>
      <div class="section-body">
        <template v-for="item in [1, 2, 3]" :key="item">
          <GaCheckbox :label="`체크박스${ item }`" type="radio" />
        </template>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">라디오</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <template v-for="item in [1, 2, 3]" :key="item">
          <GaRadio :label="`라디오 ${ item }`" v-model="resultRadio" />
        </template>
      </div>
      <div class="ga-alert">
        결과값: {{ resultRadio }}
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>

</style>
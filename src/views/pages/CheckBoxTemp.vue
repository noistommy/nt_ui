<script setup>
import PageView from '@/views/PageView'
import { ref } from 'vue'

const title = '체크박스 / 라디오'

const resultcheck = ref(true)
const resultRadio = ref('라디오 1')
</script>

<template>
<PageView>
  <template #header>
    <div class="main-title">{{ title }}</div>
    <div class="section-tags">
      <span class="ga-tag label teal">ga-ui-css</span>
      <span class="ga-tag label purple">vue 3.0</span>
    </div>
  </template>
  <template #usage>
    <div class="ga-card attached">
      <h3>체크박스 / 라디오</h3>
      <div class="footer">
        <div class="ga-list code">
          <div class="item secondary-text">// Checkbox</div>
          <div class="item">const checkData = true || false</div>
          <div class="item" v-text="`<GaCheckbox :label='라벨' v-model='checkData' /> // 기본`"></div>
          <div class="item" v-text="`<GaCheckbox v-model='checkData' /> //라벨 없음`"></div>
          <div class="item" v-text="`<GaCheckbox :label='라벨' type='radio' v-model='checkData' /> //라디오 버튼 타입`"></div>
          <div class="item  secondary-text">// Radio</div>
          <div class="item">const checkData = 선택된 아이템 라벨</div>
          <div class="item" v-text="`<GaRadio :label='라벨' v-model='checkData' /> // 기본`"></div>
        </div>
      </div>
    </div>
  </template>
  <template #body>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">체크박스</h3>
          <div class="sub-title">{{ resultcheck ? 'true' : 'false'}}</div>
        </div>
      </div>
      <div class="section-body">
        <template v-for="item in [1, 2, 3]" :key="item">
          <GaCheckbox :label="`체크박스${ item }`" />
        </template>
        <GaCheckbox :label="`체크박스4`" v-model="resultcheck" />
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
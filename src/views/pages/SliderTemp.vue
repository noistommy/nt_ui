<script setup>
import PageView from '@/views/PageView'
import {COLOR_PALETTE} from "@/resource";
import { ref } from 'vue'

const sliderValue = ref(30)
const setColor = ref('purple')

const title = '슬라이더'
const colors = COLOR_PALETTE

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
  <template #body>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">기본</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <GaSlider v-model="sliderValue" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">사용자 범위 설정</h3>
          <div class="sub-title">Props: maxValue: number [default: 100]</div>
        </div>
      </div>
      <div class="section-body">
        <GaSlider v-model="sliderValue" :max-value="60" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">범위 표시</h3>
          <div class="sub-title">Props: maxValue: number [default: 100]</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <GaSlider v-model="sliderValue" :show-label="true" />
        </div>
        <div class="wrapper">
          <GaSlider v-model="sliderValue" :show-value="true" />
        </div>
        <div class="wrapper">
          <GaSlider v-model="sliderValue" :show-label="true" :show-value="true" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">툴팁 표시 설정</h3>
          <div class="sub-title">Props: showTooltip: boolean [default: false]</div>
        </div>
      </div>
      <div class="section-body">
        <GaSlider v-model="sliderValue" :show-tooltip="true" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">사용자 단위 설정</h3>
          <div class="sub-title">Props: unitText: string | object</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <GaSlider v-model="sliderValue" :show-label="true" :show-value="true" :max-value="12" unit-text="시" />
        </div>
        <div class="wrapper">
          <GaSlider v-model="sliderValue" :show-label="true" :show-value="true" :max-value="60" unit-text="분" />
        </div>
        <div class="wrapper">
          <GaSlider v-model="sliderValue" :show-label="true" :show-value="true" :max-value="60" unit-text="초" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">비활성 설정</h3>
          <div class="sub-title">Props: disabled: boolean</div>
        </div>
      </div>
      <div class="section-body">
        <GaSlider v-model="sliderValue" :show-tooltip="true" :disabled="true" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">스텝 설정</h3>
          <div class="sub-title">Props: unitText: string | object</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <GaSlider v-model="sliderValue" :show-value="true" :show-step="true" :step-size="1" :max-value="12" unit-text="시" />
        </div>
        <div class="wrapper">
          <GaSlider v-model="sliderValue" :show-value="true" :show-step="true" :step-size="5" :max-value="60" unit-text="분" />
        </div>
        <div class="wrapper">
          <GaSlider v-model="sliderValue" :show-value="true" :show-step="true" :step-size="10" :max-value="60" unit-text="초" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">사용자 색상</h3>
          <div class="sub-title">Props: result-color: string</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <h5>색상 선택</h5>
          <div class="ga-tag dot" v-for="item in colors" :key="item.name" :class="item.name" @click="setColor = item.name"></div>
        </div>
        <GaSlider v-model="sliderValue" :result-color="setColor" />
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>

</style>
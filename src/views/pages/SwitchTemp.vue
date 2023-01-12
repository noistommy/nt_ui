<script setup>
import PageView from '@/views/PageView'
import { ref } from 'vue'

const title = '스위치'

const switchValue = ref(true)
const switchValueT = ref('Y')
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
          <h3 class="title">기본</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <GaSwitch />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">둥근 스위치</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <GaSwitch :round="true" />
        <GaSwitch :round="true" :inside="true" />
        <GaSwitch :round="true" type="button" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">스위치 타입</h3>
          <div class="sub-title">props: inside:boolean</div>
        </div>
      </div>
      <div class="section-body">
        <GaSwitch />
        <GaSwitch :inside="true" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">버튼 타입</h3>
          <div class="sub-title">props: type:string</div>
        </div>
      </div>
      <div class="section-body">
        <GaSwitch type="button" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">버튼 타입 - 결과 사용자 지정</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <GaSwitch v-model="switchValueT" type="button" on-value="Y" off-value="N" />
        결과: {{ switchValueT }}
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">버튼 타입 - 사용자 라벨 지정</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <GaSwitch v-model="switchValue" type="button">
          <template v-slot:on>사용</template>
          <template v-slot:off>사용안함</template>
        </GaSwitch>
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>

</style>
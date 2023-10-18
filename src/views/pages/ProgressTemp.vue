<script setup>
import PageView from '@/views/PageView'
import { ref } from 'vue'

const title = '프로그래스바'
const colors = ['mint', 'green', 'lime', 'citron']
const progressData = [
  {
    text: '자는중',
    textAlign: 'center',
    ratio: 20,
    progress: 100,
    //backgroundClass: 'red'
  },
  {
    text: '일어나는중',
    textAlign: 'center',
    ratio: 20,
    progress: 100,
    //backgroundClass: 'orange'
  },
  {
    text: '씻는중',
    textAlign: 'center',
    ratio: 50,
    progress: 100,
    //backgroundClass: 'yellow'
  },
  {
    text: '가는중',
    ratio: 10,
    progress: 100,
    //backgroundClass: 'lightgreen'
  }
]
const exDataList = [
  {
    text: '40h',
    textAlign: 'bottom-right',
    ratio: 40*100/52,
    progress: 100,
    backgroundClass: 'secondary'
  },
  {
    text: '52h',
    textAlign: 'bottom-right',
    ratio: 100 - (40*100/52),
    progress: 100,
    backgroundClass: 'secondary'
  },
]
const gauge = ref({
  ratio: 50,
  background: 'primary'
})
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
        <GaProgress title="제목" :data="progressData" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">둥근 게이지</h3>
          <div class="sub-title">Props: round: boolean</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <h5>roundType: list</h5>
          <GaProgress :data="progressData" :round="true" round-type="list" />
        </div>
        <div class="wrapper">
          <h5>roundType: item</h5>
          <GaProgress :data="progressData" :round="true" round-type="item" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">테두리</h3>
          <div class="sub-title">Props: isBorder: boolean</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <GaProgress :data="progressData" :is-border="true" />
        </div>
        <div class="wrapper">
          <GaProgress :data="progressData" :is-border="true" :round="true" round-type="item" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">두께 조절</h3>
          <div class="sub-title">Props: thickSize: number</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <h5>10px</h5>
          <GaProgress :data="progressData" :thick-size="10" />
        </div>
        <div class="wrapper">
          <h5>20px(기본)</h5>
          <GaProgress :data="progressData" :thick-size="20" />
        </div>
        <div class="wrapper">
          <h5>30px</h5>
          <GaProgress :data="progressData" :thick-size="30" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">범주 표시</h3>
          <div class="sub-title">Props: useScale: boolean</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <GaProgress :data="progressData" :use-scale="true" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">범주 타입</h3>
          <div class="sub-title">Props: scaleType: string</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <h5>기본</h5>
          <GaProgress :data="progressData" :use-scale="true" />
        </div>
        <div class="wrapper">
          <h5>round</h5>
          <GaProgress :data="progressData" :use-scale="true" scale-type="round" />
        </div>
        <div class="wrapper">
          <h5>circle</h5>
          <GaProgress :data="progressData" :use-scale="true" scale-type="circle" />
        </div>
        <div class="wrapper">
          <h5>line</h5>
          <GaProgress :data="progressData" :use-scale="true" scale-type="line" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">범주 위치</h3>
          <div class="sub-title">Props: scaleDirection: string</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <h5>round</h5>
          <GaProgress :data="progressData" :use-scale="true" scale-direction="start" />
        </div>
        <div class="wrapper">
          <h5>circle</h5>
          <GaProgress :data="progressData" :use-scale="true" scale-direction="center" />
        </div>
        <div class="wrapper">
          <h5>line</h5>
          <GaProgress :data="progressData" :use-scale="true" scale-direction="end" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">텍스트 표시</h3>
          <div class="sub-title">Props: show{Title | Value}: boolean</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <h5>아이템 이름</h5>
          <GaProgress :data="progressData" :show-title="true" />
        </div>
        <div class="wrapper">
          <h5>아이템 값</h5>
          <GaProgress :data="progressData" :show-value="true" />
        </div>
        <div class="wrapper">
          <h5>이름 우선 표시</h5>
          <GaProgress :data="progressData" :show-title="true" :show-value="true" />
        </div>
        <div class="wrapper">
          <h5>텍스트 스타일</h5>
          <GaProgress :data="progressData" :show-title="true" :value-style="{ color: '#ffffff', fontWeight: 900 }" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">텍스트 위치</h3>
          <div class="sub-title">Props: valuePos: string</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <GaProgress title="Center(기본)" :data="progressData" :show-title="true" />
          <GaProgress title="Left" :data="progressData" :show-title="true" value-pos="left" />
          <GaProgress title="Right" :data="progressData" :show-title="true" value-pos="right" />
          <GaProgress title="Top-Center" :data="progressData" :show-title="true" value-pos="top-center" />
          <GaProgress title="Top-Left" :data="progressData" :show-value="true" value-pos="top-left" />
          <GaProgress title="Top-Right" :data="progressData" :show-value="true" value-pos="top-right" />
          <GaProgress title="Bottom-Center" :data="progressData" :show-title="true" value-pos="bottom-center" />
          <GaProgress title="Bottom-Left" :data="progressData" :show-value="true" value-pos="bottom-left" />
          <GaProgress title="Bottom-Right" :data="progressData" :show-value="true" value-pos="bottom-right" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">사용자 제목 스타일 (slot)</h3>
          <div class="sub-title">Use Slot</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <GaProgress title="none" :data="progressData" >
            <template #title>
              <h1 class="ga-purple-text">사용자 지정 제목</h1>
            </template>
          </GaProgress>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">사용자 색상 적용</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <GaProgress :data="progressData" :color-set="colors" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">사용자 데이터 적용</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input unit" data-unit="%">
          <input type="number" min="0" max="100" placeholder="데이터 입력" v-model="gauge.ratio">
        </div>
        <div class="wrapper">
          <GaProgress :data="exDataList" :gauge-data="gauge" :show-title="true" :is-border="true" :round="true" :value-pos="`bottom-right`" :value-style="{color: '#999', fontSize: '1.2em'}" />
        </div>
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>

</style>
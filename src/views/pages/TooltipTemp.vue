<script setup>
import PageView from '@/views/PageView'

const title = '툴팁'
const htmlContents = {
  contents: `<div class="bold ga-lightblue-text"><i class="small fa fa-toolbox"></i> 테스트 툴팁 : 나랏말싸미 듕국에 달아 문자와 서로 사맛디 아니할세.</div>`
}
</script>

<template>
<PageView>
  <template #header>
    <div class="main-title">{{ title }}</div>
    <div class="section-tags">
      <span class="ga-tag label teal">ga-ui-css</span>
      <span class="ga-tag label purple">vue 3.0</span>
      <span class="ga-tag label blue">directive</span>
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
        <button class="ga-button" v-ga-tooltip="`테스트 툴팁입니다`">툴팁</button>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">컨텐츠 타입</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <button class="ga-button" v-ga-tooltip="`String 타입 컨텐츠`">내용</button>
        <button class="ga-button" v-ga-tooltip="{ contents: 'Object 타입 컨텐츠'}">{ contents: 내용 }</button>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">Html 컨텐츠</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <button class="ga-button" v-ga-tooltip="htmlContents">String</button>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">방향 지정</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <button class="ga-button" v-ga-tooltip:top="`위로 생성`">Top</button>
        <button class="ga-button" v-ga-tooltip:bottom="`아래로 생성`">Bottom</button>
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>

</style>
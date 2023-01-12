<script setup>
import PageView from '@/views/PageView'
import { reactive } from 'vue'

const currentPage = reactive(new Array(6).fill(1))

function onPageChange(payload, index) {
  currentPage[index] = payload
}

const title = '페이지네이션'
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
        <GaPagination :id="0" :length="5" :current-page="currentPage[0]" :last-page="10" @page-change="onPageChange" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">위치 지정</h3>
          <div class="sub-title">Props: justify:string [left | center | right]</div>
        </div>
      </div>
      <div class="section-body">
        <GaPagination :id="1" :length="10" justify="left" :current-page="currentPage[1]" :last-page="10" @page-change="onPageChange" />
        <GaPagination :id="1" :length="10" justify="center" :current-page="currentPage[1]" :last-page="10" @page-change="onPageChange" />
        <GaPagination :id="1" :length="10" justify="right" :current-page="currentPage[1]" :last-page="10" @page-change="onPageChange" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">표시할 페이지 지정</h3>
          <div class="sub-title"> 10개 까지 표시 됨</div>
        </div>
      </div>
      <div class="section-body">
        <GaPagination :id="2" :length="10" justify="left" :current-page="currentPage[2]" :last-page="50" @page-change="onPageChange" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">전체 페이지 지정(마지막 페이지 지정)</h3>
          <div class="sub-title">총 50 페이지 설정</div>
        </div>
      </div>
      <div class="section-body">
        <GaPagination :id="3" :length="10" justify="left" :current-page="currentPage[3]" :last-page="50" @page-change="onPageChange" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">페이지 모드</h3>
          <div class="sub-title">Props: type:string </div>
        </div>
      </div>
      <div class="section-body">
        <GaPagination :id="4" type="page" justify="left" :current-page="currentPage[4]" :last-page="50" @page-change="onPageChange" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">버튼 타입</h3>
          <div class="sub-title">Props: border:boolean </div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <GaPagination :id="5" :border="true" justify="left" :current-page="currentPage[5]" :last-page="10" @page-change="onPageChange" />
        </div>
        <div class="wrapper">
          <GaPagination :id="5" :border="true" justify="left" type="page" :current-page="currentPage[5]" :last-page="10" @page-change="onPageChange" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">둥근 버튼</h3>
          <div class="sub-title">Props: circle:boolean </div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <GaPagination :id="6" :circle="true" :border="true" justify="left" :current-page="currentPage[6]" :last-page="10" @page-change="onPageChange" />
        </div>
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>

</style>
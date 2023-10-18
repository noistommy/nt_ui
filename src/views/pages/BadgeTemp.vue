<script setup>
import PageView from '@/views/PageView'
import { COLOR_PALETTE } from "@/resource";

const colors = COLOR_PALETTE
const title = '뱃지'
</script>

<template>
<PageView>
  <template #header>
    <div class="main-title">{{ title }}</div>
    <div class="section-tags">
      <span class="ga-tag label teal">ga-ui-css</span>
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
        <button class="ga-button">
          컨텐츠
          <span class="ga-badge float">1</span>
        </button>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">타입</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <button class="ga-button">
          Float 타입
          <span class="ga-badge float">1</span>
        </button>
        <button class="ga-button">
          Mark 타입
          <span class="ga-badge mark red"></span>
        </button>
        <button class="ga-button icon circle">
          <i class="fa fa-bird"></i>
          <span class="ga-badge float success">1</span>
        </button>
        <button class="ga-button icon circle">
          <i class="fa fa-bird"></i>
          <span class="ga-badge mark red"></span>
        </button>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">그림자</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <button class="ga-button">
          그림자 있음
          <span class="ga-badge float primary shadow">O</span>
        </button>
        <button class="ga-button">
          그림자 없음
          <span class="ga-badge float secondary">X</span>
        </button>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">정렬</h3>
          <div class="sub-title">[ Left || Center || Right ]</div>
        </div>
      </div>
      <div class="section-body">
        <button class="ga-button">
          왼쪽 기준 정렬
          <span class="ga-badge float secondary shadow align-left">30000</span>
        </button>
        <button class="ga-button">
          가운데 기준 정렬
          <span class="ga-badge float secondary shadow align-center">30000</span>
        </button>
        <button class="ga-button">
          오른쪽 기준 정렬
          <span class="ga-badge float secondary shadow align-right">30000</span>
        </button>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">색상</h3>
          <div class="sub-title">
            <span v-for="item in colors" :key="item.name" :class="item.name" class="ga-tag dot" v-ga-tooltip="item.text"></span>
          </div>
        </div>
      </div>
      <div class="section-body">
        <button v-for="item in colors" :key="item.name" class="ga-button">
          {{ item.text }}
          <span class="ga-badge float shadow align-left" :class="item.name">
            <i class="fa fa-droplet"></i>
          </span>
        </button>
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>

</style>
<script setup>
import PageView from '@/views/PageView'
import { COLOR_PALETTE } from "@/resource";

const title = '색상'
const pColors = COLOR_PALETTE


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
          <h3 class="title">브랜드</h3>
          <div class="sub-title">Primary & Secondary</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <div class="color-chip primary">
            <div class="label">메인</div>
          </div>
          <div class="color-chip primary dark">
            <div class="label">어두운 메인</div>
          </div>
          <div class="color-chip primary darker">
            <div class="label">더 어두운 메인</div>
          </div>
        </div>
        <div class="wrapper">
          <div class="color-chip secondary">
            <div class="label">강조</div>
          </div>
          <div class="color-chip secondary dark">
            <div class="label">어두운 강조</div>
          </div>
          <div class="color-chip secondary darker">
            <div class="label">더 어두운 강조</div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">상태</h3>
          <div class="sub-title">Status</div>
        </div>
      </div>
      <div class="section-body">
        <div class="color-chip ga-success">
          <div class="label">성공</div>
        </div>
        <div class="color-chip ga-info">
          <div class="label">정보</div>
        </div>
        <div class="color-chip ga-danger">
          <div class="label">위험</div>
        </div>
        <div class="color-chip ga-attention">
          <div class="label">경고</div>
        </div>
        <div class="color-chip ga-importance">
          <div class="label">중요</div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">바탕색</h3>
          <div class="sub-title">Surface</div>
        </div>
      </div>
      <div class="section-body">
        <div class="color-chip surface1 text">
          <div class="label">바탕 1</div>
        </div>
        <div class="color-chip surface2 text">
          <div class="label">바탕 2</div>
        </div>
        <div class="color-chip surface3 text">
          <div class="label">바탕 3</div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">그래이 스케일</h3>
          <div class="sub-title">Grayscale</div>
        </div>
      </div>
      <div class="section-body">
        <div class="color-chip white">
          <div class="label">흰</div>
        </div>
        <div class="color-chip gray light">
          <div class="label">밝은 회색</div>
        </div>
        <div class="color-chip gray">
          <div class="label">회색</div>
        </div>
        <div class="color-chip gray dark">
          <div class="label">짙은 회색</div>
        </div>
        <div class="color-chip black">
          <div class="label">검정</div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">색상 타입</h3>
          <div class="sub-title">Color Type</div>
        </div>
      </div>
      <div class="section-body">
        <div class="color-chip ga-success text">
          <div class="label">기본</div>
        </div>
        <div class="color-chip ga-success-text text">
          <div class="label">글자색</div>
        </div>
        <div class="color-chip ga-success-bg text">
          <div class="label">배경</div>
        </div>
        <div class="color-chip ga-success-border text">
          <div class="label">테두리</div>
        </div>
      </div>
      <div class="section-body">
        <div class="color-chip primary text">
          <div class="label">기본</div>
        </div>
        <div class="color-chip primary-text text">
          <div class="label">글자색</div>
        </div>
        <div class="color-chip primary-bg text">
          <div class="label">배경</div>
        </div>
        <div class="color-chip primary-border text">
          <div class="label">테두리</div>
        </div>
      </div>
      <div class="section-body">
        <div class="color-chip secondary text">
          <div class="label">기본</div>
        </div>
        <div class="color-chip secondary-text text">
          <div class="label">글자색</div>
        </div>
        <div class="color-chip secondary-bg text">
          <div class="label">배경</div>
        </div>
        <div class="color-chip secondary-border text">
          <div class="label">테두리</div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">색상표</h3>
          <div class="sub-title">Color Palette</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <h5>표준 색상</h5>
          <div
              v-for="color in pColors"
              :key="color.name"
              class="color-chip"
              :class="`ga-${color.name}`"
              v-ga-tooltip="color.name"
          >
            <div class="label">{{ color.label }}</div>
          </div>
        </div>
        <div class="wrapper">
          <h5>밝은 색상</h5>
          <div
              v-for="color in pColors"
              :key="color.name"
              class="color-chip light"
              :class="`ga-${color.name}`"
              v-ga-tooltip="color.name"
          >
            <div class="label">{{ color.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </template>
</PageView>
</template>

<style lang="scss" scoped>
.color-chip {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  padding: 10px;
  border-radius: 50%;
  margin: 15px;
  border: 1px solid transparent;
  .label {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 5px;
    color: #909090;
    text-align: center;
    width: 100%;
    word-break: keep-all;
  }
  &.text {
    &:after {
      content: '텍스트';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: inherit;
      font-size: 0.8em;
    }
  }
}
</style>
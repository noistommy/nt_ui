<script setup>
import PageView from '@/views/PageView'

const title = '태그'
// const colors = ['red', 'orange', 'yellow', 'lightgreen', 'green', 'lightblue', 'deepblue', 'deeppurple', 'purple', 'brown', 'gray']
const status = ['success', 'danger', 'info', 'attention', 'importance']

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
        <div class="ga-message">
          // 내용
        </div>
        <div class="ga-message">
          <div class="main-contents bold">제목</div>
          <div class="sub-contents small">내용을 표시합니다.</div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">상태별</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-messages grid divide-5">
          <template v-for="item in status" :key="item">
            <div class="ga-message" :class="item">
              <div class="main-contents bold">{{ item }}</div>
              <div class="sub-contents small">{{ item }}내용을 표시합니다.</div>
            </div>
          </template>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">그룹</h3>
          <div class="sub-title">selected, normal, disabled, hover</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-messages list">
          <div class="ga-message selected">
            <div class="main-contents bold">선택된 메세지</div>
            <div class="sub-contents small">내용을 표시합니다.</div>
          </div>
          <div class="ga-message">
            <div class="main-contents bold">기본 상태</div>
            <div class="sub-contents small">내용을 표시합니다.</div>
          </div>
          <div class="ga-message disabled">
            <div class="main-contents bold">비활성 된 메세지</div>
            <div class="sub-contents small">내용을 표시합니다.</div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">그룹 + 그리드</h3>
          <div class="sub-title">GaGrid 시스템 참고</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-messages grid">
          <div class="ga-message column col-2 selected">
            <div class="main-contents bold">제목</div>
            <div class="sub-contents small">내용을 표시합니다.</div>
          </div>
          <div class="ga-message column col-4">
            <div class="main-contents bold">제목</div>
            <div class="sub-contents small">내용을 표시합니다.</div>
          </div>
          <div class="ga-message column col-2 disabled">
            <div class="main-contents bold">제목</div>
            <div class="sub-contents small">내용을 표시합니다.</div>
          </div>
        </div>
      </div>
    </section>
  </template>
</PageView>
</template>

<style lang="scss" scoped>

</style>
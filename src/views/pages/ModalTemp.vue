<script setup>
import PageView from '@/views/PageView'
import TestModal from '@/components/TestModal'
import { reactive, getCurrentInstance } from 'vue'

const app = getCurrentInstance()
const gaModal = app.appContext.config.globalProperties.$gaModal

const modalProps = {
  title: '모달 테스트',
  description: '모달 테스트 입니다.',
  pText: '저장'
}
const modalOption = reactive({
  clickToClose: false,
  escapeToClose: false
})

const title = '모달'
function showModal() {
  gaModal.show({
    comp: TestModal,
    props: modalProps,
    options: modalOption
  })
}
function showConfirm() {
  gaModal.show({
    comp: 'confirm',
    props: modalProps,
    options: modalOption
  })
}
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
      <h3>모달</h3>
      <div class="footer">
      </div>
    </div>
  </template>
  <template #body>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">테스트</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="setting-panel wrapper ga-teal light">
          <h2>설정</h2>
          <div class="divide"></div>
          <div class="ga-grid left-side">
            <div class="column">Use 'Click to Close' :: {{ modalOption.clickToClose ? '사용' : '사용 안함' }}</div>
            <div class="column col-2">
              <GaSwitch v-model="modalOption.clickToClose" :inside="true" :round="true" color="purple" />
            </div>
          </div>
          <div class="ga-grid left-side">
            <div class="column">Use 'Press Escape Button to Close' :: {{ modalOption.escapeToClose ? '사용' : '사용 안함'}}</div>
            <div class="column col-2">
              <GaSwitch v-model="modalOption.escapeToClose" :inside="true" :round="true" color="purple" />
            </div>
          </div>
        </div>
        <button class="ga-button purple outline" @click="showModal">모달 열기</button>
        <button class="ga-button purple outline" @click="showConfirm">컴펌 열기</button>
      </div>
    </section>
  </template>
</PageView>
</template>

<style lang="scss" scoped>
.setting-panel {
  width: 100%;
  padding: 20px;
}
.divide {
  width: 100%;
  border-top: 1px solid #d6d6d6;
  margin: 1em 0 2em;
}

</style>
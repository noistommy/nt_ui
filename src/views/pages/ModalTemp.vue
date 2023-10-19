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

<template >
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
      <h3>모달 사용법 및 설정</h3>
      <div class="footer">
        <div class="ga-list code">
          <div class="item comment">// 프로젝트 전역 모듈로 등록</div>
          <div class="item comment">// main.js</div>
          <div class="item">import GaModal from package_path/GaTeleport</div>
          <div class="item">const app = createApp(App)</div>
          <div class="item">app.use(GaModal, {</div>
          <div class="item depth-1 comment">// option 1. 백그라운드 클릭으로 닫기  설정</div>
          <div class="item depth-1">clickToClose: true | false,</div>
          <div class="item depth-1 comment">// option 2. ESC 키로 닫기  설정</div>
          <div class="item depth-1">escapeToClose: true | false</div>
          <div class="item">})</div>
          <div class="item"></div>
          <div class="item comment">// 실행</div>
          <div class="item comment">// event 발생 시</div>
          <div class="item comment">// this.$gaModal({ comp: component, props: props, options: options } </div>
          <div class="item comment">//예제</div>
          <div class="item">this.$gaModal({</div>
          <div class="item depth-1">comp: ModalComponent 또는 'confirm',</div>
          <div class="item depth-1">props: {</div>
          <div class="item depth-2">title: '모달 제목', <span class="comment">// modal header text</span></div>
          <div class="item depth-2">description: '모달 내용',<span class="comment">// modal body text</span>ㅍ</div>
          <div class="item depth-2">pText: '저장',<span class="comment">// 실행 버튼 텍스트</span></div>
          <div class="item depth-2">nText: '취소',<span class="comment">// 취소 / 닫기 버튼 텍스트</span></div>
          <div class="item depth-1">},</div>
          <div class="item depth-1">options: {</div>
          <div class="item depth-2">clickToClose: true,</div>
          <div class="item depth-2">escapeToClose: true,</div>
          <div class="item depth-1">}</div>
          <div class="item">})</div>
        </div>
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
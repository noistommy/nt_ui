<script setup>
import PageView from '@/views/PageView'
import { ref, reactive, computed, getCurrentInstance } from 'vue'
import {COLOR_PALETTE} from "@/resource";

const brand = [
  { name: 'primary', title: '메인' },
  { name: 'secondary', title: '강조' },
  { name: 'success', title: '성공' },
  { name: 'danger', title: '위험' },
  { name: 'info', title: '정보' },
  { name: 'attention', title: '주의' },
  { name: 'importance', title: '중요' }
]

//
const colors = COLOR_PALETTE
const theme = [
  { name: '', title: '기본' },
  { name: 'light', title: '타입 1' },
  { name: 'icon', title: '타입 2' },
  { name: 'icon-bg', title: '타입 3' },
  { name: 'line', title: '타입 4' }
]

const position = [
  { name: 'top-left', title: '상단 왼쪽' },
  { name: 'top-center', title: '상단 중앙' },
  { name: 'top-right', title: '상단 오른쪽' },
  { name: 'bottom-left', title: '하단 왼쪽' },
  { name: 'bottom-center', title: '하단 중앙' },
  { name: 'bottom-right', title: '하단 오른쪽' },
  { name: 'top-full-width', title: '상단 전체' },
  { name: 'bottom-full-width', title: '하단 전체' },
]

const app = getCurrentInstance()
const toast = app.appContext.config.globalProperties.$gaToast

const activeColor = ref('primary')
const toastOption = reactive({
  round: false,
  useTitle: true,
  useIcon: true,
  closeButton: true,
  theme: '',
  position: 'top-right',
  displayOnTop: true,
  snackbar: false,
  freeze: false,
  timeout: 5000
})

const toastContents = computed(() => {
  return {
    title: activeColor.value.toUpperCase(),
    description: `this is ${activeColor.value} Toast Test`
  }
})
const title = 'vue-nt-toast'

function showToast() {
  toast.show(activeColor.value, toastContents.value, toastOption)
}
function setTheme(value) {
  toastOption.theme = value
}
function setPosition(value) {
  toastOption.position = value
}

function selectRandomNum(limit) {
  return parseInt(Math.random() * 100) % Number(limit)
}

function randomShow() {
  activeColor.value = brand[selectRandomNum(brand.length)].name
  toastOption.theme = theme[selectRandomNum(theme.length)].name
  showToast()
}

function startShow() {
  setInterval(() => randomShow(), 2000)
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
  <template #body>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">테스트</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="setting-panel wrapper ga-cyan light">
          <h2>설정</h2>
          <div class="divide"></div>
          <div class="ga-grid divide-2">
            <div class="column">
              <div class="ga-grid">
                <div class="column col-10 bold">제목 사용 여부</div>
                <div class="column col-2">
                  <GaSwitch v-model="toastOption.useTitle" :inside="true" :round="true" color="blue" />
                </div>
                <div class="column col-10 bold">아이콘 사용 여부</div>
                <div class="column col-2">
                  <GaSwitch v-model="toastOption.useIcon" :inside="true" :round="true" color="blue" />
                </div>
                <div class="column col-10 bold">둥근 모서리 사용 여부</div>
                <div class="column col-2">
                  <GaSwitch v-model="toastOption.round" :disabled="true" :inside="true" :round="true" color="blue" />
                </div>
                <div class="column col-10 bold">닫기 버튼 사용 여부</div>
                <div class="column col-2">
                  <GaSwitch v-model="toastOption.closeButton" :inside="true" :round="true" color="blue" />
                </div>
                <div class="column col-10 bold">상단부터 생성</div>
                <div class="column col-2">
                  <GaSwitch v-model="toastOption.displayOnTop" :inside="true" :round="true" color="blue" />
                </div>
                <div class="column col-10 bold">스넥바 모드</div>
                <div class="column col-2">
                  <GaSwitch v-model="toastOption.snackbar" :inside="true" :round="true" color="blue" />
                </div>
                <div class="column col-10 bold">자동 삭제 해제</div>
                <div class="column col-2">
                  <GaSwitch v-model="toastOption.freeze" :inside="true" :round="true" color="blue" />
                </div>
              </div>
            </div>
            <div class="column">
              <h5>스타일</h5>
              <div class="ga-buttons outline">
                <button class="ga-button" v-for="th in theme" :key="th.name" :class="{ blue: th.name === toastOption.theme }" @click="setTheme(th.name)">{{ th.title }}</button>
              </div>
              <div class="divide"></div>
              <h5>상태 / 색상</h5>
              <div class="ga-tag dot" v-for="t in brand" :key="t.name" :class="t.name" @click="activeColor=t.name"></div>
              <div class="ga-tag dot" v-for="t in colors" :key="t.name" :class="t.name" @click="activeColor=t.name"></div>
              <div class="divide"></div>
              <h5>유지 시간</h5>
              <div class="ga-input labeled">
                <input type="text" v-model="toastOption.timeout" />
                <label class="outline">ms</label>
              </div>
            </div>
          </div>
          <div class="divide"></div>
          <h5>위치 설정</h5>
          <div class="ga-buttons outline">
            <button class="ga-button" v-for="ps in position" :key="ps.name" :class="{ blue: ps.name === toastOption.position }" @click="setPosition(ps.name)">{{ ps.title }}</button>
          </div>
          <div class="divide"></div>
          <h5>내용 입력</h5>
          <div class="ga-grid right-side">
            <div class="column col-2">
              <div class="ga-input fluid">
                <input type="text" v-model="toastContents.title" placeholder="제목">
              </div>
            </div>
            <div class="column">
              <div class="ga-input fluid">
                <input type="text" v-model="toastContents.description" placeholder="제목">
              </div>
            </div>
          </div>
          <div class="divide"></div>
          <div class="wrapper">
            <button class="ga-button" :class="activeColor" @click="showToast">테스트 실행</button>
            <button class="ga-button" :class="activeColor" @click="startShow">랜덤 테스트 실행</button>
          </div>
        </div>
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
  margin: 1em 0;
}
</style>
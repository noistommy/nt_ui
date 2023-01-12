<script setup>
import PageView from '@/views/PageView'
import { ref } from 'vue'

const title = ref('버튼')
const brand = [
  { name: 'primary', title: '메인' },
  { name: 'secondary', title: '강조' }
]
const status = [
  { name: 'success', title: '성공' },
  { name: 'danger', title: '위험' },
  { name: 'info', title: '정보' },
  { name: 'attention', title: '주의' },
  { name: 'importance', title: '중요' }
]

const sizeType = [ 'tiny', 'small', 'medium', 'large', 'huge', 'massive']
const colors = ['red', 'orange', 'yellow', 'lightgreen', 'green', 'lightblue', 'deepblue', 'deeppurple', 'purple', 'brown', 'gray']

const buttonGroup = ['재생', '정지', '일시정지', '재시작', '종료']
const selectedButton = ref('재생')
const selectedButton1 = ref('재생')
const selectedButton2 = ref('재생')
</script>

<template>
  <PageView>
    <template #header>
      <div class="main-title">{{ title }}</div>
      <div class="section-tags">
        <span class="ga-tag label deepblue">gabia ui</span>
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
          <button class="ga-button">기본 버튼</button>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">엘리먼트 타입</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <button class="ga-button">BUTTON 태그</button>
          <div class="ga-button">클레스 속성</div>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">브랜드 및 상태</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <button v-for="item in brand" :key="item.name" :class="item.name" class="ga-button">{{ item.title }}</button>
          <button v-for="item in status" :key="item.name" :class="item.name" class="ga-button">{{ item.title }}</button>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">비활성</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <button class="ga-button disabled">비활성 (class)</button>
          <button class="ga-button" disabled>비활성 (attribute)</button>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">테두리</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <button v-for="(item, i) in ['', 'primary', 'success', 'circle']" :key="item" :class="item" class="ga-button outline">테두리 {{ i + 1 }}</button>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">둥근 버튼</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <button v-for="(item, i) in ['', 'primary', 'success']" :key="item" :class="item" class="ga-button circle">둥근 버튼 {{ i + 1 }}</button>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">아이콘</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <button class="ga-button icon">
            <i class="fa fa-bird"></i>
          </button>
          <button class="ga-button outline icon">
            <i class="fa fa-user"></i>
          </button>
          <button class="ga-button circle icon">
            <i class="fa fa-a"></i>
          </button>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">아이콘 라벨</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <button class="ga-button">
            <i class="icon left fa fa-chevron-left"></i>
            왼쪽
          </button>
          <button class="ga-button">
            오른쪽
            <i class="icon right fa fa-chevron-right"></i>
          </button>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">뱃지</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <button class="ga-button badge">
            베스트
            <span class="in-badge primary">Best</span>
          </button>
          <button class="ga-button badge">
            신규
            <span class="in-badge ga-red">New</span>
          </button>
          <button class="ga-button badge">
            세일
            <span class="in-badge secondary">Sale</span>
          </button>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">텍스트</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <button class="ga-button text">텍스트</button>
          <button class="ga-button primary text">텍스트</button>
          <button class="ga-button text">
            텍스트
            <i class="icon left fa fa-text"></i>
          </button>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">꽉 찬 버튼</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <div class="wrapper">
            <button class="ga-button primary fluid">꽉차게</button>
          </div>
          <div class="wrapper">
            <button class="ga-button secondary fluid">꽉차게</button>
          </div>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">축소 버튼</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <button v-for="item in brand" :key="item.name" :class="item.name" class="ga-button compact">{{ item.title }}</button>
          <button v-for="item in status" :key="item.name" :class="item.name" class="ga-button compact">{{ item.title }}</button>
          <button class="ga-button icon compact deeppurple">
            <i class="fa fa-bird"></i>
          </button>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">크기</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <button v-for="item in sizeType" :key="item" :class="item" class="ga-button">{{ item }}</button>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">색상</h3>
            <div class="sub-title">
              <span v-for="item in colors" :key="item" :class="item" class="ga-tag dot" v-ga-tooltip="item"></span>
            </div>
          </div>
        </div>
        <div class="section-body">
          <button v-for="item in colors" :key="item" :class="item" class="ga-button">{{ item }}</button>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">지정 버튼</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <div class="wrapper">
            <button v-for="(item, i) in ['', 'primary', 'outline']" :key="item" :class="item" class="ga-button equal">지정 버튼 {{ i + 1 }}</button>
          </div>
          <div class="wrapper">
            <button v-for="(item, i) in ['', 'primary', 'outline']" :key="item" :class="item" class="ga-button equal large">큰 지정 버튼 {{ i + 1 }}</button>
          </div>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">버튼 그룹</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <div class="wrapper">
            <div class="ga-buttons">
              <div
                  v-for="btn in buttonGroup"
                  :key="btn"
                  :class="{ selected: btn === selectedButton }"
                  class="ga-button"
                  @click="selectedButton = btn"
              >
                {{ btn }}
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="ga-buttons outline">
              <div
                  v-for="btn in buttonGroup"
                  :key="btn"
                  :class="{ selected: btn === selectedButton1 }"
                  class="ga-button"
                  @click="selectedButton1 = btn"
              >
                {{ btn }}
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="ga-buttons">
              <div
                  v-for="btn in buttonGroup"
                  :key="btn"
                  :class="{ deeppurple: btn === selectedButton2 }"
                  class="ga-button outline"
                  @click="selectedButton2 = btn"
              >
                {{ btn }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </PageView>
</template>

<style scoped>

</style>
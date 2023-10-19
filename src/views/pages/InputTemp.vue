<script setup>
import PageView from '@/views/PageView'
import { ref } from 'vue'

const status = [
  { name: 'success', title: '성공' },
  { name: 'danger', title: '위험' },
  { name: 'info', title: '정보' },
  { name: 'attention', title: '주의' },
  { name: 'importance', title: '중요' }
]

const isEdit = ref(false)
const inputModel = ref('')

const title = '텍스트 입력'
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
       <div class="ga-input">
         <input type="text" placeholder="텍스트 입력">
       </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">비활성</h3>
          <div class="sub-title">disabled</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input disabled">
          <input type="text" placeholder="텍스트 입력">
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">읽기만 가능</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input readonly">
          <input type="text" placeholder="읽기만 가능" />
        </div>
        <div class="ga-input">
          <input type="text" placeholder="읽기만 가능" readonly />
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
        <template v-for="item in status" :key="item.name">
          <div class="ga-input" :class="item.name">
            <input type="text" :placeholder="item.title" />
          </div>
        </template>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">밑줄</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input underline">
          <input type="text" placeholder="텍스트 입력" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">숨겨주기</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input transparent">
          <input type="text" placeholder="텍스트 입력">
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">축소</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input compact">
          <input type="text" placeholder="텍스트 입력">
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">채우기</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input fluid">
          <input type="text" placeholder="텍스트 입력">
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">편집 모드</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input edit" :class="{ editable: isEdit }">
          <input type="text" placeholder="입력하세요" value="편집 대상" />
        </div>
        <button class="ga-button icon circle" @click="isEdit = !isEdit">
          <i v-if="isEdit" class="fa fa-check"></i>
          <i v-else class="fa fa-pen"></i>
        </button>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">단위 표시</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input unit" data-unit="₩">
          <input type="text" placeholder="텍스트 입력">
        </div>
        <div class="ga-input unit-4" :data-unit="`${inputModel.length}/30`">
          <input type="text" v-model="inputModel" placeholder="텍스트 입력">
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">정렬</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input">
          <input class="align-left" type="text" placeholder="왼쪽 부터 입력">
        </div>
        <div class="ga-input">
          <input class="align-center" type="text" placeholder="가운데 부터 입력">
        </div>
        <div class="ga-input">
          <input class="align-right" type="text" placeholder="오른쪽 부터 입력">
        </div>
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
        <div class="ga-input badge">
          <input type="text" placeholder="텍스트 입력">
          <div class="ga-badge float purple">
            <i class="fa fa-arrow-up"></i>
          </div>
        </div>
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
        <div class="ga-input icon left">
          <input type="text" placeholder="텍스트 입력">
          <i class="icon fa fa-magnifying-glass" />
        </div>
        <div class="ga-input icon both">
          <i class="icon fa fa-magnifying-glass" />
          <input type="text" placeholder="텍스트 입력">
          <i class="icon fa fa-chevron-down" />
        </div>
        <div class="ga-input icon right">
          <input type="text" placeholder="텍스트 입력">
          <i class="icon fa fa-magnifying-glass" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">아이콘 링크</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input icon link right">
          <input type="text" placeholder="텍스트 입력">
          <i class="icon fa fa-magnifying-glass" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">라벨</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input labeled right">
          <input type="text" placeholder="텍스트 입력">
          <label class="ga-purple">원</label>
        </div>
        <div class="ga-input labeled left">
          <input type="text" placeholder="이름을 입력" />
          <label>이름</label>
        </div>
        <div class="ga-input labeled right">
          <input type="text" v-model="inputModel" placeholder="텍스트 입력">
          <label class="outline">{{ inputModel.length }}/30</label>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">버튼</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input button left">
          <input type="text" placeholder="텍스트 입력">
          <div class="ga-button primary">저장</div>
        </div>
        <div class="ga-input button right">
          <input type="text" placeholder="텍스트 입력">
          <div class="ga-button icon">
            <i class="fa fa-bird"></i>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">글 입력 영역</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-input fluid">
          <textarea placeholder="텍스트 입력"></textarea>
        </div>
        <div class="ga-input fluid short">
          <textarea placeholder="텍스트 입력"></textarea>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">기본 - 컴포넌트</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <GaInput placeholder="컴포넌트 입력" />
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>

</style>
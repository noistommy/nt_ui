<script setup>
import PageView from '@/views/PageView'
import GaRadio from "@/packages/GaRadio/GaRadio";

import {reactive, ref} from 'vue'

const radioValue = ref('Bus')
const radioValue2 = ref('Bus')

const title = '폼 시스템'

const options = [
  {id:0, option:'user', value: '0', icon:'fa fa-user'},
  {id:1, option:'text', value: '1', icon:'fa fa-text'},
  {id:2, option:'bird', value: '2', icon:'fa fa-bird'},
  {id:3, option:'feed', value: '3', icon:'fa fa-feed'},
  {id:4, option:'globe', value: '4', icon:'fa fa-globe'},
  {id:5, option:'gem', value: '5', icon:'fa fa-gem'},
  {id:6, option:'car', value: '6', icon:'fa fa-car'},
]


const selectedOption = reactive({id:0, option:'user', value: '0', icon:'fa fa-user'})

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
          <h3 class="title">기본 [Field]</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-form">
          <div class="field">
            <label>라벨</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">제목 </h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-form">
          <div class="header">
            <div class="title">폼 제목</div>
          </div>
          <div class="field">
            <label>라벨</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">Inline </h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-form">
          <div class="field inline">
            <label>라벨</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">라벨 </h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-form">
          <div class="field">
            <label>라벨</label>
            <input type="text" placeholder="라벨 있음" />
          </div>
          <div class="field">
            <input type="text" placeholder="라벨 없음" />
          </div>
        </div>
        <div class="ga-form">
          <div class="fields right-side">
            <div class="field column col-2">
              <label>타이틀</label>
            </div>
            <div class="field column">
              <input type="text" placeholder="라벨 영역 고정 (Grid)" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">Fields</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-form">
          <div class="fields">
            <div class="field">
              <label>필드 1</label>
              <input type="text" />
            </div>
            <div class="field">
              <label>필드 2</label>
              <input type="text" />
            </div>
            <div class="field">
              <label>필드 3</label>
              <input type="text" />
            </div>
          </div>
        </div>
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
        <div class="ga-form">
          <div class="field disabled">
            <label>라벨</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">Fields 균등 분할 구성 [Grid]</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-form">
          <div class="fields divide-2">
            <div class="field column">
              <label>필드 1</label>
              <input type="text" />
            </div>
            <div class="field column">
              <label>필드 2</label>
              <input type="text" />
            </div>
          </div>
          <div class="fields divide-4">
            <div class="field column">
              <label>필드 1</label>
              <input type="text" />
            </div>
            <div class="field column">
              <label>필드 2</label>
              <input type="text" />
            </div>
            <div class="field column">
              <label>필드 3</label>
              <input type="text" />
            </div>
            <div class="field column">
              <label>필드 4</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">Fields 지정 분할 구성 [Grid]</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-form">
          <div class="fields">
            <div class="field column col-3">
              <label>필드 영역 3</label>
              <input type="text" />
            </div>
            <div class="field column col-5">
              <label>필드 영역 5</label>
              <input type="text" />
            </div>
            <div class="field column col-4">
              <label>필드 영역 4</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">Textarea</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-form">
          <div class="field">
            <label>라벨</label>
            <textarea placeholder="글입력"></textarea>
          </div>
          <div class="field short">
            <label>라벨</label>
            <textarea placeholder="글입력(short)"></textarea>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">Check Box</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-form">
          <div class="field">
            <label>라벨</label>
            <input type="text">
          </div>
          <div class="field">
            <GaCheckbox :label="`체크박스를 표시합니다`" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">Radio</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-form">
          <div class="field">
            <label>교통 수단을 선택하세요.</label>
          </div>
          <div class="fields">
            <div class="field">
              <GaRadio :label="`Bus`" v-model="radioValue" />
            </div>
            <div class="field">
              <GaRadio :label="`Taxi`" v-model="radioValue" />
            </div>
            <div class="field">
              <GaRadio :label="`Subway`" v-model="radioValue" />
            </div>
          </div>
          <div class="field">
            <label>이슈 발생 시 행동 요령은?</label>
          </div>
          <div class="field">
            <GaRadio :label="`1. 야근한다.`" v-model="radioValue2" />
          </div>
          <div class="field">
            <GaRadio :label="`2. 퇴근한다.`" v-model="radioValue2" />
          </div>
          <div class="field">
            <GaRadio :label="`3. 아무것도 하지않는다.`" v-model="radioValue2" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">Select Box</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-form">
          <div class="field">
            <label>선택</label>
            <GaSelectBox v-model="selectedOption" :option-list="options" />
          </div>
        </div>
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>
.ga-form {
  padding: 20px;
  background-color: #f8f8f8;
}
</style>
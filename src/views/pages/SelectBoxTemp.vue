<script setup>
import PageView from '@/views/PageView'
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import GaSelectBox from "@/packages/GaSelectBox/GaSelectBox";

const title = ref('셀렉트 박스')
const sb = ref(null)
const checkIcon = ref('check')

const states = reactive({
  isOpen: false
})

const selected = reactive({
  selected1: 1,
  selected2: 1,
  selected3: 1,
})

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


onMounted(() => {
  document.body.addEventListener('click', e => {
    if(!sb.value || sb.value.contains(e.target)) return
    states.isOpen = false
  })
})

onUnmounted(() => {
  document.body.removeEventListener('click', e => {
    if(!sb.value || sb.value.contains(e.target)) return
    states.isOpen = false
  })
})
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
            <h3 class="title">기본(Dropdown)</h3>
            <div class="sub-title">Props: type:string [dropdown]</div>
          </div>
        </div>
        <div class="section-body">
          <GaSelectBox v-model="selectedOption" :option-list="options" :visible="true"  />
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">기본(Float)</h3>
            <div class="sub-title">Props: type:string [float]</div>
          </div>
        </div>
        <div class="section-body">
          <GaSelectBox v-model="selectedOption" type="float" :option-list="options"  />
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">아이콘 표시</h3>
            <div class="sub-title">Props: itemIcon:boolean</div>
          </div>
        </div>
        <div class="section-body">
          <GaSelectBox v-model="selectedOption" :option-list="options" :item-icon="true"  />
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">선택 아이템 표시</h3>
            <div class="sub-title">Props: isSelectedIcon:boolean</div>
          </div>
        </div>
        <div class="section-body">
          <div class="wrapper">
            <h5>전체</h5>
            <GaSelectBox v-model="selectedOption" :option-list="options" :selected-type="['bg', 'text', 'icon']" :is-selected-icon="true"  />
          </div>
          <div class="wrapper">
            <h5>배경으로 표시</h5>
            <GaSelectBox v-model="selectedOption" :option-list="options" :is-selected-icon="true"  />
          </div>
          <div class="wrapper">
            <h5>텍스트으로 표시</h5>
            <GaSelectBox v-model="selectedOption" :option-list="options" :selected-type="['text']"  />
          </div>
          <div class="wrapper">
            <h5>아이콘으로 표시</h5>
            <GaSelectBox v-model="selectedOption" :option-list="options" :selected-type="['icon']"  />
          </div>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">사용자 선택 아이콘</h3>
            <div class="sub-title">Props: itemIcon:boolean</div>
          </div>
        </div>
        <div class="section-body">
          <div class="wrapper">
            <div class="ga-buttons outline">
              <button class="ga-button icon" :class="{selected: checkIcon === 'check'}" @click="checkIcon = 'check'">
                <i class="fa fa-check"></i>
              </button>
              <button class="ga-button icon" :class="{selected: checkIcon === 'check-circle'}" @click="checkIcon = 'check-circle'">
                <i class="fa fa-check-circle"></i>
              </button>
              <button class="ga-button icon" :class="{selected: checkIcon === 'user-check'}" @click="checkIcon = 'user-check'">
                <i class="fa fa-user-check"></i>
              </button>
            </div>
          </div>
          <GaSelectBox v-model="selectedOption" :option-list="options" :selected-type="['icon']" :selected-icon="checkIcon"  />
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">채우기</h3>
            <div class="sub-title">Props: fluid:boolean</div>
          </div>
        </div>
        <div class="section-body">
          <GaSelectBox v-model="selectedOption" :option-list="options" :fluid="true"  />
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">축소</h3>
            <div class="sub-title">Props: compact:boolean</div>
          </div>
        </div>
        <div class="section-body">
          <GaSelectBox v-model="selectedOption" :option-list="options" :compact="true"  />
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">옵션 메뉴 Offset</h3>
            <div class="sub-title">Props: menuOffset:string</div>
          </div>
        </div>
        <div class="section-body">
          <GaSelectBox v-model="selectedOption" :option-list="options" menu-offset="10"  />
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">스피너</h3>
            <div class="sub-title">Props: type:boolean</div>
          </div>
        </div>
        <div class="section-body">
          <div class="wrapper">
            <h5>기본 스피너</h5>
            <GaSelectBox v-model="selectedOption" :option-list="options" :spinner="true"  />
          </div>
          <div class="wrapper">
            <h5>우측 스피너</h5>
            <GaSelectBox v-model="selectedOption" :option-list="options" :spinner="true" spinner-pos="right" />
          </div>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">Select 태그</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <div class="ga-select-box">
            <select v-model="selected.selected2">
              <option value="">선택</option>
              <option v-for="item in [1, 2, 3, 4, 5]" :key="item" :value="item">{{ item }}번 옵션</option>
            </select>
            <i class="icon fa fa-chevron-down"></i>
          </div>
        </div>
      </section>
      <section>
        <div class="section-header">
          <div class="section-title">
            <h3 class="title">Select 태그 축소 :: Compact</h3>
            <div class="sub-title"></div>
          </div>
        </div>
        <div class="section-body">
          <div class="ga-select-box compact">
            <select v-model="selected.selected3">
              <option value="">선택</option>
              <option v-for="item in [1, 2, 3, 4, 5]" :key="item" :value="item">{{ item }}번 옵션</option>
            </select>
            <i class="icon fa fa-chevron-down"></i>
          </div>
        </div>
      </section>
    </template>
  </PageView>
</template>

<style scoped>

</style>
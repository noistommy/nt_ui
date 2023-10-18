<script setup>
import PageView from '@/views/PageView'
import { ref } from 'vue'
const title = '트리 목록'

const isAllExpend = ref(false)
const currentLevel = ref(0)
const selectedItem= ref(null)
const treeData = ref({
  id: 1,
  title: 'Node1',
  isExpanded: true,
  children: [
    {id:'1-1', title: 'node1-1 긴 타이틀 작성 시 속성 값에 따라 말줄임 표시를 한다.',isExpanded: false, children:[], icon: 'fa fa-server' },
    {id:'1-2', title: 'node1-2',isExpanded: false, children:[
        {id:'1-2-1', title: 'node1-2-1',isExpanded: false, children:[],icon: 'fa fa-server' },
        {id:'1-2-2', title: 'node1-2-2',isExpanded: false, children:[],icon: 'fa fa-server' },
        {id:'1-2-3', title: 'node1-2-3',isExpanded: false, children:[
            {id:'1-2-3-1', title: 'node1-2-3-1',isExpanded: false, children:[],icon: 'fa fa-server' },
            {id:'1-2-3-2', title: 'node1-2-3-2',isExpanded: false, children:[
                {id:'1-2-3-2-1', title: 'node1-2-3-2-1',isExpanded: false, children:[], icon: 'fa fa-server' },
              ],icon: 'fa fa-server' },
          ],
          icon: 'fa fa-server' },
        {id:'1-2-4', title: 'node1-2-4',isExpanded: false, children:[],icon: 'fa fa-server' },
        {id:'1-2-5', title: 'node1-2-5',isExpanded: false, children:[], icon: 'fa fa-server' },
        {id:'1-2-6', title: 'node1-2-6',isExpanded: false, children:[],icon: 'fa fa-server' }
      ],icon: 'fa fa-server' }
  ],
  icon: 'fa fa-server'
})

function selectItem(value) {
  selectedItem.value = value.id
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
          <h3 class="title">기본</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="tree-list-container">
          <GaTreeList :tree-data="treeData" :level="currentLevel" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">목록 선택</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="tree-list-container">
          <GaTreeList :tree-data="treeData" :selected-node="selectedItem" :level="currentLevel" @select="selectItem" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">목록 체크 사용</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="tree-list-container">
          <GaTreeList :tree-data="treeData" :level="currentLevel" :use-check="true"  />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">전체 목록 확장 - 축소</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <button class="ga-button green" @click="isAllExpend = !isAllExpend">
            <i class="icon left fa" :class="`fa-folder${isAllExpend ? '' : '-open' }`"></i>
            전체 {{ isAllExpend ? '축소' : '확장'}}
          </button>
        </div>
        <div class="tree-list-container">
          <GaTreeList :tree-data="treeData" :level="currentLevel" :all-expanded="isAllExpend" />
        </div>
      </div>
    </section>
  </template>
</PageView>
</template>

<style lang="scss" scoped>
.tree-list-container {
  position: relative;
  width: 300px;
  overflow: hidden;
  border: 1px solid #ebebeb;
}
</style>
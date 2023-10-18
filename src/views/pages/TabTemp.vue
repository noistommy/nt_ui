<script setup>
import PageView from '@/views/PageView'
import { ref } from 'vue'

const title = '탭'

const activeTab = ref(1)
const activeTab_v = ref(1)
const activeTab_l = ref(1)
const activeTab_b = ref(1)
const activeTab_bw = ref(0)
const tabMenu = ref(['tab 1', 'tab 2', 'tab 3'])

function addTab() {
  tabMenu.value.push('new tab')
}
function removeTab(index) {
  tabMenu.value.splice(index, 1)
}
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
        <div class="ga-tabs">
          <div class="tab-menu">
            <template v-for="item in [1, 2, 3, 4, 5]" :key="item">
              <div class="tab tab-item" :class="{ active: item === activeTab }" @click="activeTab = item">
                아이템 {{ item }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">기본 - 세로</h3>
          <div class="sub-title">class name: vertical</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-tabs vertical">
          <div class="tab-menu">
            <template v-for="item in [1, 2, 3, 4, 5]" :key="item">
              <div class="tab tab-item" :class="{ active: item === activeTab_v }" @click="activeTab_v = item">
                아이템 {{ item }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">선 표시</h3>
          <div class="sub-title">class name: line</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-tabs line">
          <div class="tab-menu">
            <template v-for="item in [1, 2, 3, 4, 5]" :key="item">
              <div class="tab tab-item" :class="{ active: item === activeTab_l }" @click="activeTab_l = item">
                아이템 {{ item }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">선 표시</h3>
          <div class="sub-title">class name: line</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-tabs button">
          <div class="tab-menu">
            <template v-for="item in [1, 2, 3, 4, 5]" :key="item">
              <div class="tab tab-item" :class="{ active: item === activeTab_b }" @click="activeTab_b = item">
                아이템 {{ item }}
              </div>
            </template>
          </div>
          <div class="tab-contents">아이템 {{ activeTab_b }} 선택 됨.</div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">브라우저 타입</h3>
          <div class="sub-title">class name: browser</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-tabs browser">
          <div class="tab-menu">
            <template v-for="(item, i) in tabMenu" :key="item">
              <div class="tab tab-item" :class="{ active: i === activeTab_bw }" @click="activeTab_bw = i">
                <div class="tabText ellipsis">{{ item }}({{ i }})</div>
                <div class="ga-button icon tiny circle btn-close" @click.stop="removeTab(i)">
                  <i class="fa fa-xmark"></i>
                </div>
              </div>
            </template>
          </div>
          <div class="tab-contents">
            <button class="ga-button purple" @click="addTab">탭 생성</button>
          </div>
        </div>
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>

</style>
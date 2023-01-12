<script setup>
import WavesSvg from '@/components/WavesSvg'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const current = computed(() => {
  return useRoute().name
})
const activeMenu = ref(current)
const elementList = [
  { name: 'button', title: '버튼' },
  { name: 'tag', title: '태그' },
  { name: 'badge', title: '뱃지' },
  { name: 'checkbox', title: '체크박스 / 라디오' },
  { name: 'switch', title: '스위치' },
  { name: 'input', title: '텍스트 입력' },
  { name: 'list', title: '목록' }
]
const moduleList = [
  { name: 'selectBox', title: '셀렉트 박스' },
  { name: 'pagination', title: '페이지네이션' },
]

function selectMenu(target) {
  console.log(target)
}

</script>
<template>
  <GaTeleport />
  <div id="Container">
    <div class="left-side menu">
      <header>
        <div class="main-title">
          <h1 class="title">GA UI COMPONENT</h1>
        </div>
        <div class="wave-wrapper">
          <WavesSvg />
        </div>
      </header>
      <div class="ga-list selection">
        <router-link :to="{ name: 'home' }" class="item" :class="{active: activeMenu === 'home'}" @click="selectMenu('home')">HOME</router-link>
        <router-link :to="{ name: 'about' }" class="item" :class="{active: activeMenu === 'about'}" @click="selectMenu('about')">ABOUT</router-link>
        <div class="header-item item">Foundation</div>
        <router-link :to="{ name: 'typography' }" class="item" :class="{active: activeMenu === 'typography'}" @click="selectMenu('typography')">타이포그라피</router-link>
        <div class="header-item item">Element</div>
        <template v-for="item in elementList" :key="item.name">
          <router-link :to="{ name: item.name }" class="item" :class="{active: activeMenu === item.name}" @click="selectMenu(item.name)">{{ item.title }}</router-link>
        </template>
        <div class="header-item item">Components</div>
        <template v-for="item in moduleList" :key="item.name">
          <router-link :to="{ name: item.name }" class="item" :class="{active: activeMenu === item.name}" @click="selectMenu(item.name)">{{ item.title }}</router-link>
        </template>
      </div>
    </div>
    <div class="right-side contents">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
header {
  background: linear-gradient(60deg, #5178AF 0%, #9180B4 100%);
  .main-title {
    color: #fff;
    text-align: center;
    padding: 50px 0;
  }
}
.wave-wrapper {
}
#Container {
  display: flex;
  align-items: stretch;
  .menu {
    min-width: 300px;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    box-shadow: 0 0 5px 8px rgba(0, 0, 0, 0.16);
    border-top-right-radius: 2em;
    border-bottom-right-radius: 2em;
    overflow: hidden;
  }
  .contents {
    flex-grow: 1;
  }
}
</style>

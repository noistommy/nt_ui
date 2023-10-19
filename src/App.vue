<script setup>
import WavesSvg from '@/components/WavesSvg'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import GaTeleport from "@/packages/GaTeleport/GaTeleport";

const current = computed(() => {
  return useRoute().name
})
const openMenu = ref(false)
const activeMenu = ref(current)
const selectedMenu = ref('')
const baseList = [
  { name: 'typography', title: '타이포그래피' },
  { name: 'color', title: '색상' },
  { name: 'grid', title: '그리드 시스템' },
]
const elementList = [
  { name: 'button', title: '버튼' },
  { name: 'tag', title: '태그' },
  { name: 'badge', title: '뱃지' },
  { name: 'checkbox', title: '체크박스 / 라디오' },
  { name: 'switch', title: '스위치' },
  { name: 'input', title: '텍스트 입력' },
  { name: 'message', title: '메세지 상자' },
  { name: 'list', title: '목록' },
  { name: 'table', title: '테이블' },
  { name: 'panel', title: '패널' },
  { name: 'progress', title: '프로그래스' },
]
const moduleList = [
  { name: 'selectBox', title: '셀렉트 박스' },
  { name: 'pagination', title: '페이지네이션' },
  { name: 'slider', title: '슬라이더' },
  { name: 'tab', title: '탭' },
  { name: 'calendar', title: '달력' },
  { name: 'datePicker', title: '날짜 선택' },
  { name: 'treeList', title: '트리 목록' },
]
const pluginList = [
  { name: 'modal', title: '모달' },
  { name: 'tooltip', title: '툴팁' },
  { name: 'toast', title: '토스트' },
]
function selectMenu(target) {
  selectedMenu.value = target
}

</script>
<template>
  <GaTeleport />
  <div id="Container" :class="activeMenu">
    <div class="btn-menu" @click="openMenu = !openMenu">
      <button class="ga-button icon circle huge ga-cyan">
        <i class="fa fa-bars"></i>
      </button>
    </div>
    <div class="left-side menu" :class="{open: openMenu}" @click="openMenu = !openMenu">
      <div class="side-navigation">
        <header>
          <div class="main-title">
            <h1 class="title">
              <router-link :to="{ name: 'home' }">GA UI COMPONENT</router-link>
            </h1>
          </div>
          <div class="wave-wrapper">
            <WavesSvg />
          </div>
        </header>
        <div class="lnb-body">
          <div class="ga-list selection">
            <router-link :to="{ name: 'home' }" class="item" :class="{active: activeMenu === 'home'}" @click="selectMenu('home')">HOME</router-link>
            <!--          <router-link :to="{ name: 'about' }" class="item" :class="{active: activeMenu === 'about'}" @click="selectMenu('about')">ABOUT</router-link>-->
            <div class="header-item item">Foundation</div>
            <template v-for="item in baseList" :key="item.name">
              <router-link :to="{ name: item.name }" class="item" :class="{active: activeMenu === item.name}" @click="selectMenu(item.name)">{{ item.title }}</router-link>
            </template>
            <div class="header-item item">Element</div>
            <template v-for="item in elementList" :key="item.name">
              <router-link :to="{ name: item.name }" class="item" :class="{active: activeMenu === item.name}" @click="selectMenu(item.name)">{{ item.title }}</router-link>
            </template>
            <div class="header-item item">Components</div>
            <template v-for="item in moduleList" :key="item.name">
              <router-link :to="{ name: item.name }" class="item" :class="{active: activeMenu === item.name}" @click="selectMenu(item.name)">{{ item.title }}</router-link>
            </template>
            <div class="header-item item">Plugin</div>
            <template v-for="item in pluginList" :key="item.name">
              <router-link :to="{ name: item.name }" class="item" :class="{active: activeMenu === item.name}" @click="selectMenu(item.name)">{{ item.title }}</router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="right-side contents">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body {
  scroll-behavior: smooth;
}
header {
  background: linear-gradient(60deg, #5178AF 0%, #9180B4 100%);
  .main-title {
    color: #fff;
    text-align: center;
    padding: 50px 0;
  }
}
#Container {
  display: flex;
  .menu {
    background-color: var(--bgc);
    box-shadow: 0 0 5px 8px rgba(0, 0, 0, 0.16);
    border-top-right-radius: 2em;
    border-bottom-right-radius: 2em;
    overflow: hidden;
    flex-shrink: 0;
  }
  .side-navigation {
    min-width: 300px;
    height: 100vh;
  }
  .contents {
    flex-grow: 1;
    height: 100vh;
    overflow-y: auto;
  }
  &.home {

    .menu {
      position: relative;
      transition: width 500ms ease;
      width: 0;
      .side-navigation {
        position: absolute;
        right: 0;
      }
    }
    .contents {
      background-color: var(--bgc);
    }
  }
  .btn-menu {
    position: fixed;
    padding: 10px;
    top: 0;
    left: 0;
    display: none;
    z-index: 9999;
  }
}
.lnb-body {
  max-height: calc(100% - 197px);
  overflow-y: auto;
  .ga-list {
    margin-bottom: 100px;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 768px) {
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    transform: translateX(-100%);
    &.open {
      transform: translateX(0);
    }
  }
  #Container .btn-menu {
    display: block;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
//@media only screen and (min-width: 600px) {...}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}
/* Large devices (laptops/desktops, 992px and up) */
//@media only screen and (min-width: 992px) {...}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .page-contents-body {
    margin-right: 300px !important;
  }
}

</style>

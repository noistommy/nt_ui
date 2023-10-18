<script setup>
import WavesSvg from '@/components/WavesSvg'
// import StyleGuide from '@/components/StyleGuide';
import { ref } from 'vue'

const structure = ref({
  id: 0,
  title: 'Ga UI 구조',
  isExpanded: true,
  icon: 'fa fa-folder',
  children: [
    {
      id: 1-1,
      title: 'gulpFile.babel.js // Gulp css build',
      isExpanded: false,
      icon: 'fa fa-file',
      children: []
    },
    {
      id: 1-2,
      title: 'src',
      isExpanded: true,
      icon: 'fa fa-folder',
      children: [
        {
          id: 2-1,
          title: 'assets',
          isExpanded: false,
          icon: 'fa fa-folder',
          children: [
            { id: 3-1, title: 'font', isExpanded: false, icon: 'fa fa-folder', children: [] },
            { id: 3-2, title: 'style', isExpanded: false, icon: 'fa fa-folder', children: [] },
            { id: 3-3, title: 'css', isExpanded: false, icon: 'fa fa-folder', children: [] },
          ]
        },
        {
          id: 2-2,
          title: 'packages',
          isExpanded: false,
          icon: 'fa fa-folder',
          children: []
        }
      ]
    }
  ]
})

</script>

<template>
  <nav>
    <RouterLink :to="{name: 'home'}"><div class="nav-item">HOME</div></RouterLink>
    <RouterLink :to="{name: 'typography'}"><div class="nav-item">COMPONENTS</div></RouterLink>
  </nav>
  <div class="main-section">
    <div class="main-title">
      <div class="float-title">gA UI</div>
    </div>
    <div class="wave-wrapper">
      <WavesSvg />
    </div>
  </div>
  <div class="container">
    <h1>구조</h1>
    <div class="ga-card attached">
      <GaTreeList :tree-data="structure" :level="0"  />
      <div class="footer">
        <div class="ga-list ul hyphen">
          <div class="item"><strong>gulpFile.babel.js</strong> : Gulp 사용해 개발중 scss 변화를 확인하고 동시에. 빌드된 css 파일을 생성함.</div>
          <div class="item"><strong>src</strong> 폴더: ga ui scss 파일, ui component 파일, 예제 페이지를 포함한다</div>
          <div class="item"><strong>assets</strong> 폴더: 스타일 관련 파일 빝 빌드된 css 파일 output 포함함</div>
          <div class="item"><strong>packages</strong> 폴더: ga ui component 및 plugin 파일 포함함</div>
          <div class="item">그 외 폴더(views): ga ui 예제 페이지</div>
        </div>
      </div>
    </div>
    <h1>Gulp 빌드</h1>
    <div class="ga-card attached">
      <div class="ga-list ul">
        <div class="item">ga-ui는 최종적으로 빌드된 css 파일과 ui component, plugin vue파일을 포함된 라이브러리이다.</div>
        <div class="item">gulp 빌드는 공용 스타일 적용을 위한 scss 을 하나의 css 파일로 빌드하기 위해 사용한다.</div>
        <div class="item">빌드는 기본으로 clean, build, watch를 제공하고 따로 clean, build명령을 사용한다.</div>
        <div class="item">gulp 실행하며 watch 상태로 개발 진행 시 변경사항이 있을떄 마다 빌드 되며 예제 화면에 적용된다.</div>
      </div>
      <div class="footer">
        <div class="ga-list">
          <div class="item">project root $> gulp // gulp 기본 실행</div>
          <div class="item">project root $> gulp clean // gulp 빌드파일 삭제 실행</div>
          <div class="item">project root $> gulp build // gulp 빌드 실행</div>
        </div>
      </div>
    </div>
    <h1>Ga Ui Package 적용</h1>
    <div class="ga-card attached">
      <div class="ga-list ul hyphen">
        <div class="item">packages는 component, plugin, directive 타입이 있으며 main.js(root js)에서 import해서 사용한다.</div>
      </div>
      <div class="footer">
        <div class="secondary-text">// main.js - component</div>
        <div class="ga-list">
          <div class="item">import GaUI from 'package path'</div>
          <div class="item">Vue.use(GaUI)</div>
        </div>
        <div class="secondary-text">// main.js - plugin, directive</div>
        <div class="ga-list">
          <div class="item">import GaModal from 'packages/GaTeleport path'</div>
          <div class="item">import GaToast from 'packages/GaToast path'</div>
          <div class="item">import GaTooltip from 'packages/GaTooltip path'</div>
          <div class="item">Vue.use(GaModal)</div>
          <div class="item">Vue.use(GaToast)</div>
          <div class="item">Vue.use(GaTooltip)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width :100%;
  max-width: 1024px;
  margin: 0 auto;
}
.main-section {
  background: linear-gradient(60deg, #5178AF 0%, #9180B4 100%);
  .main-title {
    position: relative;
    font-size: 7em;
    font-weight: 900;
    color: #ffffff;
    padding-top: 200px;
    text-align: center;

    .float-title {
      position: absolute;
      top: 150px;
      left: 45%;
      animation: onWave 7s linear infinite;
    }
  }
}
#Container {
  position: relative;
  nav {
    position: absolute;
    top: 20px;
    right: 50px;
    display: flex;
    z-index: 9999;
    .nav-item {
      min-width: 80px;
      padding: 10px;
      color: #fff;
      border-radius: 2em;
      text-align: center;
      &:hover {
        background-color: rgba(255, 255, 255, 0.16);
      }
    }
  }
}
.ga-card.attached {
  .footer {
    padding: 40px;
  }
}
@keyframes onWave {
  0%{
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-20px, 50px) rotate(5deg);
  }
  75% {
    transform: translate(10px, -30px) rotate(0deg);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
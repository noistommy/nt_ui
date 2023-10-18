<script setup>
import PageView from '@/views/PageView'
import { ref } from 'vue'

const isCollapse = ref(false)
const activePanel = ref(0)

const title = '패널'
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
        <div class="ga-panel">
          <div class="panel-header">제목</div>
          <div class="panel-content">
            <div class="content-wrapper">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">접기</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-panel collapse" :class="{ open: isCollapse }">
          <div class="panel-header">
            <div class="title">제목</div>
            <button class="panel-toggle-btn ga-button icon outline" @click="isCollapse = !isCollapse">
              <i class="fa fa-caret-up"></i>
            </button>
          </div>
          <div class="panel-content">
            <div class="content-wrapper">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">아코디온</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper accordion"></div>
        <div class="ga-panel collapse" :class="{ open: activePanel === 0 }">
          <div class="panel-header">
            <div class="title">제목</div>
            <button class="panel-toggle-btn ga-button icon outline" @click="activePanel = 0">
              <i class="fa fa-caret-up"></i>
            </button>
          </div>
          <div class="panel-content">
            <div class="content-wrapper">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
            </div>
          </div>
        </div>
        <div class="ga-panel collapse" :class="{ open: activePanel === 1 }">
          <div class="panel-header">
            <div class="title">제목</div>
            <button class="panel-toggle-btn ga-button icon outline" @click="activePanel = 1">
              <i class="fa fa-caret-up"></i>
            </button>
          </div>
          <div class="panel-content">
            <div class="content-wrapper">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
            </div>
          </div>
        </div>
        <div class="ga-panel collapse" :class="{ open: activePanel === 2 }">
          <div class="panel-header">
            <div class="title">제목</div>
            <button class="panel-toggle-btn ga-button icon outline" @click="activePanel = 2">
              <i class="fa fa-caret-up"></i>
            </button>
          </div>
          <div class="panel-content">
            <div class="content-wrapper">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
            </div>
          </div>
        </div>
        <div class="ga-panel collapse" :class="{ open: activePanel === 3 }">
          <div class="panel-header">
            <div class="title">제목</div>
            <button class="panel-toggle-btn ga-button icon outline" @click="activePanel = 3">
              <i class="fa fa-caret-up"></i>
            </button>
          </div>
          <div class="panel-content">
            <div class="content-wrapper">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
              incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
              labore laboriosam laudantium quasi.
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
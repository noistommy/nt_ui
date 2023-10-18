<script setup>
import PageView from '@/views/PageView'
import {ref} from 'vue'

const title = '디자인 토큰'
const isCollapse = ref(true);


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
        <div class="ga-panel collapse" :class="{ open: isCollapse }">
          <div class="panel-header">
            <div class="title">Font</div>
            <button class="panel-toggle-btn ga-button icon outline" @click="isCollapse = !isCollapse">
              <i class="fa fa-caret-up"></i>
            </button>
          </div>
          <div class="panel-content">
            <div class="content-wrapper">
              <div class="ga-grid right-side">
                <div class="rows">
                  <div class="column col-3">
                    <div class="col-cell">font name</div>
                  </div>
                  <div class="column">
                    <div class="col-cell">
                      $fontName
                    </div>
                  </div>
                </div>
                <div class="rows">
                  <div class="column col-3">
                    <div class="col-cell">font weight</div>
                  </div>
                  <div class="column col-3">
                    <div class="col-cell">light</div>
                  </div>
                  <div class="column col-3">
                    <div class="col-cell"></div>
                  </div>
                  <div class="column">
                    <div class="col-cell">
                      $font-light
                    </div>
                  </div>
                </div>
                <div class="rows">
                  <div class="column col-3">
                    <div class="col-cell">brand</div>
                  </div>
                  <div class="column col-3">
                    <div class="col-cell">default</div>
                  </div>
                  <div class="column col-3">
                    <div class="col-cell">primary</div>
                  </div>
                  <div class="column">
                    <div class="col-cell">
                      $primary
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
</PageView>
</template>

<style lang="scss" scoped>
.column .col-cell{
  min-height: 29px;
  padding: 4px 8px;
  background-color: #f8f8f8;
}
.column:nth-child(1) .col-cell {background-color: #f2f2f2;}
.column:nth-child(4) .col-cell {background-color: #ebebeb;}
</style>
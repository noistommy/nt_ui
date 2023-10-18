<script setup>
import PageView from '@/views/PageView'

const title = '달력'
</script>

<template>
<PageView>
  <template #header>
    <div class="main-title">{{ title }}</div>
    <div class="section-tags">
      <span class="ga-tag label teal">ga-ui-css</span>
      <span class="ga-tag label purple">vae 3.0</span>
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
        <GaCalendar />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">테두리</h3>
          <div class="sub-title">Props: gridBorder:boolean</div>
        </div>
      </div>
      <div class="section-body">
        <GaCalendar :grid-border="true" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">날짜 선택</h3>
          <div class="sub-title">Props: gridBorder:boolean</div>
        </div>
      </div>
      <div class="section-body">
        <GaCalendar class="selection" />
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>

</style>
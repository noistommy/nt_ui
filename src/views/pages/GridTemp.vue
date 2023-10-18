<script setup>
import PageView from '@/views/PageView'

const title = '그리드 시스템'
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
          <div class="sub-title">그리드 컬럼 수: 12</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-grid">
          <div class="column" v-for="col in 12" :key="col"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">균등 분할</h3>
          <div class="sub-title">그리드 컬럼 수: 12</div>
        </div>
      </div>
      <div class="section-body">
        <template v-for="item in [2, 4, 6, 8]" :key="item">
          <div class="ga-grid" :class="`divide-${item}`">
            <div class="column" v-for="col in item" :key="col"></div>
          </div>
        </template>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">지정 분할</h3>
          <div class="sub-title">그리드 컬럼 수: 12</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-grid">
          <div class="column" v-for="col in [2, 4, 1, 5]" :key="col" :class="`col-${col}`"></div>
          <div class="column" v-for="col in [4, 5, 3]" :key="col" :class="`col-${col}`"></div>
          <div class="column" v-for="col in [8, 2, 2]" :key="col" :class="`col-${col}`"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">채우기</h3>
          <div class="sub-title">그리드 컬럼 수: 12</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-grid left-side">
          <div class="column" v-for="col in [2, 2]" :key="col" :class="`col-${col}`"></div>
        </div>
        <div class="ga-grid right-side">
          <div class="column" v-for="col in [2, 2]" :key="col" :class="`col-${col}`"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">중첩</h3>
          <div class="sub-title">그리드 컬럼 수: 12</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-grid divide-2">
          <div class="column"></div>
          <div class="column empty">
            <div class="ga-grid divide-3">
              <div class="column" data-col="nested"></div>
              <div class="column" data-col="nested"></div>
              <div class="column" data-col="nested"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">정렬 (가로)</h3>
          <div class="sub-title">그리드 컬럼 수: 12</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <h5>왼쪽</h5>
          <div class="ga-grid divide-6">
            <div class="column" v-for="col in 4" :key="col"></div>
          </div>
        </div>
        <div class="wrapper">
          <h5>가운데</h5>
          <div class="ga-grid divide-6 justify-center">
            <div class="column" v-for="col in 4" :key="col"></div>
          </div>
        </div>
        <div class="wrapper">
          <h5>오른쪽</h5>
          <div class="ga-grid divide-6 justify-right">
            <div class="column" v-for="col in 4" :key="col"></div>
          </div>
        </div>
        <div class="wrapper">
          <h5>Between</h5>
          <div class="ga-grid divide-6 justify-between">
            <div class="column" v-for="col in 4" :key="col"></div>
          </div>
        </div>
        <div class="wrapper">
          <h5>Around</h5>
          <div class="ga-grid divide-6 justify-around">
            <div class="column" v-for="col in 4" :key="col"></div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">정렬 (세로)</h3>
          <div class="sub-title">그리드 컬럼 수: 12</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper">
          <h5>왼쪽</h5>
          <div class="ga-grid divide-4">
            <div class="column" v-for="(col, i) in 4" :key="col" :style="{height: `${(i + 1) * 4}em`}"></div>
          </div>
        </div>
        <div class="wrapper">
          <h5>가운데</h5>
          <div class="ga-grid divide-4 align-center">
            <div class="column" v-for="(col, i) in 4" :key="col" :style="{height: `${(i + 1) * 4}em`}"></div>
          </div>
        </div>
        <div class="wrapper">
          <h5>오른쪽</h5>
          <div class="ga-grid divide-4 align-bottom">
            <div class="column" v-for="(col, i) in 4" :key="col" :style="{height: `${(i + 1) * 4}em`}"></div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">비워두기</h3>
          <div class="sub-title">그리드 컬럼 수: 12</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-grid">
          <div class="column" v-for="col in [3, 3]" :key="col" :class="`col-${col} offset-${col}`" data-col="Col 3/ Offset 3"></div>
          <div class="column col-8 offset-2" data-col="Col 8/ Offset 2"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">순서</h3>
          <div class="sub-title">그리드 컬럼 수: 12</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-grid">
          <div class="column col-3 order-4" data-col="1번 / Order 4"></div>
          <div class="column col-3 order-1" data-col="2번 / Order 1"></div>
          <div class="column col-3 order-3" data-col="3번 / Order 3"></div>
          <div class="column col-3 order-2" data-col="4번 / Order 2"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">반응형</h3>
          <div class="sub-title">반응형 XS | SM | MD</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-grid">
          <div class="column col-3 col-md-6 col-sm-8 offset-sm-2" v-for="col in 4" :key="col"></div>
        </div>
      </div>
    </section>
  </template>
</PageView>
</template>

<style lang="scss" scoped>
.ga-grid:not(.tabled) > .column:not(.empty) {
  &:after {
    content: attr(data-col);
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #f2f2f2;
    box-shadow: 0 0 0 1px #efefef inset;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.column > .ga-grid {
  background-color: #f2f2f2;
  .column::after {
    background-color: #d6d6d6 !important;
  }
}

</style>
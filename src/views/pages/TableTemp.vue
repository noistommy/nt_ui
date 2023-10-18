<script setup>
import PageView from '@/views/PageView'

const title = '테이블'
const tableColumn = [
  { name: 'name', title: '이름', width: 2, align: 'left' },
  { name: 'age', title: '나이', width: 2, align: 'center' },
  { name: 'job', title: '직업', width: 8, align: 'right' }
]
const tableValue = [
  { name: '김아무개', age: 11, job: '학생' },
  { name: '이아무개', age: 17, job: '대학생' },
  { name: '박아무개', age: 31, job: '대학원생' }
]
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
        <table class="ga-table">
          <thead>
          <tr>
            <th v-for="col in tableColumn" :key="col.name">{{ col.title }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(row, index) in tableValue" :key="index">
            <td v-for="col in tableColumn" :key="col.name">{{ row[col.name] }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">싱글</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <table class="ga-table single">
          <thead>
          <tr>
            <th v-for="col in tableColumn" :key="col.name">{{ col.title }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(row, index) in tableValue" :key="index">
            <td v-for="col in tableColumn" :key="col.name">{{ row[col.name] }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">정렬(행)</h3>
          <div class="sub-title">Row Alignment</div>
        </div>
      </div>
      <div class="section-body">
        <table class="ga-table">
          <thead>
            <tr>
              <th v-for="col in tableColumn" :key="col.name">{{ col.title }}</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td v-for="col in tableColumn" :key="col.name">{{ tableValue[0][col.name] }}</td>
          </tr>
          <tr class="align-center">
            <td v-for="col in tableColumn" :key="col.name">{{ tableValue[1][col.name] }}</td>
          </tr>
          <tr class="align-right">
            <td v-for="col in tableColumn" :key="col.name">{{ tableValue[2][col.name] }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">정렬(열)</h3>
          <div class="sub-title">Column Alignment</div>
        </div>
      </div>
      <div class="section-body">
        <table class="ga-table">
          <thead>
            <tr>
              <th v-for="col in tableColumn" :key="col.name" :class="`align-${col.align}`">{{ col.title }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in tableValue" :key="index">
              <td v-for="col in tableColumn" :key="col.name" :class="`align-${col.align}`">{{ row[col.name] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">테이블 제목</h3>
          <div class="sub-title">Table Title</div>
        </div>
      </div>
      <div class="section-body">
        <div class="table-title">제목</div>
        <table class="ga-table labeled">
          <thead>
            <tr>
              <th v-for="col in tableColumn" :key="col.name">{{ col.title }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in tableValue" :key="index">
              <td v-for="col in tableColumn" :key="col.name">{{ row[col.name] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">푸터 지정</h3>
          <div class="sub-title">Footer</div>
        </div>
      </div>
      <div class="section-body">
        <table class="ga-table labeled">
          <thead>
            <tr>
              <th v-for="col in tableColumn" :key="col.name">{{ col.title }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in tableValue" :key="index">
              <td v-for="col in tableColumn" :key="col.name">{{ row[col.name] }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td :colspan="tableColumn.length">푸터 영역 지정</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">컬럼 균등 분할</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <table class="ga-table column three">
          <thead>
          <tr>
            <th v-for="col in tableColumn" :key="col.name">{{ col.title }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(row, index) in tableValue" :key="index">
            <td v-for="col in tableColumn" :key="col.name">{{ row[col.name] }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">컬럼 지정 분할</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <table class="ga-table">
          <thead>
          <tr>
            <th v-for="col in tableColumn" :key="col.name" :class="`col-${col.width}`">
              {{ col.title }} ({{ col.width }}칸 지정)
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(row, index) in tableValue" :key="index">
            <td v-for="col in tableColumn" :key="col.name">{{ row[col.name] }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>

</style>
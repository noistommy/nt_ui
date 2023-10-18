<script setup>
import PageView from '@/views/PageView'
import { ref } from 'vue'
import {COLOR_PALETTE} from "@/resource";

const title = '스위치'
const colors = COLOR_PALETTE

const switchValue = ref(true)
const switchValueT = ref('Y')
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
  <template #usage>
    <div class="ga-card attached">
      <h3>스위치</h3>
      <div class="footer">
        <div class="ga-list code">
          <div class="item secondary-text">// GaSwitch - 기본</div>
          <div class="item">const data = (true || false)</div>
          <div class="item" v-text="`<GaSwaich v-model='data' />`"></div>
          <div class="item secondary-text">// GaSwitch - round</div>
          <div class="item" v-text="`<GaSwaich v-model='data' round='true | false' />`"></div>
          <div class="item secondary-text">// GaSwitch - type</div>
          <div class="item" v-text="`<GaSwaich v-model='data' type='true | false' />`"></div>
          <div class="item secondary-text">// GaSwitch - reverse</div>
          <div class="item" v-text="`<GaSwaich v-model='data' reverse='true | false' />`"></div>
          <div class="item secondary-text">// GaSwitch - type</div>
          <div class="item" v-text="`<GaSwaich v-model='data' type='button | null' />`"></div>
          <div class="item secondary-text">// GaSwitch - 결과 지정</div>
          <div class="item" v-text="`<GaSwaich v-model='data' on-value='Y' off-value='N' />`"></div>
          <div class="item secondary-text">// GaSwitch - 사용자 라벨</div>
          <div class="item" v-text="`<GaSwaich v-model='data' >`"></div>
          <div class="item depth-1" v-text="`    <template v-slot:on>사용</template>`"></div>
          <div class="item depth-1" v-text="`    <template v-slot:off>사용안함</template>`"></div>
          <div class="item" v-text="`</GaSwaich>`"></div>
        </div>
      </div>
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
        <GaSwitch />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">둥근 스위치</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <GaSwitch :round="true" />
        <GaSwitch :round="true" :inside="true" />
        <GaSwitch :round="true" type="button" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">스위치 타입</h3>
          <div class="sub-title">props: inside:boolean</div>
        </div>
      </div>
      <div class="section-body">
        <GaSwitch />
        <GaSwitch :inside="true" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">스위치 반전</h3>
          <div class="sub-title">props: inside:boolean</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper ga-gray inline">
          <GaSwitch :reverse="true" />
          <GaSwitch :reverse="true" :inside="true" />
          <GaSwitch :reverse="true" :round="true" />
          <GaSwitch :reverse="true" :round="true" :inside="true" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">버튼 타입</h3>
          <div class="sub-title">props: type:string</div>
        </div>
      </div>
      <div class="section-body">
        <GaSwitch type="button" :disabled="true" />
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">버튼 타입 - 결과 사용자 지정</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <GaSwitch v-model="switchValueT" type="button" on-value="Y" off-value="N" />
        결과: {{ switchValueT }}
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">버튼 타입 - 사용자 라벨 지정</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <GaSwitch v-model="switchValue" type="button">
          <template v-slot:on>사용</template>
          <template v-slot:off>사용안함</template>
        </GaSwitch>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">색상별</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <template v-for="item in colors" :key="item.name">
          <GaSwitch :round="true" :inside="true" :color="item.name" />
        </template>
      </div>
    </section>
  </template>
</PageView>
</template>

<style scoped>

</style>
<script setup>
import PageView from '@/views/PageView'

const title = '기초'

const sizeType = [ 'tiny', 'small', 'medium', 'large', 'huge', 'massive']
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
          <h3 class="title">대표 글꼴</h3>
          <div class="sub-title">Spoqa Han Sans</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-grid">
          <div class="column col-2 mainWord">Aa</div>
          <div class="column col-8 mainWord">가나다</div>
          <div class="column col-10 typo-block">
            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>1234567890 ,./(){}[]|:;"'?</p>
            <p>가나다라마바사 스포카 한 산스</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">글자 높이</h3>
          <div class="sub-title">Line Height: 1.5</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper lh-guide">
          스포카 한 산스  Spoqa Han Sans
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">글자 굵기</h3>
          <div class="sub-title"></div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-grid right-side">
          <div class="rows">
            <div class="column col-1">Light</div>
            <div class="column col-2">100</div>
            <div class="column light">하늘에는 별 오는 보고, 새겨지는 파란 있습니다.</div>
          </div>
          <div class="rows">
            <div class="column col-1">Regular</div>
            <div class="column col-2">400</div>
            <div class="column">하늘에는 별 오는 보고, 새겨지는 파란 있습니다.</div>
          </div>
          <div class="rows">
            <div class="column col-1">Bold</div>
            <div class="column col-2">900</div>
            <div class="column bold">하늘에는 별 오는 보고, 새겨지는 파란 있습니다.</div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">크기 지정</h3>
          <div class="sub-title">Spoqa Han Sans</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-grid">
          <div v-for="item in sizeType" :key="item" class="column col-1">
            <div :class="item">Aa</div>
          </div>
        </div>
        <div class="ga-grid">
          <div v-for="item in sizeType" :key="item" class="column col-1">
            <div class="ga-tag label tiny secondary">{{ item }}</div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">제목 시스템</h3>
          <div class="sub-title">Heading System</div>
        </div>
      </div>
      <div class="section-body">
        <div class="ga-list">
          <div class="item">
            <h1>[H1]Heading 1 (28px)</h1>
          </div>
          <div class="item">
            <h2>[H2]Heading 2 (24px)</h2>
          </div>
          <div class="item">
            <h3>[H3]Heading 3 (18px)</h3>
          </div>
          <div class="item">
            <h4>[H4]Heading 4 (16px)</h4>
          </div>
          <div class="item">
            <h5>[H5]Heading 5 (14px)</h5>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-header">
        <div class="section-title">
          <h3 class="title">자간 시스템</h3>
          <div class="sub-title">Letter Spacing System</div>
        </div>
      </div>
      <div class="section-body">
        <div class="wrapper ga-grid right-side">
          <div class="column col-3">
            <h4>spacing-wider</h4>
            자간: +1px
          </div>
          <div class="column">
            <p class="spacing-wider">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic in ipsa laboriosam magnam, quis sed? Aspernatur ducimus, facere harum, in inventore, officiis perferendis rem repellendus tenetur unde ut velit!</p>
            <br>
            <p class="spacing-wider">하늘에는 별 오는 보고, 새겨지는 파란 있습니다. 우는 무성할 보고, 된 내 봅니다. 이름을 위에 하나에 쓸쓸함과 남은 헤는 아침이 듯합니다. 라이너 못 이름자를 거외다. 하나에 하나에 불러 했던 봄이 새겨지는 아침이 내린 봅니다. 이름과, 딴은 토끼, 부끄러운 남은 이국 된 버리었습니다. 이국 벌레는 별 위에 있습니다. 벌써 위에도 가득 다하지 비둘기, 노루, 하나에 지나고 어머님, 까닭입니다. 너무나 가을 동경과 이런 있습니다. 라이너 시인의 패, 아름다운 어머니, 위에도 있습니다. 어머니, 이국 무성할 하나에 아이들의 써 잔디가 거외다.</p>
          </div>
        </div>
        <div class="wrapper ga-grid right-side">
          <div class="column col-3">
            <h4>spacing-wide</h4>
            자간: +0.5px
          </div>
          <div class="column">
            <p class="spacing-wide">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic in ipsa laboriosam magnam, quis sed? Aspernatur ducimus, facere harum, in inventore, officiis perferendis rem repellendus tenetur unde ut velit!</p>
            <br>
            <p class="spacing-wide">하늘에는 별 오는 보고, 새겨지는 파란 있습니다. 우는 무성할 보고, 된 내 봅니다. 이름을 위에 하나에 쓸쓸함과 남은 헤는 아침이 듯합니다. 라이너 못 이름자를 거외다. 하나에 하나에 불러 했던 봄이 새겨지는 아침이 내린 봅니다. 이름과, 딴은 토끼, 부끄러운 남은 이국 된 버리었습니다. 이국 벌레는 별 위에 있습니다. 벌써 위에도 가득 다하지 비둘기, 노루, 하나에 지나고 어머님, 까닭입니다. 너무나 가을 동경과 이런 있습니다. 라이너 시인의 패, 아름다운 어머니, 위에도 있습니다. 어머니, 이국 무성할 하나에 아이들의 써 잔디가 거외다.</p>
          </div>
        </div>
        <div class="wrapper ga-grid right-side">
          <div class="column col-3">
            <h4>spacing-normal</h4>
          </div>
          <div class="column">
            <p class="spacing-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic in ipsa laboriosam magnam, quis sed? Aspernatur ducimus, facere harum, in inventore, officiis perferendis rem repellendus tenetur unde ut velit!</p>
            <br>
            <p class="spacing-normal">하늘에는 별 오는 보고, 새겨지는 파란 있습니다. 우는 무성할 보고, 된 내 봅니다. 이름을 위에 하나에 쓸쓸함과 남은 헤는 아침이 듯합니다. 라이너 못 이름자를 거외다. 하나에 하나에 불러 했던 봄이 새겨지는 아침이 내린 봅니다. 이름과, 딴은 토끼, 부끄러운 남은 이국 된 버리었습니다. 이국 벌레는 별 위에 있습니다. 벌써 위에도 가득 다하지 비둘기, 노루, 하나에 지나고 어머님, 까닭입니다. 너무나 가을 동경과 이런 있습니다. 라이너 시인의 패, 아름다운 어머니, 위에도 있습니다. 어머니, 이국 무성할 하나에 아이들의 써 잔디가 거외다.</p>
          </div>
        </div>
        <div class="wrapper ga-grid right-side">
          <div class="column col-3">
            <h4>spacing-narrow</h4>
            자간: -0.5px
          </div>
          <div class="column">
            <p class="spacing-narrow">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic in ipsa laboriosam magnam, quis sed? Aspernatur ducimus, facere harum, in inventore, officiis perferendis rem repellendus tenetur unde ut velit!</p>
            <br>
            <p class="spacing-narrow">하늘에는 별 오는 보고, 새겨지는 파란 있습니다. 우는 무성할 보고, 된 내 봅니다. 이름을 위에 하나에 쓸쓸함과 남은 헤는 아침이 듯합니다. 라이너 못 이름자를 거외다. 하나에 하나에 불러 했던 봄이 새겨지는 아침이 내린 봅니다. 이름과, 딴은 토끼, 부끄러운 남은 이국 된 버리었습니다. 이국 벌레는 별 위에 있습니다. 벌써 위에도 가득 다하지 비둘기, 노루, 하나에 지나고 어머님, 까닭입니다. 너무나 가을 동경과 이런 있습니다. 라이너 시인의 패, 아름다운 어머니, 위에도 있습니다. 어머니, 이국 무성할 하나에 아이들의 써 잔디가 거외다.</p>
          </div>
        </div>
        <div class="wrapper ga-grid right-side">
          <div class="column col-3">
            <h4>spacing-narrower</h4>
            자간: -1px
          </div>
          <div class="column">
            <p class="spacing-narrower">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic in ipsa laboriosam magnam, quis sed? Aspernatur ducimus, facere harum, in inventore, officiis perferendis rem repellendus tenetur unde ut velit!</p>
            <br>
            <p class="spacing-narrower">하늘에는 별 오는 보고, 새겨지는 파란 있습니다. 우는 무성할 보고, 된 내 봅니다. 이름을 위에 하나에 쓸쓸함과 남은 헤는 아침이 듯합니다. 라이너 못 이름자를 거외다. 하나에 하나에 불러 했던 봄이 새겨지는 아침이 내린 봅니다. 이름과, 딴은 토끼, 부끄러운 남은 이국 된 버리었습니다. 이국 벌레는 별 위에 있습니다. 벌써 위에도 가득 다하지 비둘기, 노루, 하나에 지나고 어머님, 까닭입니다. 너무나 가을 동경과 이런 있습니다. 라이너 시인의 패, 아름다운 어머니, 위에도 있습니다. 어머니, 이국 무성할 하나에 아이들의 써 잔디가 거외다.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
</PageView>
</template>

<style lang="scss" scoped>
.mainWord {
  font-size: 6em;
}
.typo-block p {
  letter-spacing: 5px;
  font-weight: 500;
}
.lh-guide {
  display: inline-block;
  font-size: 3em;
  border-top: 1px solid var(--brd);
  border-bottom: 1px solid var(--brd);
}
</style>
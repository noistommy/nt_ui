<template>
  <h1>스타일 가이드</h1>
  <div class="style-guide-container">
    <div class="ga-grid">
      <div class="column col-6">
        <div class="typo">
          <div class="sg-title">Typography</div>
          <div class="ga-grid">
            <div class="column col-3 mainWord">Aa</div>
            <div class="column col-8 mainWord">가나다</div>
            <div class="column col-10">
              <p class="secondary-text">Spoqa Han Sans 스포카 한 산스</p>
            </div>
          </div>
        </div>
        <div class="font-weight">
          <div class="sg-title">Font Weight</div>
          <div class="light">Light 100 Spoqa Han Sans</div>
          <div class="regular">Regular 400 Spoqa Han Sans</div>
          <div class="bold">Bold 900 Spoqa Han Sans</div>
        </div>
      </div>
      <div class="column col-6">
        <div class="heading">
          <div class="sg-title">Heading</div>
          <h1>H1 Spoqa Han Sans (28px)</h1>
          <h2>H2 Spoqa Han Sans (24px)</h2>
          <h3>H3 Spoqa Han Sans (18px)</h3>
          <h4>H4 Spoqa Han Sans (16px)</h4>
          <h5>H5 Spoqa Han Sans (14px)</h5>
        </div>
      </div>
      <div class="column col-12">
        <div class="size">
          <div class="sg-title">Size</div>
        </div>
      </div>
      <div class="column col-12">
        <div class="colors">
          <div class="sg-title">Colors</div>
        </div>
      </div>
      <div class="column col-12">
        <div class="buttons">
          <div class="sg-title">buttons</div>
        </div>
      </div>
      <div class="column col-12">
        <div class="form">
          <div class="sg-title">Form</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StyleGuide'
}
</script>

<style lang="scss" scoped>
.style-guide-container {
  width: 1024px;
  border: 1px solid #d6d6d6;
  padding: 10px;
  .column > div {
    //background-color: #f2f2f2;
    margin-bottom: 10px;
    &:last-child {
      margin: 0;
    }
  }
  .sg-title {
    font-weight: 900;
    color: #EE9033;
  }
}
.typo {
  .mainWord {
    font-size: 5em;
  }
  p {
    font-size: 1.5em;
    font-weight: 900;

  }
}
</style>
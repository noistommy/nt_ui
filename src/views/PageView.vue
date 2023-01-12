<script setup>
</script>

<template>
  <div class="page-contents-header">
    <slot name="header"></slot>
  </div>
  <div class="page-contents-body">
<!--    <div class="page-contents-title">-->
<!--      <h1>유형</h1>-->
<!--    </div>-->
    <slot name="body"></slot>
  </div>
</template>


<style lang="scss">
.page-contents-header {
  padding: 30px;
  border-bottom: 1px solid #d6d6d6;
  .main-title {
    font-size: 3rem;
  }
  .sub-title {
    font-size: 1.8em;
  }
}
.page-contents-body {
  position: relative;
  max-width: 100%;
  margin-left: 3em;
  margin-right: 300px;
  padding: 2em 0 7em;
  .page-contents-title {
    margin-bottom: 50px;
    border-bottom: 1px solid #d6d6d6;
  }
}

section {
  padding: 20px;
  .section-header {
    padding-bottom: 30px;
    .section-title {
      .title {
        border-left: 3px solid #9180B4;
        padding: 0 10px;
        margin-bottom: 10px;
      }
      .sub-title {
        color: #909090;
        margin-left: 10px;
      }
    }
  }
  .section-body {
    .wrapper {
      margin-bottom: 10px;
    }
  }
}

</style>

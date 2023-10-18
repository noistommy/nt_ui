<script setup>
</script>

<template>
  <div class="page-contents-header">
    <slot name="header"></slot>
  </div>
  <div class="page-content-usage">
    <slot name="usage"></slot>
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
.page-content-usage,
.page-contents-body {
  position: relative;
  max-width: 1024px;
  margin: 0 3em;
  padding: 2em 0 7em;
  .page-contents-title {
    margin-bottom: 50px;
    border-bottom: 1px solid #d6d6d6;
  }
}
.page-content-usage .ga-card {
  .footer {
    padding: 40px;
  }
}

.ga-list.code {
  .item:not(.secondary-text) {
    color: #909090;
    font-weight: 700;
  }
  .depth-1 { margin-left: 50px;}
  .depth-2 { margin-left: 100px;}
  .depth-3 { margin-left: 150px;}
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
      padding: 10px;
      margin-bottom: 10px;
      &.inline {
        display: inline-block;
      }
      h4, h5 {
        margin: .5em 0 1em;
      }
    }
  }
}

</style>

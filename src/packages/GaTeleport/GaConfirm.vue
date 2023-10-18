<template>
  <div class="ga-modal" :style="{ '--offset': `${(id % 5) * 20}px` }">
    <div class="ga-modal-background" />
    <div class="ga-modal-container">
      <div class="modal confirm">
        <div class="modal-header">
          <div class="title">{{ props.title }}</div>
          <div class="close-btn" @click="$emit('close')">
            <i class="fa fa-xmark"></i>
          </div>
        </div>
        <div class="modal-contents">
          <div class="contents">
            <div>{{ props.description }}</div>
          </div>
        </div>
        <div class="modal-footer align-right">
          <button class="ga-button primary" @click="allClose">확인</button>
          <button class="ga-button secondary outline" @click="closeModal">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaConfirm',
  data() {
    return {
      isLoading: false
    }
  },
  props: {
    id: Number,
    options: Object,
    props: Object
  },
  computed: {
    getWidth() {
      return this.width + 'px'
    }
  },
  methods: {
    allClose() {
      this.props.result(this.props.params)
      this.$gaModal.closeAll()
    },
    closeModal() {
      this.$emit('close')
      this.$gaModal.close()
    }
  }
}
</script>

<style lang="scss"></style>

<template>
  <teleport to="body">
    <template v-if="isModals">
      <template v-for="modal in modalRef" :key="modal.id">
        <template v-if="modal.comp === 'confirm'">
          <ga-confirm v-bind="modal" />
        </template>
        <template v-else>
          <ga-modal title="Test" v-bind="modal" />
        </template>
      </template>
    </template>
  </teleport>
</template>

<script>
import GaModal from './GaModal'
import GaConfirm from './GaConfirm'
export default {
  name: 'GaTeleport',
  components: { GaModal, GaConfirm },
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      isOpen: false,
      modalRef: [],
      modalIndex: 0
    }
  },
  computed: {
    isModals() {
      return this.modalRef.length > 0
    }
  },
  mounted() {
    const { emitter } = this.$gaModal
    emitter.on('show-modal', modalRef => {
      modalRef.id = this.modalIndex
      modalRef.options = { ...this.options, ...modalRef.options }
      this.modalRef.push(modalRef)
      this.modalIndex++
    })
    emitter.on('close-modal', modalId => {
      console.log(modalId)
      this.modalRef.pop()
      this.modalIndex--
    })
    emitter.on('close-all-modal', () => {
      this.isOpen = false
      this.modalRef = []
      this.modalIndex = 0
    })
  },
  methods: {
    toggleMode() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped />

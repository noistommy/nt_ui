<template>
  <label class="ga-switch" :class="[type, { round }, { inside }, { reverse }, color, disabled]">
    <input v-model="switchValue" type="checkbox" checked />
    <template v-if="type === 'slide'">
      <span class="switch" />
    </template>
    <template v-if="type === 'button'">
      <div class="on active"><slot name="on">ON</slot></div>
      <div class="off"><slot name="off">OFF</slot></div>
    </template>
  </label>
</template>

<script>
export default {
  name: 'GaSwitch',
  props: {
    type: {
      type: String,
      default: 'slide'
    },
    round: {
      type: Boolean,
      default: false
    },
    inside: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    onValue: {
      type: [String, Boolean],
      default: true
    },
    offValue: {
      type: [String, Boolean],
      default: false
    },
    modelValue: {
      type: [String, Boolean],
      default: true
    },
    minWidth: {
      type: String,
      default: '42'
    },
    color: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      switchValue: true
    }
  },
  computed: {
    setMinimumWidth() {
      return { minWidth: `${this.minWidth}px` }
    }
  },
  watch: {
    modelValue() {
      this.switchValue = this.modelValue === this.onValue
    },
    switchValue(value) {
      const newValue = value ? this.onValue : this.offValue
      this.$emit('update:modelValue', newValue)
    }
  },
  mounted() {
    this.switchValue = this.modelValue === this.onValue
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->

<template>
  <label class="ga-switch" :class="[type, { round }, { inside }]">
    <input v-model="switchValue" type="checkbox" checked />
    <template v-if="type === 'slide'">
      <span class="switch" />
    </template>
    <template v-if="type === 'button'">
      <span class="on active"><slot name="on">ON</slot></span>
      <span class="off"><slot name="off">OFF</slot></span>
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

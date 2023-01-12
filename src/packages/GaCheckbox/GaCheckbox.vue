<template>
  <div class="ga-checkbox" :class="[{ checked: toggleValue }, type]">
    <label class="label">
      <input type="checkbox" v-model="toggleValue" :value="label" @change="toggleCheck" />
      <slot>
        <span v-if="label">{{ label }}</span>
      </slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'GaCheckbox',
  data() {
    return {
      toggleValue: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'checkbox' // checkbox || radio
    },
    label: {
      type: String,
      default: ''
    },
    modelValue: Boolean
  },
  watch: {
    modelValue() {
      this.toggleValue = this.modelValue
    }
  },
  mounted() {
    this.toggleValue = this.modelValue
  },
  methods: {
    toggleCheck() {
      this.$emit('update:modelValue', this.toggleValue)
    }
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->

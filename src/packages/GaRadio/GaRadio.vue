<template>
  <div class="ga-checkbox" :class="[{ checked: checkSelect }, type]">
    <label class="label">
      <input type="radio" v-model="toggleValue" :value="label" @change="toggleChange" />
      <slot>
        <span>{{ label }}</span>
      </slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'GaRadio',
  data() {
    return {
      toggleValue: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'radio' // checkbox || radio
    },
    label: {
      type: String,
      default: ''
    },
    modelValue: String
  },
  computed: {
    checkSelect() {
      return this.toggleValue === this.label
    }
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
    toggleChange() {
      this.$emit('update:modelValue', this.toggleValue)
    }
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->

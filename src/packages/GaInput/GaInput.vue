<template>
  <div class="ga-input" :class="[{ disabled }, { readonly }, { underline }, { transparent }, { compact }, { fluid }]">
    <input
      type="text"
      v-model="inputValue"
      :class="[setAlignText, readonly]"
      :placeholder="placeholder"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  name: 'GaInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: '입력하세요'
    }
    // use icon
  },
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
    // Input 내 데이터 정렬 : align-left || align-center || align-right
    setAlignText() {
      if (this.textAlign === null) return ''
      return `align-${this.textAlign}`
    }
  },
  created() {
    this.inputValue = this.modelValue
  },
  methods: {
    updateValue() {
      this.$emit('update:modelValue', this.inputValue)
    }
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->

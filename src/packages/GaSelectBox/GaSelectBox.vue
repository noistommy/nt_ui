<template>
  <div class="ga-select-box" :class="[{open:isOpen}, type, {fluid}, {compact}, {spinner}, spinnerPos]" :style="{minWidth: minWidth}">
    <div class="selected-item" ref="result" @click="toggleOpen">
      <i class="item-icon" v-if="itemIcon" :class="selectedOption.icon"></i>
      {{selectedOption.option || defaultText}}
      <i class="select-icon" :class="`fas fa-chevron-${isOpen ? 'up' : 'down'}`"></i>
    </div>
    <template v-if="spinner">
      <div class="spinner-control left" @click.stop="selectPrev">
        <i class="fas fa-minus"></i>
      </div>
      <div class="spinner-control right" @click.stop="selectNext">
        <i class="fas fa-plus"></i>
      </div>
    </template>
    <transition name="extend-fade">
      <div class="select-menu" :class="setSelectedType" v-if="isOpen" :style="{marginTop: `${menuOffset}px`, ...setSelectPos}">
        <div class="ga-list selection" :class="[{compact}]">
          <div class="ga-item item option-item" :class="[{selected: currentIndex === index}, {icon: itemIcon}]"
               v-for="(option, index) in optionList" :key="index"
               @click="onClick(option, index)">
            <i :class="option.icon" class="item-icon" v-if="itemIcon && option.icon" />
            {{ option[optionName] }}
            <span class="check-icon" v-if="selectedType.includes('icon') && currentIndex === index">
                <i :class="`fa fa-${selectedIcon}`"></i>
            </span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'GaSelectBox',
  data() {
    return {
      isOpen: false,
      current: {},
      currentIndex: 0,
      direction: 'down'
    }
  },
  props: {
    defaultText: {
      type: String,
      default: 'Select Item'
    },
    visible: {
      type: Boolean,
      default: false
    },
    optionList: Array,
    currentValue: [Number, String],
    keyName: String,
    optionName: {
      type: String,
      default: 'option'
    },
    valueName: {
      type: String,
      default: 'value'
    },
    extraOption: [String,Object],
    type: {
      type: String,
      default: 'dropdown'
    },
    itemIcon: {
      type: Boolean,
      default: false
    },
    minWidth: {
      type: String,
      default: '14em'
    },
    itemHeight: {
      type: Number,
      default: 37
    },
    selectedType: {
      type: Array,
      default: () => {
        return ['bg']
      } // 'bg or 'icon'
    },
    selectedIcon: {
      type: String,
      default: 'check'
    },
    noSelect: Boolean,
    fluid: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    spinner: {
      type: Boolean,
      default: false
    },
    spinnerPos: {
      type: String,
      default: '' // '' || right
    },
    menuOffset: {
      type: String,
      default: '0'
    },
    modelValue: [String, Object]
  },
  computed: {
    setSelectedType() {
      return this.selectedType.map(item => `selected-${item}`)
    },
    selectedOption() {
      let option = '';
      let icon = '';
      this.optionList.forEach((op, i) => {
        if(op[this.valueName] === this.current[this.valueName]) {
          option = op[this.optionName]
          icon = op.icon
          this.currentIndex = i;
        }
      });
      return {option, icon};
    },
    setSelectPos() {
      let pos = this.type === 'dropdown' ? this.itemHeight : this.currentIndex * this.itemHeight * -1;
      if(this.type === 'dropdown') {
        pos = this.direction === 'down' ? {top: '100%', bottom: 'auto'} : {bottom: '100%', top: 'auto'}
      } else {
        pos = {top : this.currentIndex * this.itemHeight * -1 + 'px'}
      }
      return pos
    }
  },
  created() {
    this.current = this.currentValue;
    this.current = this.modelValue
    this.isOpen = this.visible
  },
  mounted() {
    document.addEventListener('click', () => this.showMenu(false))
  },
  unmounted() {
    document.removeEventListener('click', () => this.showMenu(false))
  },
  methods: {
    onClick(target, i) {
      this.current = target;
      this.currentIndex = i;
      this.$emit('update', target, this.extraOption)
      this.isOpen = false;
    },
    toggleOpen(e) {
      this.setDropdownDirection(e)
      this.isOpen = !this.isOpen;
    },
    showMenu(value = true) {
      if(this.$el.contains(event.target)) return;
      if(this.isOpen) value = false;
      this.isOpen = value;
    },
    setDropdownDirection(e) {
      let posInfo = e.target.getBoundingClientRect();

      if(window.innerHeight - posInfo.bottom < 37*(this.optionList.length + 1)) {
        this.direction = 'up'
      } else {
        this.direction = 'down'
      }
    },
    selectPrev() {
      const prev = this.currentIndex === 0 ? this.optionList.length - 1 : this.currentIndex - 1;
      const prevValue = this.optionList[prev]
      this.onClick(prevValue, prev)
    },
    selectNext() {
      const next = this.currentIndex === this.optionList.length - 1 ? 0 : this.currentIndex + 1;
      const nextValue = this.optionList[next]
      this.onClick(nextValue, next)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
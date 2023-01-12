<template>
  <div class="ga-tabs" :class="[{ control: setControl }, tabType]">
    <div class="tab-menu">
      <div
        v-for="item in tabMenu"
        :key="item.name"
        :class="{ active: activeTab === item.name }"
        :style="setTabStyle"
        class="tab-item tab"
        @click="selectTab(item)"
      >
        <template v-if="tabType === 'browser'">
          <span class="tabText ellipsis">{{ item.title }}</span>
          <div
            v-if="tabType === 'browser' && tabMenu.length > 1"
            class="btn-close ga-button icon tiny circle"
            @click.stop="closeTab(item)"
          >
            <i class="fa fa-close"></i>
          </div>
        </template>
        <template v-else>
          {{ item.title || item.name }}
        </template>
      </div>
    </div>
    <!--<template v-if="setControl">
      <div class="controller control-left">
        <i class="fa fa-caret-left"></i>
      </div>
      <div class="controller control-right">
        <i class="fa fa-caret-right"></i>
      </div>
    </template>-->
  </div>
</template>

<script>
export default {
  name: 'GaTabs',
  data() {
    return {
      container: 0
    }
  },
  props: {
    tabMenu: {
      type: Array,
      default: () => {
        return []
      }
    },
    tabType: {
      type: String,
      default: ''
    },
    activeTab: {
      type: String,
      default: ''
    },
    tabWidth: {
      type: Number,
      default: null
    }
  },
  computed: {
    tabLength() {
      return this.tabMenu.length
    },
    setControl() {
      return this.container < this.tabWidth * this.tabLength
    },
    setTabStyle() {
      if (!this.tabWidth) return
      return { width: `${this.tabWidth}px` }
    }
  },
  mounted() {
    this.getContainer()
    window.addEventListener('resize', this.getContainer)
  },
  unmounted() {
    window.removeEventListener('resize', this.getContainer)
  },
  methods: {
    selectTab(target) {
      this.$emit('select', target)
    },
    closeTab(target) {
      this.$emit('close', target)
    },
    getContainer() {
      const container = this.$el.offsetWidth
      this.container = container ? container : 0
    }
  }
}
</script>

<style lang="scss" scoped>
.controller {
  cursor: pointer;
  position: absolute;
  top: 0;
  &.control-left {
    left: 0;
  }
  &.control-right {
    right: 0;
  }
}
</style>

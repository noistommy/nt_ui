<template>
  <div v-if="this.exposeUse ? treeData.isExposed : true" class="ga-tree-list" :class="{ hide: currentLevel < 0 }">
    <div class="ga-tree-list-title" :class="{ selected: selectedNode === treeData.id }">
      <div
        class="arrow-wrap"
        :class="[{ expanded: isExpanded }]"
        :style="{ marginLeft: setLevelIndent + 'px' }"
        @click.stop="toggleExpand"
      >
        <slot name="arrow">
          <div v-show="isChildren">
            <i v-if="!isExpanded" class="fa-regular fa-square-plus"></i>
            <i v-else class="fa-regular fa-square-minus"></i>
          </div>
        </slot>
      </div>
      <div v-if="type === 'check'" class="title-wrap ellipsis">
        <ga-checkbox
          v-model="isChecked"
          @update:modelValue="checkItem({ check: isChecked, id: treeData.id })"
        ></ga-checkbox>
        <span class="tree-icon" v-if="isTitleIcon">
          <slot name="arrow">
            <i :class="treeData.icon"></i>
          </slot>
        </span>
        <span class="ellipsis">{{ treeData.title }}</span>
      </div>
      <div v-else class="title-wrap ellipsis" @click.stop="selectItem(treeData)">
        <span class="tree-icon" v-if="isTitleIcon">
          <slot name="arrow">
            <i :class="treeData.icon"></i>
          </slot>
        </span>
        <span class="ellipsis">{{ treeData.title }}</span>
      </div>
    </div>
    <transition name="expand">
      <div class="ga-tree-list-content" :class="{ open: isExpanded }" :style="hideStyle" v-if="isExpanded">
        <ga-tree-list
          v-for="child in treeData[childrenKey]"
          :key="child.id"
          :tree-data="child"
          :level="currentLevel + 1"
          :set-limit="setLimit"
          :max-wrap-size="maxWrapSize"
          :all-expanded="allExpanded"
          :children-key="childrenKey"
          :selected-node="selectedNode"
          :checked="child.isChecked"
          :expose-use="this.exposeUse"
          @check="checkItem"
          @select="selectItem"
          @toggle="setLevel"
          @change="changeLevel"
        />
      </div>
    </transition>
    <div class="show-level-btn" @click="setBack"></div>
  </div>
</template>
<script>
import GaCheckbox from '../GaCheckbox/GaCheckbox'
export default {
  name: 'ga-tree-list',
  components: {
    GaCheckbox
  },
  data() {
    return {
      isExpanded: true,
      isChecked: false,
      //showLevel: 4,
      currentLevel: this.level,
      limitText: 300,
      pathText: '',
      isChildren: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'check'
    },
    rootId: {
      type: Number,
      default: 0
    },
    treeData: {
      type: Object,
      default: () => {
        return {}
      }
    },
    level: {
      type: Number,
      required: true
    },
    maxWrapSize: {
      type: Number,
      default: 236
    },
    setLimit: {
      type: Number,
      default: -1
    },
    allExpanded: {
      type: Boolean,
      default: false
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    selectedNode: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    exposeUse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    setLevelIndent() {
      return this.level * 20
    },
    isTitleIcon() {
      return this.treeData.icon !== '' && this.treeData.icon !== undefined
    },
    limitTextSize() {
      let itemSize = this.isTitleIcon ? 20 : 0
      return this.maxWrapSize - this.setLevelIndent - itemSize - 20
    },
    isLimit() {
      return this.setLimit > 0
    },
    hideStyle() {
      return this.isExpanded ? {} : { width: 0, height: 0 }
    }
  },
  watch: {
    level() {
      this.currentLevel = this.level
      if (this.isLimit && this.currentLevel >= this.setLimit - 1) {
        this.isExpanded = false
      }
    },
    treeData() {
      this.isChildren = this.treeData[this.childrenKey].length > 0
    },
    checked(value) {
      this.isChecked = value
    },
    allExpanded(value) {
      this.isExpanded = value
    },
    selectedNode() {
      if (this.selectedNode === this.treeData.id) {
        // this.selectItem(this.treeData)
        this.$emit('select', this.treeData, null, this.rootId)
      }
    }
  },
  created() {
    this.isExpanded = this.allExpanded ? true : this.treeData.isExpanded
    this.isChecked = this.checked
  },
  mounted() {
    this.isChildren = this.treeData[this.childrenKey].length > 0
    if (this.selectedNode === this.treeData.id) {
      this.$emit('select', this.treeData, null, this.rootId)
    }
  },
  methods: {
    toggleExpand() {
      if (this.treeData[this.childrenKey].length === 0) return
      this.isExpanded = !this.isExpanded
      this.$emit('toggle', this.isExpanded, this.level)
    },
    setLevel(state, level) {
      if (!this.isLimit) return
      if (this.setLimit === level + 1 || !state) {
        this.$emit('change', state)
      }
    },
    changeLevel(value) {
      if (!this.isLimit) return
      if (value) {
        this.currentLevel--
      }
      this.$emit('change', value)
    },
    setBack() {
      this.$emit('change', false)
    },
    checkItem(data) {
      this.$emit('check', data)
    },
    selectItem(data, path = null) {
      if (path === null) path = []
      path.unshift(this.treeData.title)
      this.$emit('select', data, path, this.rootId)
      this.isExpanded = true
    }
  }
}
</script>
<style lang="scss" scoped>
$content-max-height: 300px;
$transition-duration: 0.15s;
$transition-timing-function: linear;
$list-border-color: #d6d6d6;
$title-background-color: #f8f8f8;
$title-color: #333333;
$arrow-color: #909090;
$content-padding: 11px;
$navBgSelectedColor: #dae8f8;
.ga-tree-list {
  font-size: 1rem;
  font-weight: 400;
  .ga-tree-list-title {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 10px;
    &:hover {
      background-color: #eff4fc;
    }
    .title-wrap {
      padding: 5px 0;
      color: $title-color;
      position: relative;
      & > span {
        display: inline-block;
        padding: 0 4px;
      }
      .tree-icon {
        color: #909090;
        line-height: 1;
        .fa-folder-open {
          color: #f9da00;
        }
      }
    }
    .arrow-wrap {
      cursor: pointer;
      min-width: 20px;
      font-size: 16px;
      padding: 0 3px;
      justify-content: flex-end;
      color: $title-color;
      & > div {
        display: flex;
      }
    }
    .title-wrap,
    .arrow-wrap {
      display: flex;
      align-items: center;
      .ga-checkbox {
        margin-right: 0;
        label {
          padding-left: 20px;
        }
      }
    }
    &.selected {
      background-color: $navBgSelectedColor;
      font-weight: 600;
      .title-wrap,
      .tree-icon {
        color: #2985db;
      }
    }
  }
  .ga-tree-list-content {
    transition: all 350ms;
    overflow: hidden;
    visibility: hidden;
    &.open {
      visibility: visible;
    }
  }
  .show-level-btn {
    display: none;
  }
  &.hide {
    & > .ga-tree-list-title {
      display: none;
    }
    & > .show-level-btn {
      display: flex;
      text-align: center;
      cursor: pointer;
      width: 15px;
      height: 100%;
      border-left: 1px solid #ebebeb;
      position: absolute;
      top: 0;
      background-color: #f2f2f2;
      transition: all 250ms ease;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      margin-left: -10px;
      &:after {
        content: '\e9fb';
        font-family: 'gi-icons';
        color: #909090;
        position: absolute;
        top: 50%;
        left: 0;
      }
      &:hover {
        margin-left: 0;
      }
      i {
        font-size: 0.5em;
      }
    }
  }
}
.ga-tree-list-title {
  &:hover {
    background-color: #ffffff;
  }
}

.ellipsis {
  width: 100%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.expand-enter-active,
.expand-leave-active {
  max-height: 1000px;
}

.expand-enter,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>

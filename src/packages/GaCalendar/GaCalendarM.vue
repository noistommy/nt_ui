<template>
  <div class="ga-calendar" :class="{ bordered: gridBorder }">
    <div class="calendar-head">
      <span class="control-btn prev-btn" @click.stop="prevYear">
        <i class="fa fa-chevron-left"></i>
      </span>
      <div class="current-date">
        <span class="h3">{{ currentYear }}</span>
      </div>
      <span class="control-btn next-btn" @click.stop="nextYear">
        <i class="fa fa-chevron-right"></i>
      </span>
    </div>
    <div class="calendar-main">
      <div class="month-cell-wrapper cell-wrapper grid">
        <template v-for="(month, i) in monthList" :key="month">
          <div class="cell month-cell" :class="{selected: i + 1 === selectedMonth}" @click="selectDate(i + 1 )">
            <span class="tile-num">{{ i + 1 }}</span>
            <span class="tile-name">{{ month }}</span>
          </div>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaCalendarM',
  props: {
    current: {
      type: [String, Object, Date],
      default: null
    },
    gridBorder: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      now: {},
      monthList: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      selectedYear: null,
      selectedMonth: null,
      selectedDate: null,
      currentYear: null,
      currentMonth: null
    }
  },
  computed: {
    setCurrent() {
      return typeof this.current === 'object' ? this.current : new Date(this.current)
    },
  },
  created() {
    this.now = this.getDateObject(new Date())
    this.init()
  },
  methods: {
    init() {
      const currentDate = this.current ? this.setCurrent : new Date()
      this.currentYear = this.selectedYear = currentDate.getFullYear()
      this.currentMonth = this.selectedMonth = currentDate.getMonth() + 1
    },
    selectDate(m) {
      this.selectedYear = this.currentYear
      this.selectedMonth = m
      this.selectedDate = this.setDateObject(m)
      this.$emit('select-day', this.selectedDate)
    },
    getDateObject(date) {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = 1
      return { year, month, day}
    },
    setDateObject(m) {
      let monthStr = this.setZero(m)
      let dayStr = 1
      let setDateStr = `${this.currentYear}-${monthStr}-${dayStr}`
      let currentDate = new Date(setDateStr)
      // if (t === 0) currentDate = this.convertTime(currentDate, t);
      return currentDate
    },
    prevYear() {
      this.currentYear--
    },
    nextYear() {
      this.currentYear++
    },
    setZero(value) {
      return value < 10 ? `0${value}` : value
    }
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->

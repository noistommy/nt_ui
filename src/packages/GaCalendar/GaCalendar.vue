<template>
  <div class="ga-calendar" :class="{ bordered: gridBorder }">
    <div class="calendar-head">
      <span class="control-btn prev-btn" @click.stop="prevMonth">
        <i class="fa fa-chevron-left"></i>
      </span>
      <div class="current-date">
        <span class="h3">{{ currentYear }}년 {{ setZero(currentMonth) }}월</span>
        <span v-if="showToday" class="now small" @click.stop="setToday">
          <i class="fa fa-circle-t"></i>
          {{ now.year }}년 {{ now.month }}월 {{ now.day }}일
        </span>
      </div>
      <span class="control-btn next-btn" @click.stop="nextMonth">
        <i class="fa fa-chevron-right"></i>
      </span>
    </div>
    <div class="calendar-main">
      <div class="cell-wrapper grid">
        <template v-for="(week, i) in weekList" :key="week">
          <div class="cell week-cell" :style="{ '--x': i, '--y': '0' }">
            <span class="tile">{{ week }}</span>
          </div>
        </template>
        <template v-for="(day, j) in calendarMatrix" :key="j">
          <div
            class="cell"
            :style="{ '--x': j % 7, '--y': parseInt(j / 7) + 1 }"
            :class="[
              { disabled: j < startIndex || j >= startIndex + lastDayOfMonth },
              { sun: j % 7 === 0 },
              { sat: j % 7 === 6 },
              { today: isToday === day },
              { selected: selectedYear === currentYear && selectedMonth === currentMonth && currentDay === day }
            ]"
            @click="selectDate(day)"
          >
            <span class="today" v-if="isToday === day"></span>
            <span class="highlight"></span>
            <span class="tile">{{ day }}</span>
          </div>
        </template>
        <!--<template v-if="calendarMatrix.length === 35">
          <div class="cell disabled" v-for="day in 7" :key="day"></div>
        </template>-->
      </div>
    </div>
    <div class="calendar-extra"></div>
  </div>
</template>

<script>
import { setCalendar, getStartDay, lastDayList } from './calendar'
export default {
  name: 'GaCalendar',
  props: {
    current: {
      type: [String, Object, Date],
      default: null
    },
    gridBorder: {
      type: Boolean,
      default: false
    },
    showToday: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      now: {},
      // weekList: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S'],
      weekList: ['일', '월', '화', '수', '목', '금', '토'],
      selectedDate: new Date(),
      selectedYear: null,
      selectedMonth: null,
      currentYear: null,
      currentMonth: null,
      currentDay: null,
      startIndex: 0,
      calendarMatrix: []
    }
  },
  computed: {
    setCurrent() {
      return typeof this.current === 'object' ? this.current : new Date(this.current)
    },
    lastDayOfMonth() {
      return lastDayList[this.currentMonth - 1]
    },
    isToday() {
      return this.currentYear === this.now.year && this.currentMonth === this.now.month ? this.now.day : 0
    }
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
      this.currentDay = currentDate.getDate()
      this.renderCalendar()
    },
    selectDate(d) {
      this.selectedYear = this.currentYear
      this.selectedMonth = this.currentMonth
      this.currentDay = d
      this.selectedDate = this.setDateObject(d)
      this.$emit('select-day', this.selectedDate)
    },
    getDateObject(date) {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return { year, month, day }
    },
    setDateObject(d) {
      let monthStr = this.currentMonth < 10 ? `0${this.currentMonth}` : this.currentMonth
      let dayStr = d < 10 ? `0${d}` : d
      let setDateStr = `${this.currentYear}-${monthStr}-${dayStr}`
      let currentDate = new Date(setDateStr)
      // if (t === 0) currentDate = this.convertTime(currentDate, t);
      return currentDate
    },
    prevMonth() {
      this.calendarMatrix = []
      if (this.currentMonth === 1) {
        this.currentYear--
        this.currentMonth = 12
      } else {
        this.currentMonth--
      }
      this.renderCalendar()
      // this.setPointedDate()
    },
    nextMonth() {
      this.calendarMatrix = []
      if (this.currentMonth === 12) {
        this.currentYear++
        this.currentMonth = 1
      } else {
        this.currentMonth++
      }
      this.renderCalendar()
    },
    setToday() {
      this.currentYear = this.now.year
      this.currentMonth = this.now.month
      this.renderCalendar()
      this.selectDate(this.now.day)
    },
    renderCalendar() {
      this.startIndex = getStartDay(this.currentYear, this.currentMonth)
      this.calendarMatrix = setCalendar(this.currentYear, this.currentMonth)
    },
    setZero(value) {
      return value < 10 ? `0${value}` : value
    }
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->

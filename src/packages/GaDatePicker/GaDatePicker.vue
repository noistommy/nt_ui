<template>
  <div class="ga-datepicker" :class="[{ fluid }]">
    <div class="ga-input icon right" :class="[{ transparent }, { fluid }]" @click="setOpen">
      <input type="text" v-model="selectedDate" class="insertDate" readonly />
      <i class="icon fa fa-calendar-days"></i>
    </div>
    <teleport to="body">
      <transition name="slide-fade">
        <div v-if="isOpen" class="datepicker teleport" :class="[direct]" :style="position">
          <template v-if="dateType === 'date'">
            <GaCalendar class="selection" :current="selectedDate" @select-day="setSelectDate" />
          </template>
          <template v-else>
            <GaCalendarM class="selection" :current="selectedDate" @select-day="setSelectDate" />
          </template>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import GaCalendar from '../GaCalendar/GaCalendar'
import GaCalendarM from '../GaCalendar/GaCalendarM'
// const regS = /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]|\s/g
const regW = /[A-Z|a-z]+/g
const regN = /[0-9]+/g

export default {
  name: 'GaDatePicker',
  components: { GaCalendar, GaCalendarM },
  props: {
    date: {
      type: [Date, String],
      default: new Date()
    },
    fluid: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    dateFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    timeFormat: {
      type: String,
      default: 'hh:mm:ss'
    },
    dateType: {
      type: String,
      default: 'date' // month
    }
  },
  data() {
    return {
      isOpen: false,
      selectedDate: null,
      direct: 'down',
      position: {},
    }
  },
  watch: {
    date() {
      this.selectedDate = typeof this.date === 'string' ? this.date : this.setDateFormat(this.date)
    }
  },
  mounted() {
    this.selectedDate = typeof this.date === 'string' ? this.date : this.setDateFormat(this.date)
    document.addEventListener('click', () => {
      this.setClose()
    })
    document.addEventListener('scroll', () => {
      this.setClose()
    })
  },
  unmounted() {
    document.removeEventListener('click', () => {
      this.setClose()
    })
    document.removeEventListener('scroll', () => {
      this.setClose()
    })
  },
  methods: {
    setOpen(value = true) {
      if (value) this.setPosition(event.target)
      if (this.isOpen) this.isOpen = false
      this.isOpen = value
    },
    setClose() {
      if (this.$el.contains(event.target)) return
      this.setOpen(false)
    },
    setSelectDate(payload) {
      this.selectedDate = this.setDateFormat(payload)
      this.$emit('update:date', this.selectedDate)
      this.setOpen(false)
    },
    setPosition(target) {
      const { width, height, top, left } = target.getBoundingClientRect()
      const ww = window.innerWidth
      const wh = window.innerHeight
      const directY = 400 < wh - (height + top) ? 'down' : 'up'
      const directX = 330 < ww - left ? 'left' : 'right'
      this.direct = `${directY}-${directX}`
      this.position = {
        top: directY === 'down' ? `${height + top + 10}px` : `${top - 400}px`,
        left: directX === 'left' ? `${left}px` : `${left - (330 - width)}px`
      }
    },
    setDateFormat(rawDate) {
      let newDate = this.dateFormat
      let formats, year, month, day
      if (typeof rawDate === 'string') {
        formats = this.dateFormat.match(regN)
        year = formats[0]
        month = formats[1]
        day = formats[2]
      } else {
        formats = this.dateFormat.match(regW)
        year = rawDate.getFullYear()
        month = rawDate.getMonth() + 1 < 10 ? '0' + (rawDate.getMonth() + 1) : rawDate.getMonth() + 1
        day = rawDate.getDate() < 10 ? '0' + rawDate.getDate() : rawDate.getDate()
      }
      newDate = newDate.replace(formats[0], year.toString())
      newDate = newDate.replace(formats[1], month.toString())
      newDate = newDate.replace(formats[2], day.toString())
      return newDate
    }
  }
}
</script>

<style lang="scss">
.datepicker {
  position: fixed;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.16);
  transform-origin: top;
  top: 0;
}
</style>

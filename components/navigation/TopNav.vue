<template>
  <nav id="neumorphism-navbar-main" class="fixed flex justify-between items-center w-full h-[5.625rem] top-0 z-40 py-4 bg-transparent ease-in-out duration-200">
    <div class="relative flex justify-between items-center w-full">
      <a href="#" class="navbar-brand shadow-soft w-[50px] h-[40px] min-w-[50px] max-w-[50px] py-2 px-4 rounded-[0.55rem] border border-light">
        <img class="navbar-brand-logo" src="https://demo.themesberg.com/neumorphism-ui/assets/img/brand/dark.svg" alt="Logo light">
      </a>

      <div class="menu-items-desktop lg:block hidden">
        <ul class="flex flex-row">
          <li class="nav-item p-2">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item p-2">
            <a href="#" class="nav-link">About</a>
          </li>
          <li class="nav-item p-2">
            <a href="#" class="nav-link">Skills</a>
          </li>
          <li class="nav-item p-2">
            <a href="#" class="nav-link">Work</a>
          </li>
          <li class="nav-item p-2">
            <a href="#" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>

      <div class="menu-actions">
        <ul class="flex flex-row items-center">
          <li class="nav-item m-[1.5rem] p-2">
            <a href="#" class="btn btn-primary p-2">Download</a>
          </li>
          <li class="nav-item m-[1.5rem] p-2 lg:hidden">
            <input class="checkbox" type="checkbox" name="" id="" @input="toggleDropdown('menu')"/>
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          </li>
        </ul>
      </div>

      <!-- Mobile Menu Items -->
      <div class="menu-items-mobile hidden lg:hidden">
        <ul class="flex flex-col">
          <li class="nav-item p-2">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item p-2">
            <a href="#" class="nav-link">About</a>
          </li>
          <li class="nav-item p-2">
            <a href="#" class="nav-link">Skills</a>
          </li>
          <li class="nav-item p-2">
            <a href="#" class="nav-link">Work</a>
          </li>
          <li class="nav-item p-2">
            <a href="#" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
      
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

import $ from 'jquery'

export default Vue.extend({
  name: 'NavigationTopNavComponent',
  data() {
    return {
      windowWidth: 0,
      count: {
        toggle: 0,
        responsive: 0
      }      
    }
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      if(newWidth >= 1024) {
        if(this.count.responsive % 2 == 0) {
          const x = document.getElementsByClassName('menu-items-mobile')[0]
          x.classList.remove('out');
          if(document.querySelectorAll('.menu-items-mobile.show').length == 0) {
            x.classList.add('hidden');
          }
          console.log('large: ', newWidth)
          this.count.responsive = 1
        }
      } else {
        if(this.count.responsive % 2 == 1) {
          console.log('small: ', newWidth)
          this.count.responsive = 0
        }
      }
    }
  },
  mounted() {
    // const element = document.getElementsByTagName('html')[0] as HTMLElement
    // element.setAttribute('class', 'dark')
  },
  created() {
    if(process.client) {
      this.windowWidth = window.innerWidth
      
      window.addEventListener('resize', this.onResize)
    }
  },
  methods: {
    toggleDropdown(state: String) {
      if(state == 'menu') {
        const frame = document.getElementsByClassName('menu-items-mobile')[0]
        if(this.count.toggle % 2 == 0) {
          frame.classList.remove('hidden');
          frame.classList.add('show');
          frame.classList.remove('out');
          this.count.toggle++
        } else {
          frame.classList.remove('show');
          frame.classList.add('out');
          this.count.toggle++
        }
      }
    },
    onResize() {
      this.windowWidth = window.innerWidth
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
})
</script>

<style>

</style>
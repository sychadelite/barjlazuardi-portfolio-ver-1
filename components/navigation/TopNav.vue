<template>
    <nav id="neumorphism-navbar-main" class="fixed flex justify-between items-center w-full h-[5.625rem] top-0 z-40 py-4 bg-transparent ease-in-out duration-200">
        <div class="relative flex justify-between items-center w-full max-h-[90px] mx-6 sm:mx-0">
            <a class="navbar-brand shadow-soft w-[50px] h-[40px] min-w-[50px] pt-[0.35rem] px-4 rounded-[0.55rem] border border-light mx-0 sm:mx-6">
                <img class="navbar-brand-logo" src="https://demo.themesberg.com/neumorphism-ui/assets/img/brand/dark.svg" alt="Logo light">
            </a>

            <div class="menu-items-desktop lg:block hidden">
                <ul class="nav-content flex flex-row">
                    <li class="nav-item home">
                        <a class="nav-link" @click.prevent="toSection('home')">Home</a>
                    </li>
                    <li class="nav-item about">
                        <a class="nav-link" @click.prevent="toSection('about')">About</a>
                    </li>
                    <li class="nav-item skills">
                        <a class="nav-link" @click.prevent="toSection('skills')">Skills</a>
                    </li>
                    <li class="nav-item works">
                        <a class="nav-link" @click.prevent="toSection('works')">Works</a>
                    </li>
                    <li class="nav-item contact">
                        <a class="nav-link" @click.prevent="toSection('contact')">Contact</a>
                    </li>
                </ul>
            </div>

            <div class="menu-actions lg:-mx-8">
                <ul class="flex flex-row items-center">
                    <li class="flex justify-center items-center mx-0 sm:mx-2 lg:mx-6 p-2 min-w-[13rem]">
                        <a class="btn btn-primary p-2 w-fit flex justify-center items-center"><font-awesome-icon class="w-4 h-4" :icon="['far', 'arrow-alt-circle-down']" />&nbsp;&nbsp;Download CV</a>
                    </li>
                    <li class="flex justify-center items-center mx-0 sm:mx-2 lg:mx-6 p-2 min-w-fit lg:hidden">
                        <input id="checkbox-hamburger-topnav" class="checkbox" type="checkbox" name="">
                        <div class="hamburger-lines">
                            <span class="line line1"/>
                            <span class="line line2"/>
                            <span class="line line3"/>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- Mobile Menu Items -->
            <div class="menu-items-mobile hidden lg:hidden dropdown-parent">
                <ul class="nav-content flex flex-col dropdown-content">
                    <li class="nav-item home p-2 dropdown-item" @click.prevent="toSection('home')">
                        <a class="nav-link dropdown-link">Home</a>
                    </li>
                    <li class="nav-item about p-2 dropdown-item" @click.prevent="toSection('about')">
                        <a class="nav-link dropdown-link">About</a>
                    </li>
                    <li class="nav-item skills p-2 dropdown-item" @click.prevent="toSection('skills')">
                        <a class="nav-link dropdown-link">Skills</a>
                    </li>
                    <li class="nav-item works p-2 dropdown-item" @click.prevent="toSection('works')">
                        <a class="nav-link dropdown-link">Works</a>
                    </li>
                    <li class="nav-item contact p-2 dropdown-item" @click.prevent="toSection('contact')">
                        <a class="nav-link dropdown-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'NavigationTopNavComponent',
    data() {
        return {
            count: {
                toggle: 0,
                sectionClick: 0
            }
        }
    },
    mounted() {
        // const element = document.getElementsByTagName('html')[0] as HTMLElement
        // element.setAttribute('class', 'dark')
    },
    created() {
        if (process.client) {
            const checkbox: any = document.getElementById('checkbox-hamburger-topnav')
            const frame: any = document.querySelectorAll('.menu-items-mobile')
            var vm = this

            checkbox.addEventListener('change', function(e: any) {
                if (e.target.checked === true) {
                    frame.forEach((x: any) => {
                        x.classList.remove('hidden')
                        x.classList.remove('out')
                        x.classList.add('show')
                    })
                    vm.count.toggle++
                } else {
                    frame.forEach((x: any) => {
                        x.classList.remove('show')
                        x.classList.add('out')
                    })
                    vm.count.toggle++
                }
            })
        }
    },
    beforeDestroy() {
    },
    methods: {
        toSection(id: string) {
            this.count.sectionClick++
            if (this.count.sectionClick === 1) {
                const jump = () => {
                    const el: any = document.getElementById(id)
                    el.scrollIntoView({
                        behavior: 'smooth'
                    })
                    clearTimeout(wait)
                    this.count.sectionClick = 0
                }
                const wait = setTimeout(jump, 0)
            }
        }
    }
})
</script>

<style>

</style>
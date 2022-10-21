<template>
    <nav id="neumorphism-navbar-main" class="fixed flex justify-between items-center w-full h-[5.625rem] top-0 z-50 py-4 bg-transparent ease-in-out duration-200">
        <div class="relative flex justify-between items-center w-full max-h-[90px] mx-6 sm:mx-0">
            <a class="flex justify-center items-center navbar-brand shadow-soft w-[50px] h-[40px] min-w-[50px] rounded-[0.55rem] border border-light mx-0 sm:mx-6">
                <h1 class="navbar-brand-logo text-2xl">B</h1>
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
                        <a class="btn btn-primary p-2 w-fit flex justify-center items-center" @click.prevent="download('pdf')">
                            <font-awesome-icon class="w-4 h-4" :icon="['far', 'arrow-alt-circle-down']" />
                            &nbsp;&nbsp;Download CV
                        </a>
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
            },
            audio: null as any
        }
    },
    computed: {
        isSoundEnabled() {
            return this.$store.state.isSoundEnabled
        }
    },
    mounted() {
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
        },
        download(context: string) {
            if (context === 'pdf') {
                const rop = 'rop-album.jpg'
                window.open(require(`~/assets/image/sound/${rop}`))
                /* fetch('/assets/document/barjcv.pdf').then(response => response.blob()).then((blob) => {
                    const url = window.URL.createObjectURL(blob)
                    const el = document.createElement('a')
                    el.style.display = 'none'
                    el.href = url
                    // the filename you want
                    el.download = 'barj_cv.pdf'
                    document.body.appendChild(el)
                    el.click()
                    window.URL.revokeObjectURL(url)
                    alert('your file has downloaded!') // or you know, something with better UX...
                }).catch(() => alert('oh no!'))

                const data = `name,email,twitter
                Barj,hashiramakun58@gmail.com,@themoltisanti,
                Rossa,fitrierossa@gmail.com,@ftriern`
                const blob = new Blob([data], { type: 'octet-stream' }) */

                // const data = '/assets/document/barjcv.pdf'
                // const blob = new Blob([data], { type: 'pdf' })
                // // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
                // const href = URL.createObjectURL(blob)
                // // blob:http://localhost:3000/fcd6adaf-40a8-4730-b18a-1b9362a33283

                // const a = Object.assign(document.createElement('a'), {
                //     href,
                //     style: 'display: none',
                //     download: 'myData.pdf'
                // })
                // document.body.appendChild(a)

                // a.click()
                // URL.revokeObjectURL(href)
                // a.remove()
            }
        }
    }
})
</script>

<style>

</style>
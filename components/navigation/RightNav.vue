<template>
    <nav id="neumorphism-rightnav" class="fixed flex gap-2 justify-right items-center top-0 right-0 w-32 h-[100%] z-40 py-4 bg-transparent ease-in-out duration-200">
        <a class="btn btn-primary p-2 w-fit flex justify-center items-center" @click.prevent="toggleExpand()">
            <font-awesome-icon id="rightnav-icon-expand" class="w-4 h-4 rotate-180 ease-in-out duration-700" icon="fa-sharp fa-solid fa-arrow-left-from-line" />
        </a>
        <div class="flex flex-col gap-6 justify-center items-center mx-0 mx-4 p-4 min-w-fit rounded-md neu-bg">
            <a class="btn btn-primary p-2 w-fit flex justify-center items-center" @click.prevent="toggleSound()">
                <font-awesome-icon v-if="isSoundEnabled" class="w-4 h-4" icon="fa-sharp fa-solid fa-music"/>
                <font-awesome-icon v-else class="w-4 h-4" icon="fa-sharp fa-solid fa-music-slash"/>
            </a>
            <a class="btn btn-primary p-2 w-fit flex justify-center items-center" @click.prevent="toggleTheme()">
                <font-awesome-icon v-if="theme === 'light'" class="w-4 h-4" icon="fa-sharp fa-solid fa-sun"/>
                <font-awesome-icon v-else class="w-4 h-4" icon="fa-sharp fa-solid fa-moon-cloud" />
            </a>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'NavigationRightNavComponent',
    data() {
        return {
            count: {
                expand: 0
            },
            isOpened: false,
            audio: null as any,
            theme: 'light'
        }
    },
    computed: {
        isSoundEnabled() {
            return this.$store.state.isSoundEnabled
        }
    },
    mounted() {
        this.$store.commit('initializeSound')
        const audioFile = require('@/assets/audio/The-Rings-of-Power-Opening-Intro-Theme-Song.mp3').default
        this.audio = new Audio(audioFile)
        localStorage.setItem('isSoundEnabled', 'false')
        this.$store.commit('initializeSound')
    },
    created() {
        if (process.client) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.theme = 'dark'
                this.toggleTheme()
            }
        }
    },
    beforeDestroy() {
    },
    methods: {
        toggleExpand() {
            this.count.expand++
            const el: any = document.getElementById('neumorphism-rightnav')
            const svg: any = document.getElementById('rightnav-icon-expand')
            if (this.count.expand % 2 === 1) {
                el.style.width = '2.5rem'
                svg.style.transform = 'rotate(0deg)'
            } else {
                el.style.width = '8rem'
                svg.style.transform = 'rotate(180deg)'
            }
        },
        toggleTheme() {
            const element = document.getElementsByTagName('body')[0] as HTMLElement
            if (this.theme === 'light') {
                element.classList.add('dark')
                this.theme = 'dark'
            } else {
                element.classList.remove('dark')
                this.theme = 'light'
            }
        },
        toggleSound() {
            this.$store.commit('toggleSound')
            this.playSound()
        },
        playSound() {
            if (this.isSoundEnabled) {
                this.audio.play()
            } else {
                this.audio.pause()
                this.audio.currentTime = 0
            }
        }
    }
})
</script>

<style>

</style>
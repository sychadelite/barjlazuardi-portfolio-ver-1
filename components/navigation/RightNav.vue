<template>
    <nav id="neumorphism-rightnav" class="fixed flex gap-2 justify-right items-center top-0 right-0 w-10 lg:w-32 h-[100%] z-40 py-4 bg-transparent ease-in-out duration-200">
        <a class="btn btn-primary p-2 w-fit flex justify-center items-center" @click.prevent="toggleExpand()">
            <font-awesome-icon id="rightnav-icon-expand" class="w-4 h-4 rotate-0 lg:rotate-180 ease-in-out duration-700" icon="fa-solid fa-left-long" />
        </a>
        <div class="flex flex-col gap-6 justify-center items-center mx-0 mx-4 p-4 min-w-fit rounded-md neu-bg">
            <a class="btn btn-primary p-2 w-fit flex justify-center items-center" @click.prevent="toggleSound()">
                <font-awesome-icon v-if="isSoundEnabled" class="w-4 h-4" icon="fa-solid fa-music"/>
                <div v-else class="flex">
                    <font-awesome-icon class="w-4 h-4" icon="fa-solid fa-music"/>
                    <font-awesome-icon class="w-4 h-4 absolute scale-150" icon="fa-solid fa-slash"/>
                </div>
            </a>
            <a class="btn btn-primary p-2 w-fit flex justify-center items-center" @click.prevent="toggleTheme()">
                <font-awesome-icon v-if="theme === 'light'" class="w-4 h-4" icon="fa-solid fa-sun"/>
                <font-awesome-icon v-else class="w-4 h-4" icon="fa-solid fa-cloud-moon" />
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
            isOpened: false,
            theme: 'light',

            audio: null as any,

            tracks: [
                {
                    id: 1,
                    name: 'The Rings of Power Opening Intro Theme Song',
                    src: 'The-Rings-of-Power-Opening-Intro-Theme-Song.mp3',
                    icon: '@/assets/image/sound/rop-album.jpg'
                },
                {
                    id: 2,
                    name: 'Where the Shadows Lie',
                    src: 'Where-the-Shadows-Lie.mp3',
                    icon: '@/assets/image/sound/rop-album.jpg'
                }
            ]
        }
    },
    computed: {
        isSoundEnabled() {
            return this.$store.state.isSoundEnabled
        }
    },
    mounted() {
        localStorage.setItem('isSoundEnabled', 'false')
        this.$store.commit('initializeSound')
    },
    created() {
        if (process.client) {
            return true
        }
    },
    beforeMount() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.theme = 'light'
            this.toggleTheme()
        }
    },
    beforeDestroy() {
    },
    methods: {
        toggleExpand() {
            const el: any = document.getElementById('neumorphism-rightnav')
            const svg: any = document.getElementById('rightnav-icon-expand')
            if (el.offsetWidth / 16 === 8) {
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
            const index = Math.floor(Math.random() * this.tracks.length)
            this.playSound(index)
        },
        playSound(vol: number) {
            // https://developer.chrome.com/blog/play-request-was-interrupted/
            if (this.isSoundEnabled) {
                const audioFile = require(`@/assets/audio/${this.tracks[vol].src}`).default
                this.audio = new Audio(audioFile)
                this.audio.loop = true
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
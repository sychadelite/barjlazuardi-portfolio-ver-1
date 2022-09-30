<template>
    <div>
        <NavigationTopNav />
        <div class="pt-[90px]">
            <Nuxt />
            <NavigationScrollTop/>
            <div class="fixed bottom-0 left-0 m-8">
                <p>{{ txtWidth }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import $ from 'jquery'

export default Vue.extend({
    name: 'DefaultLayout',
    key(route) {
        return route.fullPath
    },
    data() {
        return {
            windowWidth: 0,
            txtWidth: '',
            count: {
                responsive: 0,
                viewport: 0
            }
        }
    },
    head(): any {
        return {}
    },
    watch: {
        windowWidth(newWidth, oldWidth) {
            this.txtWidth = `width: ${newWidth}px`

            // element
            if (newWidth >= 1024) {
                if (this.count.responsive % 2 === 0) {
                    const x = document.getElementsByClassName('menu-items-mobile')[0]
                    x.classList.remove('out')
                    if (document.querySelectorAll('.menu-items-mobile.show').length === 0) {
                        x.classList.add('hidden')
                    }
                    this.count.responsive = 1
                }
            } else if (this.count.responsive % 2 === 1) {
                this.count.responsive = 0
            }

            // viewport
            if (newWidth <= 455) {
                if (this.count.viewport % 2 === 0) {
                    console.log('viewport changed: ', newWidth)
                    return $('meta[name=viewport]').attr('content', 'user-scalable=no, maximum-scale=1, width=455')
                }
            } else if (this.count.viewport % 2 === 1) {
                console.log('viewport changed: ', newWidth)
                return $('meta[name=viewport]').attr('content', 'user-scalable=no, maximum-scale=1, width=device-width')
            }
        }
    },
    mounted() {},
    created() {
        // nuxt will touch after it renders on server and window will be defined
        if (process.client) {
            // scroll listener
            var previousScroll = 0
            const btn: any = document.getElementById('btnGoUp')
            const header: any = document.querySelector('#neumorphism-navbar-main')

            window.addEventListener('scroll', function () {
                var scroll: any = $(this).scrollTop()
                if (scroll > previousScroll) {
                    btn.style.transform = 'translateY(0rem)'
                    header.classList.add('unpinned')
                    header.style.transform = 'translateY(-100%)'
                } else {
                    btn.style.transform = 'translateY(10rem)'
                    if (scroll === 0) {
                        header.classList.remove('unpinned')
                    }
                    header.style.transform = 'translateY(0%)'
                }
                previousScroll = scroll
            })

            // click listener
            btn.addEventListener('click', function () {
                $('html, body').animate({ scrollTop: 0 }, 'slow')
            })

            // resize listener
            this.windowWidth = window.innerWidth
            window.addEventListener('resize', this.onResize)
        }
    },
    beforeMount() {
        // viewport first time rendered listener
        if (window.innerWidth > 455) {
            return $('meta[name=viewport]').attr('content', 'user-scalable=no, maximum-scale=1, width=device-width')
        } else {
            return $('meta[name=viewport]').attr('content', 'user-scalable=no, maximum-scale=1, width=455')
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth
        }
    }
})
</script>
<!-- eslint-disable vue/html-indent -->
<template>
    <div>
        <NavigationTopNav />
        <div class="pt-[90px]">
            <Nuxt />
            <NavigationScrollTop/>
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
    head(): any {
        return {}
    },
    mounted() {
    },
    created() {
        // nuxt will touch after it renders on server and window will be defined
        if (process.client) {
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

            btn.addEventListener('click', function () {
                $('html, body').animate({ scrollTop: 0 }, 'slow')
            })
        }
    }
})
</script>
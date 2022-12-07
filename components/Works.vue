<template>
    <section id="works">
        <div class="flex flex-col gap-12 w-full">
            <div class="flex flex-row flex-wrap w-full gap-20 justify-start items-center sm:justify-between">
                <article class="prose lg:prose-xl lg:max-w-[48%]">
                    <h1>My&nbsp;<span class="text-[#008080]">Works</span></h1>
                    <div>
                        <!-- <audio src="_nuxt/assets/audio/Where-the-Shadows-Lie.mp3" controls loop/> -->
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'WorksComponent',
    created() {
        if (process.client) {
            return true
        }
    },
    methods: {
    }
})
</script>

<style>
</style>
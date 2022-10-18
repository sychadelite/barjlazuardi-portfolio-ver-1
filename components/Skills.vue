<template>
    <section id="skills">
        <div class="flex flex-col gap-12 w-full">
            <div class="flex flex-row flex-wrap w-full gap-20 justify-start items-center sm:justify-between">
                <article class="prose lg:prose-xl lg:max-w-[48%]">
                    <h1>My&nbsp;<span class="text-[#008080]">Skills</span></h1>
                    <p>Another One</p>
                </article>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SkillsComponent',
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
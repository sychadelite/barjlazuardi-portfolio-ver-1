<template>
    <section class="items-center -mt-6 px-6">
        <article class="flex flex-col justify-center h-fit prose lg:prose-lg">
            <div v-if="error.statusCode === 404" no-ssr="true" class="text-center">
                <lottie-player
                    class="m-auto"
                    src="https://assets2.lottiefiles.com/packages/lf20_vzj1xd0x.json"
                    background="transparent"
                    speed="1"
                    style="width: 300px; height: 300px;"
                    loop
                    autoplay
                />
                <h1 class="text-[#315190]">
                    This page is gone.
                </h1>
                <p>...maybe the page you're looking for is not found or never existed.</p>
            </div>
            <div v-else class="text-center">
                <lottie-player
                    class="m-auto"
                    src="https://assets1.lottiefiles.com/packages/lf20_FjLbfs.json"
                    background="transparent"
                    speed="1"
                    style="width: 300px; height: 300px;"
                    loop
                    autoplay
                />
                <h1>
                    An error occurred
                </h1>
                <p>...the server encountered an unexpected condition that prevented it from fulfilling your request.</p>
            </div>
            <NuxtLink to="/" class="m-auto">
                <button class="btn btn-primary p-2 w-fit">
                    Back to home <font-awesome-icon class="w-5" :icon="['far', 'hand-point-right']"/>
                </button>
            </NuxtLink>
        </article>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    layout: 'ErrorLayout',
    props: ['error'] as any // you can set a custom layout for the error page
})
</script>
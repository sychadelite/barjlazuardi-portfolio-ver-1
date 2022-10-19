<template>
    <div class="fixed bottom-0 right-0 m-8 z-50">
        <button id="btnGoUp" class="neu-pill small pill-circle" style="transform: translateY(10rem);">
            <font-awesome-icon class="w-5" :icon="['fas', 'arrow-up']" />
        </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'NavigationScrollTopComponent'
})
</script>

<style>

</style>
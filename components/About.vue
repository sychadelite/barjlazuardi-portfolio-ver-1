<template>
    <section>
        <div class="flex flex-col gap-12 w-full">
            <!-- infinite loop -->
            <vue-typed-js :strings="['awesome', 'brilliant']" :loop="true">
                <h2>We are a <span class="typing"></span> company!</h2>
            </vue-typed-js>

            <!-- type pausing -->
            <vue-typed-js :strings="['This is text ^1000 which gets paused for 1 second', 'wow, interesting']" :loop="true">
                <h2 class="typing"></h2>
            </vue-typed-js>

            <!-- output html -->
            <vue-typed-js :strings="['<p>Paragraph</p>', '<span>Span</span>']" :contentType="'html'" :loop="true">
                <h2 class="typing"></h2>
            </vue-typed-js>
            <a href="#contact" class="btn btn-primary p-2 w-fit">About Me</a>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutComponent',
  methods: {
  }
})
</script>

<style>

</style>
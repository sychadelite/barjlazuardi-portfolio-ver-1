<template>
    <section>      
      <div class="flex flex-col-reverse sm:flex-row gap-10 w-full justify-evenly sm:justify-between items-center lg:mt-[-7%]">
        
        <div class="flex flex-col gap-20 w-full sm:items-start mt-8 sm:mt-0">
          <article class="prose lg:prose-xl">
            <h1>Hi,<br>I'am<br><span class="text-[#008080]">Barj Lazuardi</span></h1>
            <h4 class="text-2xl">
              Web Developer
            </h4>
          </article>
          <div>
            <a href="#" class="btn btn-animate"><span>&nbsp;Get In Touch</span></a>
            <div class="flex flex-wrap mt-10 gap-10">
                <!-- Add the style and icon you want using the Array format -->
                <a href="https://github.com/sychadelite/" target="_blank" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'github']" /></a>
                <a href="https://www.linkedin.com/in/barjlazuardi/" target="_blank" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'linkedin']" /></a>
                <a href="https://www.facebook.com/barjlazuardi/" target="_blank" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'facebook']" /></a>
                <a href="https://www.instagram.com/barjlazuardi/" target="_blank" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'instagram']" /></a>
                <a href="https://www.twitter.com/themoltisanti/" target="_blank" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'twitter']" /></a>
                <a href="https://www.discordapp.com/users/417678662633127937" target="_blank" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'discord']" /></a>
            </div>
          </div>
        </div>

        <img class="max-w-[28rem] max-h-[28rem] min-w-[16rem] min-h-[16rem] mt-8 sm:mt-0" src="@/assets/avatar/sendlove[bgfocus].gif" alt="avatar" width="50%" height="50%">

      </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeComponent'
})
</script>

<style>

</style>
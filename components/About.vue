<template>
    <section id="about">
        <div class="flex flex-col gap-12 w-full">
            <div class="flex flex-row flex-wrap w-full gap-20 justify-start items-center sm:justify-between">
                <img class="min-w-[16rem] min-h-[16rem] lg:max-w-[22rem] lg:max-h-[22rem] xl:max-w-[28rem] xl:max-h-[28rem] mt-8 sm:mt-0" src="@/assets/avatar/greet[bgremove].png" alt="greet" width="40%" height="40%">
                <article class="prose lg:prose-xl lg:max-w-[48%]">
                    <h1>About&nbsp;<span class="text-[#008080]">Me</span></h1>
                    <p>
                        I am 21 year old, BBIS student currently studying at Pradita University of Science and Technology studies.
                        I really enjoy solving problems as well as making things pretty and easy to use.
                        I can't stop learning and exploring new things; the more, the better.
                        I also believe that nothing is impossible to implement in the system, for me it just requires an extra configuration.
                    </p>
                </article>
            </div>

            <!-- <div class="flex flex-row">
                <div id="typed2-strings">
                    <p>Typed.js is a <strong>JavaScript</strong> library.</p>
                    <p>It <em>types</em> out sentences.</p>
                </div>
                <span id="typed2"/>
            </div> -->

            <!-- <div class="flex flex-row">
                <span id="typed1"></span>
            </div>
            <div class="flex flex-row">
                <span id="typed3"/>
            </div>
            <div class="flex flex-row">
                <span id="typed4"/>
            </div>
            <div class="flex flex-row">
                <span id="typed5"/>
            </div>
            <div class="flex flex-row">
                <span id="typed6"/>
            </div> -->

            <!-- <UtilitiesNeuCard /> -->

            <!-- <a href="#contact" class="btn btn-primary p-2 w-fit">About Me</a> -->

            <!-- <div class="flex flex-wrap mt-10 gap-10"> -->
            <!-- Add the style and icon you want using the String format -->
            <!-- <a href="#" class="neu-pill large pill-circle"><font-awesome-icon class="w-5" icon="fa-solid fa-user-secret"/></a> -->
            <!-- <a href="#" class="neu-pill medium pill-circle"><font-awesome-icon class="w-5" icon="fa-brands fa-twitter"/></a> -->
            <!-- Add the style and icon you want using the Array format -->
            <!-- <a href="#" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fas', 'user-secret']"/></a> -->
            <!-- <a href="#" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'twitter']"/></a> -->
            <!-- </div> -->
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

import $ from 'jquery'
import Typed from 'typed.js'

export default Vue.extend({
    name: 'AboutComponent',
    created() {
        var vm = this
        if (process.client) {
            $(document).ready(function () {
                // var options = {
                //     strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
                //     typeSpeed: 40
                // };
                // var typed = new Typed('#typed1', options);

                // var typed2 = new Typed('#typed2', {
                //     stringsElement: '#typed2-strings',
                //     typeSpeed: 40,
                //     loop: true
                // })

                // var typed3 = new Typed('#typed3', {
                // // Waits 1000ms after typing "First"
                //     strings: ['First ^1000 sentence.', 'Second sentence.'],
                //     typeSpeed: 100,
                //     loop: true
                // })
                // var typed4 = new Typed('#typed4', {
                //     strings: ['This is a JavaScript library', 'This is an ES6 module'],
                //     smartBackspace: true, // Default value
                //     typeSpeed: 250,
                //     loop: true
                // })
                // var typed5 = new Typed('#typed5', {
                //     strings: [
                //         'git push --force ^1000\n `pushed to origin with option force`'
                //     ],
                //     typeSpeed: 350,
                //     loop: true
                // })
                // vm.typed6()
            })
        }
    },
    methods: {
        // typed6() {
        //     var typed6 = new Typed('#typed6', {
        //         /**
        //          * @property {array} strings strings to be typed
        //          * @property {string} stringsElement ID of element containing string children
        //          */
        //         strings: [
        //             'These are the default values...',
        //             'You know what you should do?',
        //             'Use your own!',
        //             'Have a great day!'
        //         ],
        //         stringsElement: null as any,

        //         /**
        //          * @property {number} typeSpeed type speed in milliseconds
        //          */
        //         typeSpeed: 0,

        //         /**
        //          * @property {number} startDelay time before typing starts in milliseconds
        //          */
        //         startDelay: 0,

        //         /**
        //          * @property {number} backSpeed backspacing speed in milliseconds
        //          */
        //         backSpeed: 0,

        //         /**
        //          * @property {boolean} smartBackspace only backspace what doesn't match the previous string
        //          */
        //         smartBackspace: true,

        //         /**
        //          * @property {boolean} shuffle shuffle the strings
        //          */
        //         shuffle: false,

        //         /**
        //          * @property {number} backDelay time before backspacing in milliseconds
        //          */
        //         backDelay: 700,

        //         /**
        //          * @property {boolean} fadeOut Fade out instead of backspace
        //          * @property {string} fadeOutClass css class for fade animation
        //          * @property {boolean} fadeOutDelay Fade out delay in milliseconds
        //          */
        //         fadeOut: false,
        //         fadeOutClass: 'typed-fade-out',
        //         fadeOutDelay: 500,

        //         /**
        //          * @property {boolean} loop loop strings
        //          * @property {number} loopCount amount of loops
        //          */
        //         loop: true,
        //         loopCount: Infinity,

        //         /**
        //          * @property {boolean} showCursor show cursor
        //          * @property {string} cursorChar character for cursor
        //          * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
        //          */
        //         showCursor: true,
        //         cursorChar: '|',
        //         autoInsertCss: true,

        //         /**
        //          * @property {string} attr attribute for typing
        //          * Ex: input placeholder, value, or just HTML text
        //          */
        //         attr: null as any,

        //         /**
        //          * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
        //          */
        //         bindInputFocusEvents: false,

        //         /**
        //          * @property {string} contentType 'html' or 'null' for plaintext
        //          */
        //         contentType: 'html',

        //         /**
        //          * Before it begins typing
        //          * @param {Typed} self
        //          */
        //         // onBegin: (self) => {},

        //         /**
        //          * All typing is complete
        //          * @param {Typed} self
        //          */
        //         onComplete: (self) => {},

        //         /**
        //          * Before each string is typed
        //          * @param {number} arrayPos
        //          * @param {Typed} self
        //          */
        //         preStringTyped: (arrayPos, self) => {},

        //         /**
        //          * After each string is typed
        //          * @param {number} arrayPos
        //          * @param {Typed} self
        //          */
        //         onStringTyped: (arrayPos, self) => {},

        //         /**
        //          * During looping, after last string is typed
        //          * @param {Typed} self
        //          */
        //         onLastStringBackspaced: (self) => {},

        //         /**
        //          * Typing has been stopped
        //          * @param {number} arrayPos
        //          * @param {Typed} self
        //          */
        //         onTypingPaused: (arrayPos, self) => {},

        //         /**
        //          * Typing has been started after being stopped
        //          * @param {number} arrayPos
        //          * @param {Typed} self
        //          */
        //         onTypingResumed: (arrayPos, self) => {},

        //         /**
        //          * After reset
        //          * @param {Typed} self
        //          */
        //         onReset: (self) => {},

        //         /**
        //          * After stop
        //          * @param {number} arrayPos
        //          * @param {Typed} self
        //          */
        //         onStop: (arrayPos, self) => {},

        //         /**
        //          * After start
        //          * @param {number} arrayPos
        //          * @param {Typed} self
        //          */
        //         onStart: (arrayPos, self) => {},

        //         /**
        //          * After destroy
        //          * @param {Typed} self
        //          */
        //         onDestroy: (self) => {}
        //     })
        // }
    }
})
</script>

<style>
</style>
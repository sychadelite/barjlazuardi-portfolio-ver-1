<template>
    <div class="neumorphism-card-v2 relative neu-bg shadow-soft border-light py-4 px-9 my-0 mx-6 md:mx-auto">
        <div class="card-header text-center pb-0">
            <h4 class="font-medium text-2xl mb-2">
                Get In Touch !
            </h4>
            <span class="text-xs">For all enquiries, please email me using the form below.</span>
        </div>
        <div class="card-body">
            <form action="#" class="mt-4">
                <div class="relative mb-4">
                    <label for="InputContactMeName" class="text-sm">Name</label>
                    <div class="flex flex-row input-group mb-4 mt-1.5">
                        <div class="input-group-prepend">
                            <span class="absolute input-group-text" style="height: -webkit-fill-available;">
                                <font-awesome-icon class="w-4 h-4" :icon="['fas', 'signature']" />
                            </span>
                        </div>
                        <input id="InputContactMeName" class="form-control" placeholder="Mr. Griffin" type="text" aria-label="name">
                    </div>
                </div>
                <div class="relative mb-4">
                    <label for="InputContactMeEmail" class="text-sm">Email</label>
                    <div class="flex flex-row input-group mb-4 mt-1.5">
                        <div class="input-group-prepend">
                            <span class="absolute input-group-text" style="height: -webkit-fill-available;">
                                <font-awesome-icon class="w-4 h-4" :icon="['fas', 'envelope']" />
                            </span>
                        </div>
                        <input id="InputContactMeEmail" class="form-control" placeholder="example@company.com" type="text" aria-label="email">
                    </div>
                </div>
                <div class="relative mb-4">
                    <div class="flex flex-row input-group mb-4 mt-8">
                        <textarea
                            id="InputContactMeMessage"
                            name="AreaMessage"
                            class="bg-transparent w-full text-gray-300 p-4"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                        />
                    </div>
                </div>
                <div class="flex justify-center items-center w-full h-fit my-12">
                    <button type="submit" class="btn btn-primary py-2 px-8 w-fit">
                        <font-awesome-icon class="w-4 h-4" :icon="['far', 'paper-plane']" />
                        &nbsp;Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'UtilitiesInputsContactMe'
})
</script>

<style>

</style>
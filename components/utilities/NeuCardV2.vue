<template>
    <div class="neumorphism-card-v2 relative neu-bg shadow-soft border-light p-4">
        <div class="card-header text-center pb-0">
            <h4 class="font-normal text-2xl">
                Sign in to our platform
            </h4>
            <span>Login here using your username and password</span>
        </div>
        <div class="card-body">
            <form action="#" class="mt-4">
                <div class="relative mb-4">
                    <label for="exampleInputIcon333">Your email</label>
                    <div class="flex flex-row input-group mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <font-awesome-icon class="w-4 h-4" :icon="['fas', 'envelope']" />
                            </span>
                        </div>
                        <input id="exampleInputIcon333" class="form-control" placeholder="example@company.com" type="text" aria-label="email adress">
                    </div>
                </div>
                <div class="relative mb-4">
                    <div class="relative mb-4">
                        <label for="exampleInputPassword777">Password</label>
                        <div class="flex flex-row input-group mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <font-awesome-icon class="w-4 h-4" :icon="['fas', 'unlock']" />
                                </span>
                            </div>
                            <input
                                id="exampleInputPassword777"
                                class="form-control"
                                placeholder="Password"
                                type="password"
                                aria-label="Password"
                                required=""
                            >
                        </div>
                    </div>
                    <div class="block flex justify-between items-center mb-4">
                        <div class="relative">
                            <input id="defaultCheck545" class="form-check-input" type="checkbox" value="">
                            <label class="form-check-label" for="defaultCheck545">Remember me</label>
                        </div>
                        <div>
                            <a href="#" class="small text-right">Lost password?</a>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center w-full h-fit">
                    <button type="submit" class="btn btn-primary p-2 w-fit sm:w-40 lg:w-64">
                        Sign in
                    </button>
                </div>
            </form>
            <div class="my-4 text-center">
                <span class="font-normal">or login with</span>
            </div>
            <div class="flex flex-wrap justify-center items-center mt-10 gap-10 my-4">
                <a href="#" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'facebook']"/></a>
                <a href="#" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'twitter']"/></a>
                <a href="#" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'github']"/></a>
            </div>
            <div class="flex justify-center items-center mt-4">
                <span class="font-normal">Not registered?&nbsp;
                    <a href="#" class="font-semibold">Create account</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'UtilitiesNeuCardV2'
})
</script>

<style>

</style>
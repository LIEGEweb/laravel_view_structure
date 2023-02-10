<script setup>
import {Link} from '@inertiajs/vue3';
import {onMounted, ref} from 'vue';


import Menu2Bars from '@/Components/Menu2Bars.vue' ;
import {computed} from 'vue'
import {usePage} from '@inertiajs/vue3'

const user = computed(() => usePage().props.auth.user)
const canLogin = computed(() => usePage().props.canLogin)
const canRegister = computed(() => usePage().props.canRegister)
const showMenu = ref(false)

defineProps({});

</script>

<template>
    <div class="w-full md:hidden">
        <div
            class="bg-grey-100 bg-opacity-75 p-6 flex items-center justify-between border-b-2 border-grey-300  ">
            <button @click="showMenu = !showMenu">
                <Menu2Bars :active="showMenu"/>
            </button>
            <span class="py-6 text-capitalize text-xl font-black">
            Snackers
            </span>
            <div v-if="canLogin" class="px-6 py-4 sm:block">
                <Link v-if="$page.props.user" :href="route('dashboard')"
                      class="text-sm text-gray-700 dark:text-gray-500 underline">Profile
                </Link>

                <template v-else>
                    <Link :href="route('login')" class="text-sm text-gray-700 dark:text-gray-500 underline">Log isn
                    </Link>

                    <Link v-if="canRegister" :href="route('register')"
                          class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register
                    </Link>
                </template>
            </div>
        </div>
        <div class=" h-0 overflow-hidden transition-height duration-600" :class="{ 'h-screen': showMenu}">
            <!--        <div class=" h-0 transition-height duration-1000 " :class="{ 'h-screen, p-6' : showMenu }">-->

            <ul class="mt-6 ml-6">
                <li>items</li>
                <li>items</li>
                <li>items</li>
                <li>items</li>
            </ul>
        </div>
    </div>
    <div class="hidden md:block md:w-full">
        <div class="bg-grey-100 bg-opacity-75 py-3  px-6 flex items-center justify-between border-b-2 border-grey-300  ">
            <span class="p-6 text-capitalize text-xl font-black text-3xl">
            Snackers
            </span>
<!--            <div class="">-->
                <ul class="inline-flex flex-1 px-6 items">
                    <li class="px-2">items</li>
                    <li class="px-2">items</li>
                    <li class="px-2">items</li>
                    <li class="px-2">items</li>
                </ul>
<!--            </div>-->
            <div v-if="canLogin" class="px-6 py-4 sm:block">
                <Link v-if="$page.props.user" :href="route('dashboard')"
                      class="text-sm text-gray-700 dark:text-gray-500 underline">Profile
                </Link>

                <template v-else>
                    <Link :href="route('login')" class="text-sm text-gray-700 dark:text-gray-500 underline">Log isn
                    </Link>

                    <Link v-if="canRegister" :href="route('register')"
                          class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register
                    </Link>
                </template>
            </div>
        </div>
    </div>
</template>

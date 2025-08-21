<template>
    <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
    <div class="min-h-full">
        <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center">
                        <div class="hidden md:block">
                            <div class="flex items-baseline space-x-4">
                                <RouterLink v-for="item in navigation" :to="{ name: item.to }" :key="item.name"
                                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                    active-class="bg-gray-900 text-white" exact-active-class="bg-gray-900 text-white">{{
                                        item.name }}</RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-4 flex items-center md:ml-6">

                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <!-- Mobile menu button -->
                        <DisclosureButton
                            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Open main menu</span>
                            <fa v-if="!open" :icon="['far', 'bars']" class="" />
                            <fa v-else :icon="['far', 'xmark']" class="" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel class="md:hidden">
                <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    <RouterLink v-for="item in navigation" :key="item.name" as="a" :to="{ name: item.to }"
                        class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                        active-class="bg-gray-900 text-white" exact-active-class="bg-gray-900 text-white">{{ item.name
                        }}</RouterLink>
                </div>
            </DisclosurePanel>
        </Disclosure>

        <RouterView />
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const navigation = [
    { name: 'Home', to: 'home', current: true },
    { name: 'Flux 101', to: 'flux101Intro', current: false },
    { name: 'Flux 201', to: 'flux201', current: false },
    { name: 'Prompt Guide', to: 'promptGuide', current: false },
    { name: 'Style Reference', to: 'styleReferences', current: false },
];

</script>

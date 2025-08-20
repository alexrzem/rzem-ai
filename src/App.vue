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
                                <RouterLink v-for="item in navigation" :to="{ name: item.to }" :key="item.name" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white" active-class="bg-gray-900 text-white" exact-active-class="bg-gray-900 text-white">{{ item.name }}</RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-4 flex items-center md:ml-6">
                            
                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <!-- Mobile menu button -->
                        <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
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
                    <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
                </div>
                <div class="border-t border-white/10 pt-4 pb-3">
                    <div class="flex items-center px-5">
                        <div class="shrink-0">
                            <img class="size-10 rounded-full outline -outline-offset-1 outline-white/10" :src="user.imageUrl" alt="" />
                        </div>
                        <div class="ml-3">
                            <div class="text-base/5 font-medium text-white">{{ user.name }}</div>
                            <div class="text-sm font-medium text-gray-400">{{ user.email }}</div>
                        </div>
                        <button type="button" class="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                            <span class="absolute -inset-1.5" />
                            <span class="sr-only">View notifications</span>
                            <fa :icon="['far', 'bell']" class="" />
                        </button>
                    </div>
                    <div class="mt-3 space-y-1 px-2">
                        <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white">{{ item.name }}</DisclosureButton>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>

        <RouterView/>
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
    { name: 'Home', to: 'home', current: true },
    { name: 'Flux 101', to: 'flux101Intro', current: false },
    { name: 'Flux 201', to: 'flux201', current: false },
    { name: 'Prompt Guide', to: 'promptGuide', current: false },
    { name: 'Style Reference', to: 'styleReferences', current: false },
];
const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];
</script>

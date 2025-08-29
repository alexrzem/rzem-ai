<template>
    <div class="bg-gray-700 border-t border-t-gray-500 border-b-gray-900 shadow-lg">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-10 items-center justify-between">
                <div class="flex items-center">
                    <div class="">
                        <div class="flex items-baseline space-x-2">
                            <RouterLink
                                :to="{name: 'styleReferences'}"
                                class="rounded-md px-2 py-1 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                active-class="bg-gray-600 text-white"
                                exact-active-class="bg-gray-900 text-white">
                                Styles
                            </RouterLink>
                            <RouterLink
                                :to="{name: 'loraReferences'}"
                                class="rounded-md px-2 py-1 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                active-class="bg-gray-600 text-white"
                                exact-active-class="bg-gray-900 text-white">
                                LoRAs
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

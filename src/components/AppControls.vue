<template>
    <ScrollPanel class="h-full">
        <Card class="mb-2">
            <template #title>Image Settings</template>
            <template #content>
                <div class="">
                    <div class="flex-auto flex flex-col gap-2">
                        <Styles v-if="showStyles" />
                        <PromptPositive />
                        <PromptNegative />
                        <Dimensions />
                        <GuidanceSteps />
                        <ClipShiftDenoise />
                        <Seed />

                        <div class="w-full">
                            <Button size="small" @click="createPrompt()" class="w-full text-lg" :disabled="!isReady">
                                <fa :icon="['far', 'robot']" class="mr-1" :spin="generateButtonActive" />
                                <span class="text-m">Generate Image</span>
                            </Button>
                        </div>
                        <div class="w-full">
                            <ProgressBar :value="generationProgress"> {{ generationStep }}/{{ generationSteps }} </ProgressBar>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
        <Card class="mb-2">
            <template #title>Model Settings</template>
            <template #content>
                <div class="flex flex-col gap-2">
                    <Checkpoints />
                    <Loras />
                    <SamplerScheduler />
                    <TextEncoders />
                    <Vaes />
                </div>
            </template>
        </Card>
    </ScrollPanel>
</template>

<script setup>
import _ from 'lodash';

import Checkpoints from './controls/Checkpoints.vue';
import Dimensions from './controls/Dimensions.vue';
import ClipShiftDenoise from './controls/ClipShiftDenoise.vue';
import Loras from './controls/Loras.vue';
import PromptNegative from './controls/PromptNegative.vue';
import PromptPositive from './controls/PromptPositive.vue';
import SamplerScheduler from './controls/SamplerScheduler.vue';
import Seed from './controls/Seed.vue';
import GuidanceSteps from './controls/GuidanceSteps.vue';
import Styles from './controls/Styles.vue';
import TextEncoders from './controls/TextEncoders.vue';
import Vaes from './controls/Vaes.vue';

import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import axios from 'axios';
import { useControlsStore, useInvokeAIStore, useMetadataStore } from '../store';

const controls = useControlsStore();
const { clientId, isReady, queueSize, promptPositive } = storeToRefs(controls);

const invokeAI = useInvokeAIStore();
const { infill_methods, upscaling_methods, nsfw_methods, watermarking_methods } = storeToRefs(invokeAI);

const showStyles = ref(false);

const http = axios.create({
    baseURL: 'http://10.0.0.3:9090',
    timeout: 1000,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

const generationStep = ref(0);
const generationSteps = ref(1);
const generationProgress = computed(() => (generationStep.value / generationSteps.value) * 100);

const generateButtonActiveIcon = 'robot';
const generateButtonInactiveIcon = 'compass';

const generateButtonActive = ref(false);
const generateButtonIcon = ref(generateButtonActiveIcon);

watch(clientId, () => {
    console.log('clientId ref changed: ', clientId.value);
});

let clientIdParam = '';
if (!_.isNull(clientId.value)) {
    clientIdParam = '?clientId=' + clientId.value;
}

const getInvokeConfig = () => {
    const request = controls.workflowPrompt;
    console.log('Request:', request);

    generateButtonIcon.value = generateButtonActiveIcon;
    generateButtonActive.value = true;
    http.get('/api/v1/app/config')
        .then(function (response) {
            infill_methods.value = response.data.infill_methods;
            upscaling_methods.value = response.data.upscaling_methods;
            nsfw_methods.value = response.data.nsfw_methods;
            watermarking_methods.value = response.data.watermarking_methods;
            generateButtonIcon.value = generateButtonActiveIcon;
            generateButtonActive.value = false;
            console.log(response);
        })
        .catch(function (error) {
            generateButtonIcon.value = generateButtonInactiveIcon;
            generateButtonActive.value = false;
            console.log(error);
        });
};

const createPrompt = () => {
    const request = controls.workflowPrompt;
    console.log('Request:', request);

    generateButtonIcon.value = generateButtonActiveIcon;
    generateButtonActive.value = true;
    http.post('/api/v1/queue/default/enqueue_batch', request)
        .then(function (response) {
            generateButtonIcon.value = generateButtonActiveIcon;
            generateButtonActive.value = true;
            console.log(response);
        })
        .catch(function (error) {
            generateButtonIcon.value = generateButtonInactiveIcon;
            generateButtonActive.value = false;
            console.log(error);
        });
};

getInvokeConfig();
</script>

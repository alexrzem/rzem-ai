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
import { useControlsStore, useMetadataStore } from '../store';

const controls = useControlsStore();
const { clientId, isReady, queueSize, promptPositive } = storeToRefs(controls);

const showStyles = ref(false);

const http = axios.create({
    baseURL: 'http://10.0.0.3:8188',
    timeout: 1000,
    headers: {},
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

let socket = new WebSocket(`ws://${location.hostname}:8188/ws${clientIdParam}`);
socket.addEventListener('open', (event) => {
    console.log('Hello Server!');
});
socket.addEventListener('message', (event) => {
    // {"type": "status", "data": {"status": {"exec_info": {"queue_remaining": 1}}}}
    // {"type": "progress", "data": {"value": 3, "max": 20, "prompt_id": "90997528-3180-436a-9a00-046dfcf28579", "node": null}}
    // {"type": "status", "data": {"status": {"exec_info": {"queue_remaining": 0}}}}
    const event_data = JSON.parse(event.data);
    switch (event_data.type) {
        case 'status':
            console.log('ws:status:', event_data);
            clientId.value = _.get(event_data, 'data.sid', clientId.value);
            queueSize.value = _.get(event_data, 'data.status.exec_info.queue_remaining', 0);
            generationStep.value = 0;
            generationSteps.value = 1;

            console.log('ws:clientId:', clientId.value);
            console.log('ws:queueSize:', queueSize.value);
            console.log('ws:generationStep:', generationStep.value);
            console.log('ws:generationSteps:', generationSteps.value);
            break;
        case 'progress':
            console.log('ws:progress:', event_data);
            generationStep.value = _.get(event_data, 'data.value', 0);
            generationSteps.value = _.get(event_data, 'data.max', 1);
            break;
        default:
            console.log('ws:message: ', event_data);
            break;
    }
});

// http.get('/api/history')
//     .then(function (response) {
//         console.log(response.data);
//         controls.clientId = _.last(_.keys(response.data));
//         console.log(controls.clientId);
//         socket = new WebSocket(`ws://10.0.0.3:8188/ws?clientId=${controls.clientId}`);
//         socket.addEventListener('open', (event) => {
//             console.log('Hello Server!');
//         });
//         socket.addEventListener('message', (event) => {
//             // {"type": "status", "data": {"status": {"exec_info": {"queue_remaining": 1}}}}
//             // {"type": "progress", "data": {"value": 3, "max": 20, "prompt_id": "90997528-3180-436a-9a00-046dfcf28579", "node": null}}
//             // {"type": "status", "data": {"status": {"exec_info": {"queue_remaining": 0}}}}
//             const event_data = JSON.parse(event.data);
//             console.log('TYPE: ', event_data.type);
//             switch (event_data.type) {
//                 case 'status':
//                     console.log('Status: ', event_data.data.status);
//                     generationStep.value = 0;
//                     generationSteps.value = 1;
//                     break;
//                 case 'progress':
//                     console.log('Progress: ', event_data.data.value);
//                     generationStep.value = event_data.data.value;
//                     generationSteps.value = event_data.data.max;
//                     break;
//                 default:
//                     console.log('Message from server ', event_data);
//                     break;
//             }
//         });
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

const createPrompt = () => {
    const request = controls.workflowPrompt;
    console.log('Request:', request);

    generateButtonIcon.value = generateButtonActiveIcon;
    generateButtonActive.value = true;
    http.post('/api/prompt', request)
        .then(function (response) {
            generateButtonIcon.value = generateButtonInactiveIcon;
            generateButtonActive.value = false;
            console.log(response);
        })
        .catch(function (error) {
            generateButtonIcon.value = generateButtonInactiveIcon;
            generateButtonActive.value = false;
            console.log(error);
        });
};
</script>

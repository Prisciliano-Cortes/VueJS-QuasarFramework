<template>
    <q-page class="q-pa-md">
        <span class="text-h3">Dialog</span>

        <q-separator />

        <template v-if="name">
            <span class="text-h6">{{ name }}</span>
    
            <q-separator />
        </template>

        <div class="q-pa-md q-gutter-sm">
            <q-btn label="Alert" color="primary" @click="alert"></q-btn>
            <q-btn label="Confirm" color="primary" @click="confirm"></q-btn>
            <q-btn label="Prompt" color="primary" @click="prompt"></q-btn>
        </div>


    </q-page>
</template>

<script>
    import { defineComponent, ref } from 'vue'
    import { useQuasar } from 'quasar'

    export default defineComponent({
        name: 'DialogPage',
        setup () {
            const $q = useQuasar()

            const name = ref()

            function alert () {
                $q.dialog({
                    title: 'Alert',
                    message: 'Some message',
                }).onOk(() => {
                    // console.log('OK')
                }).onCancel(() => {
                    // console.log('Cancel')
                }).onDismiss(() => {
                    // console.log('I am triggered on both OK and Cancel')
                })
            }

            function confirm () {
                $q.dialog({
                    title: 'Confirm',
                    message: 'Would you like to turn on the wifi?',
                    cancel: true,
                    persistent: true
                }).onOk(() => {
                    // console.log('>>>> OK')
                }).onOk(() => {
                    // console.log('>>>> second OK catcher')
                }).onCancel(() => {
                    // console.log('>>>> Cancel')
                }).onDismiss(() => {
                    // console.log('I am triggered on both OK and Cancel')
                })
            }

            function prompt () {
                $q.dialog({
                    title: 'Prompt',
                    message: 'What is your name?',
                    position: 'top',
                    prompt: {
                        model: '',
                        type: 'text' // optional
                    },
                    cancel: true,
                    persistent: true
                }).onOk(data => {
                    name.value = data
                    // console.log('>>>> OK, received', data)
                }).onCancel(() => {
                    // console.log('>>>> Cancel')
                }).onDismiss(() => {
                    // console.log('I am triggered on both OK and Cancel')
                })
            }

            return { 
                alert, 
                confirm, 
                prompt,
                name 
            }
        }
    })
</script>

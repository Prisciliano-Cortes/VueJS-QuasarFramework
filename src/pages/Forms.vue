<template>
    <q-page class="q-mx-md">
        <span class="text-h2">Form</span>

        <q-separator spaced />

        <div class="row justify-center">
                <q-form 
                    @submit="onSubmit" 
                    @reset="onReset" 
                    className="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
                >
                    <q-input 
                        filled="" 
                        v-model="userForm.email" 
                        label="Email" 
                        type="email"
                        
                        lazy-rules="" 
                        :rules="[ 
                            val => val && val.length > 0 || 'Email is required',
                            isValidEmail
                        ]"
                    />

                    <q-input 
                        filled="" 
                        type="password" 
                        v-model="userForm.password1" 
                        label="Password" 
                        lazy-rules="" 
                        :rules="[ val => val && val.length > 0 || 'Password is required']"
                    />

                    <q-input 
                        filled="" 
                        type="password" 
                        v-model="userForm.password2" 
                        label="Repeat password" 
                        lazy-rules="" 
                        no-error-icon
                        :rules="[ 
                            val => val && val.length > 0 || 'Password is required',
                            isSamePassword
                        ]"
                    />

                    <q-checkbox 
                        v-model="userForm.conditions" 
                        label="Accept conditions" 
                        :style="userForm.errorInConditions && !userForm.conditions && 'color: red'"
                    />

                    <div class="row justify-end">
                        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                        <q-btn unelevated label="Submit" type="submit" color="primary"/>
                    </div>
                </q-form>

        </div>
    </q-page>
</template>

<script>
    import { defineComponent, ref } from 'vue'
    import { useQuasar } from 'quasar'

    export default defineComponent({
        name: 'FormPage',
        setup() {

            const $q = useQuasar()

            const userForm = ref({
                email: '',
                password1: '',
                password2: '',
                conditions: false,
                errorInConditions: false 
            })

            const onSubmit = () => {
                userForm.value.errorInConditions = false

                if ( !userForm.value.conditions) {
                    $q.notify({
                        message: 'Should accept conditions',
                        icon: 'las la-exclamation-circle'
                    })
                    userForm.value.errorInConditions = true
                    return
                }

                console.log(userForm.value);
            }

            const onReset = () => {
                userForm.value = {
                    email: '',
                    password1: '',
                    password2: '',
                    conditions: false,
                    errorInConditions: false 
                }
            }

            const isValidEmail = ( val ) => {
                const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;

                return emailPattern.test(val) || 'Email is not valid';
            }

            const isSamePassword = ( val ) => {
                return ( val === userForm.value.password1 ) || 'Password is not equal'
            }

            return {
                userForm,
                onSubmit,
                onReset,
                isValidEmail,
                isSamePassword
            }
        }
    })
</script>

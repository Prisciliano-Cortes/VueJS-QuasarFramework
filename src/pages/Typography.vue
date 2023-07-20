<template>
    <q-page class="flex column q-pa-md">
        <span class="text-h1">Headline 1</span>
        <span class="text-h2">Headline 2</span>
        <span class="text-h3">Headline 3</span>
        <span class="text-h4">Headline 4</span>
        <span class="text-h5">Headline 5</span>
        <span class="text-h6">Headline 6</span>

        <q-separator />

        <span class="text-subtitle1">Subtitle 1</span>
        <span class="text-subtitle2">Subtitle 2</span>

        <q-separator />

        <p class="text-body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis commodi nihil repellat eius illo ducimus porro. Quaerat illo praesentium earum voluptatibus sapiente adipisci, temporibus possimus amet libero vel corporis alias?</p>

        <p class="text-body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis commodi nihil repellat eius illo ducimus porro. Quaerat illo praesentium earum voluptatibus sapiente adipisci, temporibus possimus amet libero vel corporis alias?</p>

        <q-separator />

        <span class="text-weight-thin">Hello world</span>
        <span class="text-weight-light">Hello world</span>
        <span class="text-weight-regular">Hello world</span>
        <span class="text-weight-medium">Hello world</span>
        <span class="text-weight-bold">Hello world</span>
        <span class="text-weight-bolder">Hello world</span>

        <q-separator />

        <q-btn 
            color="primary"
            :label="openMenu ? 'Close menu' : 'Open menu'"
            class="q-mt-md"
            @click="toggleSideMenu"
        />
    </q-page>
</template>

<script>
    import { defineComponent } from 'vue'
    import useUI from '../composables/useUI'

    export default defineComponent({
        name: 'TypographyPage',

        setup() {
            const { openMenu, toggleSideMenu } = useUI()

            return {
                openMenu,
                toggleSideMenu
            }
        }
    })
</script>

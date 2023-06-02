<script setup>
import {Head, Link} from '@inertiajs/vue3';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <Head title="Welcome"/>

    <div
        class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-200 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"
    >
        <div>
            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 width="500px" height="500px" viewBox="0 0 34.5 34.5" xml:space="preserve">
<g>
	<path d="M34.5,20.375v-6.25h-4.514c-0.32-1.313-0.838-2.545-1.521-3.669l3.193-3.193l-4.42-4.419l-3.193,3.193
		c-1.125-0.683-2.355-1.2-3.67-1.521V0.001h-6.25v4.515c-1.313,0.321-2.546,0.838-3.671,1.521L7.262,2.844L2.843,7.263l3.193,3.193
		c-0.684,1.125-1.2,2.357-1.521,3.669H0v6.25h4.516c0.32,1.312,0.838,2.545,1.521,3.669l-3.193,3.191l4.419,4.421l3.192-3.193
		c1.125,0.685,2.357,1.2,3.671,1.521v4.516h6.25v-4.516c1.313-0.32,2.545-0.838,3.67-1.521l3.192,3.193l4.421-4.421l-3.193-3.191
		c0.685-1.125,1.199-2.355,1.521-3.669H34.5z M17.25,23.5c-3.451,0-6.25-2.798-6.25-6.25S13.799,11,17.25,11s6.25,2.798,6.25,6.25
		S20.701,23.5,17.25,23.5z"/>
</g>
</svg>
        </div>

    </div>
</template>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(128,128,128)'/%3E%3C/svg%3E");
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>

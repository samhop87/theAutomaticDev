<script setup>
import {Head, Link} from '@inertiajs/vue3';
import LinkedInButton from "@/Components/Buttons/LinkedInButton.vue";
import GithubButton from "@/Components/Buttons/GithubButton.vue";

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
        class="relative flex flex-col md:flex-row justify-center items-center min-h-screen bg-dots-darker bg-center bg-gray-200 dark:bg-dots-lighter dark:bg-gray-900 selection:text-white"
    >
        <div ref="upperButtons" class="flex flex-row justify-around w-1/4 hidden">
            <linked-in-button/>
        </div>
        <div ref="cog" class="relative my-16">
            <svg class="fill-black dark:fill-white w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 34.5 34.5" xml:space="preserve">
<g>
	<path d="M34.5,20.375v-6.25h-4.514c-0.32-1.313-0.838-2.545-1.521-3.669l3.193-3.193l-4.42-4.419l-3.193,3.193
		c-1.125-0.683-2.355-1.2-3.67-1.521V0.001h-6.25v4.515c-1.313,0.321-2.546,0.838-3.671,1.521L7.262,2.844L2.843,7.263l3.193,3.193
		c-0.684,1.125-1.2,2.357-1.521,3.669H0v6.25h4.516c0.32,1.312,0.838,2.545,1.521,3.669l-3.193,3.191l4.419,4.421l3.192-3.193
		c1.125,0.685,2.357,1.2,3.671,1.521v4.516h6.25v-4.516c1.313-0.32,2.545-0.838,3.67-1.521l3.192,3.193l4.421-4.421l-3.193-3.191
		c0.685-1.125,1.199-2.355,1.521-3.669H34.5z M17.25,23.5c-3.451,0-6.25-2.798-6.25-6.25S13.799,11,17.25,11s6.25,2.798,6.25,6.25
		S20.701,23.5,17.25,23.5z"/>
</g>
</svg>
            <div ref=cogcenter class="absolute rounded-full hidden dark:bg-white bg-black">
                <p class="dark:text-black text-white leading-[4.75rem] font-display text-xl sm:text-headline">The Automatic Dev</p>
            </div>
        </div>
        <div ref="lowerButtons" class="flex flex-row justify-around w-1/4 hidden">
            <github-button/>
        </div>
    </div>
</template>

<script>
    import LinkinButton from "../Components/Buttons/LinkedInButton.vue";
    import GithubButton from "@/Components/Buttons/GithubButton.vue";
    export default {
        data() {
            return {
            }
        },
        components: {
            LinkinButton,
            GithubButton,
        },
        mounted() {
            this.$refs.cog.classList.add('rotate');
            setTimeout(() => {
                this.$refs.cog.classList.remove('rotate')
                this.$refs.cogcenter.classList.add('color-transition')
                this.$refs.cogcenter.classList.remove('hidden')
                this.$refs.upperButtons.classList.remove('hidden')
                this.$refs.lowerButtons.classList.remove('hidden')
            }, 4500);
        },
    };
</script>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(128,128,128)'/%3E%3C/svg%3E");
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}

.rotate {
    animation: rotate 12s linear infinite;
    z-index: 10000;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.color-transition {
    width: 50%;
    height: 50%;
    background-size: 200% 200%;
    top: 8.75rem;
    left: 6.65rem;
}
</style>

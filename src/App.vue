<script setup>
	import { useQuery } from '@tanstack/vue-query';
	import { getImages } from './services/fetchImages';
	import Title from './components/Title.vue';
	import ImageCarousel from './components/ImageCarousel.vue';
	import Loader from './components/Loader.vue';
	import Error from './components/Error.vue';

	const { data, isPending, isError } = useQuery({
		queryKey: ['images'],
		queryFn: getImages,
	});
</script>

<template>
	<div class="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200">
		<div
			class="py-5 md:p-10 max-w-[1920px] mx-auto min-h-screen"
			:class="{ 'flex items-center flex-col': isPending }"
		>
			<Title />
			<Loader v-if="isPending" />
			<Error v-else-if="isError" />
			<ImageCarousel :images="data || []" v-else />
		</div>
	</div>
</template>

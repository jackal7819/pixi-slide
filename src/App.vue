<script setup>
	import { useQuery } from '@tanstack/vue-query';
	import { getImages } from './services/fetchImages';
	import Title from './components/Title.vue';
	import ImageCarousel from './components/ImageCarousel.vue';

	const { data, isLoading, isError } = useQuery({
		queryKey: ['images'],
		queryFn: getImages,
	});
</script>

<template>
	<div class="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200">
		<div class="py-5 md:p-10 max-w-[1920px] mx-auto min-h-screen">
			<Title />
			<ImageCarousel :images="data || []" />
		</div>
	</div>
</template>

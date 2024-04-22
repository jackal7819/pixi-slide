<script setup>
	import { useQuery } from '@tanstack/vue-query';
	import { ref } from 'vue';
	import { getImages } from './services/fetchImages';
	import Title from './components/Title.vue';
	import ImageCarousel from './components/ImageCarousel.vue';
	import SelectedImageListUrl from './components/SelectedImageListUrl.vue';

	const page = ref(1);
	const { isPending, isError, data, error } = useQuery({
		queryKey: ['images'],
		queryFn: () => getImages(page),
	});
	console.log(data);
</script>

<template>
	<div class="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200">
		<div
			class="p-5 md:p-10 max-w-[1920px] mx-auto flex flex-col justify-between min-h-screen"
		>
			<Title />
			<ImageCarousel />
			<SelectedImageListUrl />
		</div>
	</div>
</template>

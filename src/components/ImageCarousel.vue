<script setup>
	import { ref, onMounted, nextTick } from 'vue';

	const props = defineProps({
		images: {
			type: Array,
			required: true,
		},
	});

	const windowWidth = ref(0);
	const visibleImages = ref(1);

	// onMounted(async () => {
	// 	await nextTick();
	// 	windowWidth.value = window.innerWidth;
	// });
	// const selectedImages = ref([]);
	// @click="toggleImageSelection(image.url)"
	// :class="{
	// 				'carousel__image--selected': selectedImages.includes(
	// 					image.url
	// 				),
	// 			}"
	windowWidth.value = window.innerWidth;
	windowWidth.value >= 1920
		? (visibleImages.value = 4)
		: windowWidth.value >= 1280
		? (visibleImages.value = 3)
		: windowWidth.value >= 768
		? (visibleImages.value = 2)
		: (visibleImages.value = 1);

	const prevImages = () => {
		console.log('prevImages');
	};

	const nextImages = () => {
		console.log('nextImages');
	};
</script>

<template>
	<div class="carousel">
		<div class="flex justify-center gap-5 mb-10">
			<div
				v-for="image in images.slice(0, visibleImages)"
				:key="image.id"
				class="w-[400px] rounded-lg"
			>
				<img
					:src="image.download_url"
					:alt="image.author"
					class="rounded-lg"
				/>
			</div>
		</div>
		<div class="flex justify-center gap-5">
			<button
				@click="prevImages"
				class="w-40 p-3 font-semibold text-center text-white duration-300 bg-black border-4 border-black rounded-lg hover:bg-amber-500 hover:border-amber-500 active:bg-amber-400"
			>
				Prev
			</button>
			<button
				@click="nextImages"
				class="w-40 p-3 font-semibold text-center text-white duration-300 bg-black border-4 border-black rounded-lg hover:bg-amber-500 hover:border-amber-500 active:bg-amber-400"
			>
				Next
			</button>
		</div>
	</div>
</template>

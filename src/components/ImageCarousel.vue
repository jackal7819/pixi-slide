<script setup>
	import { computed, ref } from 'vue';

	const props = defineProps({
		images: {
			type: Array,
			required: true,
		},
	});

	const windowWidth = ref(0);
	const visibleImages = ref(1);
	const currentIndex = ref(0);
	const selectedImages = ref([]);

	windowWidth.value = window.innerWidth;
	windowWidth.value >= 1920
		? (visibleImages.value = 4)
		: windowWidth.value >= 1280
		? (visibleImages.value = 3)
		: windowWidth.value >= 768
		? (visibleImages.value = 2)
		: (visibleImages.value = 1);

	const displayedImages = computed(() => {
		const start = currentIndex.value;
		const end = start + visibleImages.value;
		return props.images.slice(start, end);
	});

	const prevImages = () => {
		if (currentIndex.value === 0) {
			currentIndex.value = props.images.length - visibleImages.value;
		} else {
			currentIndex.value -= 1;
		}
	};

	const nextImages = () => {
		if (currentIndex.value + visibleImages.value >= props.images.length) {
			currentIndex.value = 0;
		} else {
			currentIndex.value += 1;
		}
	};

	const toggleSelectImage = (image) => {
		const index = selectedImages.value.findIndex(
			(selectedImage) => selectedImage.id === image.id
		);
		if (index === -1) {
			selectedImages.value.push(image);
		} else {
			selectedImages.value.splice(index, 1);
		}
	};

	const isSelected = (image) => {
		return selectedImages.value.some(
			(selectedImage) => selectedImage.id === image.id
		);
	};
</script>

<template>
	<div>
		<div class="flex justify-center gap-5 mb-10" v-auto-animate>
			<div
				v-for="image in displayedImages"
				:key="image.id"
				class="w-full md:rounded-lg md:w-[400px] md:h-[266px]"
				@click="toggleSelectImage(image)"
			>
				<img
					:src="image.download_url"
					:alt="image.author"
					class="w-full duration-300 border-4 md:h-full md:rounded-lg mobile"
					:class="{
						'border-amber-500': isSelected(image),
						'border-white': !isSelected(image),
					}"
				/>
			</div>
		</div>
		<div class="flex justify-center gap-5 px-5 mb-10 md:0">
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
		<div
			class="flex flex-col items-center justify-center gap-5"
			v-auto-animate
		>
			<div v-for="image in selectedImages" :key="image.id">
				<a
					:href="image.url"
					target="_blank"
					class="text-lg font-semibold duration-500 hover:text-amber-500"
					>{{ image.url }}</a
				>
			</div>
		</div>
	</div>
</template>

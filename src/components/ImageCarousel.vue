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
</script>

<template>
	<div class="carousel">
		<div class="flex justify-center gap-5 mb-10">
			<div
				v-for="image in displayedImages"
				:key="image.id"
				class="w-full md:rounded-lg md:w-[400px] md:h-[266px]"
			>
				<Transition name="slide-fade">
					<img
						:src="image.download_url"
						:alt="image.author"
						class="w-full md:h-full md:rounded-lg mobile"
					/>
				</Transition>
			</div>
		</div>
		<div class="flex justify-center gap-5 px-5 md:0">
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

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

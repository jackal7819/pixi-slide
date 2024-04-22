const URL = 'https://picsum.photos/v2/list';

export const getImages = async () => {
	const response = await fetch(`${URL}?page=1&limit=1000`);
	const data = await response.json();
	return data;
};

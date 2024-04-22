const URL = 'https://picsum.photos/v2/list';

export const getImages = async (page) => {
	const response = await fetch(`${URL}?page=${page}&limit=1000`);
	const data = await response.json();
	return data;
};

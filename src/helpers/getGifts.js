export const getGifts = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=0y6QRPfsUcceKpt7YGZC8Fcj11TgbkRN&q=${category}&limit=10`
	try {
		const response = await fetch(url)
		const { data } = await response.json()
		const gifs = data.map((img) => ({
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url
		})
		)
		return gifs
	} catch (error) {
		console.log(error)
	}
}
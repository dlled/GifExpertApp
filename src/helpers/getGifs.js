const getGifs = async (category) => {

    const limit = 10
    const api_key = 'ysTN3tuvRru8KILGO1LINWOvWtxQchHT'
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=${limit}&api_key=${api_key}`

    const resp = await fetch(url);

    const data = await resp.json();

    const gifs = data.data.map(img => {
        return {
            id: img.id,
            title: img.title,
            data_url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}

export default getGifs;
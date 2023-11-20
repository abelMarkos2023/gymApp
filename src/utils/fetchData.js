export const exerciseOption = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async(url, option) => {

    try {
        let data = await fetch(url, option);
        data = await data.json();
        return data
    } catch (error) {
        console.error(error.message)
    }
}

export const youtubeOptions = {
    method: 'GET',
    params: { id: 'UCE_M8A5yxnLfW0KghEeajjw' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};
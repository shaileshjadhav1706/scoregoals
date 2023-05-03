

export const getReviews = async () => {
    const url = 'https://service-reviews-ultimate.elfsight.com/data/reviews?uris%5B%5D=ChIJF7OU-XnH5zsRWT7qzCkC71Y&with_text_only=1&min_rating=5&page_length=100&order=date'
    const response = await fetch(url);
    const { result } = await response.json(); //extract JSON from the http response
    return result.data

}
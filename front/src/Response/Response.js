// const API_URL = process.env.REACT_APP_API_URL
const API_URL = 'http://localhost:3000'

export const Res = async ({sliderData, primeryCardData, soldSliderData, articlesData}) => {
    let hasError = false;

    try {
        const response = await fetch(`${API_URL}/api/slider`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        sliderData(result.data);
    } catch (err) {
        console.error('Ошибка загрузки слайдов:', err.message);
        hasError = true;
    }

    try {
        const response = await fetch(`${API_URL}/api/primery_card`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        primeryCardData(result.data);
    } catch (err) {
        console.error('Ошибка загрузки слайдов:', err.message);
        hasError = true;
    }

    try {
        const response = await fetch(`${API_URL}/api/sold_slider`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        soldSliderData(result.data);
    } catch (err) {
        console.error('Ошибка загрузки слайдов:', err.message);
        hasError = true;
    }

    try {
        const response = await fetch(`${API_URL}/api/articles`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        articlesData(result.data);
    } catch (err) {
        console.error('Ошибка загрузки слайдов:', err.message);
        hasError = true;
    }

    if (hasError) {
        throw new Error('Ошибка загрузки данных с сервера');
    }
}
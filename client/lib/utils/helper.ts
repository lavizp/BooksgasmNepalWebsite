export const getDiscountedPricePercentage = (
    originalPrice : number,
    discountedPrice: number
): string => {
    const discount = originalPrice - discountedPrice;

    const discountPercentage = (discount / originalPrice) * 100;

    return discountPercentage.toFixed(2);
};

export const capitaliseFirstLetter = (word: string) =>{
    return word.charAt(0).toUpperCase() + word.slice(1);
}

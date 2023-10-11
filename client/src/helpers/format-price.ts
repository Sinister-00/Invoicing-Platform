const formatPrice = (price: number) =>
  Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(price / 10);

export default formatPrice;

export const transformListing = (item: any) => ({
  id: item.id,
  title: item.name,
  price: item.price?.amount,
  image: item.images?.[0],
  rating: item.rating,
});
import { useParams } from "react-router-dom";
import { useListings } from "../hooks/useListings";

const ListingDetails = () => {
  const { id } = useParams();
  const { data } = useListings("ChIJzUjW8pYQLxgRZ7nH6dXr8zA");

  const listing = data?.data?.find((item: any) => item.id === id);

  if (!listing) return <p>Not found</p>;

  return (
    <div>
      <h2>{listing.name}</h2>
      <img src={listing.images?.[0]} width="300" />
      <p>{listing.description}</p>
    </div>
  );
};

export default ListingDetails;
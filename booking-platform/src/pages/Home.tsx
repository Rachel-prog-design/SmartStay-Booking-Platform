import { useListings } from "../hooks/useListings";
import ListingCard from "../components/ListingCard";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import { transformListing } from "../utils/transformData";

const Home = () => {
  const { data, isLoading, error } = useListings("ChIJzUjW8pYQLxgRZ7nH6dXr8zA"); // Kigali

  if (isLoading) return <Loader />;
  if (error) return <ErrorState message="Failed to load" />;

  return (
    <div>
      {(data as any)?.data?.map((item: any) => {
        const listing = transformListing(item);
        return <ListingCard key={listing.id} listing={listing} />;
      })}
    </div>
  );
};

export default Home;
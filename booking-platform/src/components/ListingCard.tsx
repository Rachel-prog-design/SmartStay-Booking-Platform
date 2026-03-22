import { Link } from "react-router-dom";

const ListingCard = ({ listing }: any) => {
  return (
    <div>
      <img src={listing.image} width="200" />
      <h3>{listing.title}</h3>
      <p>${listing.price}</p>
      <Link to={`/listing/${listing.id}`}>View</Link>
    </div>
  );
};

export default ListingCard;
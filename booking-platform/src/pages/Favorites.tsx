import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div>
      {favorites.map((f: any) => (
        <p key={f.id}>{f.title}</p>
      ))}
    </div>
  );
};

export default Favorites;
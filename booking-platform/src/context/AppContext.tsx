import { createContext, useState, useEffect } from "react";

export const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const addFavorite = (item: any) => {
    const updated = [...favorites, item];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <AppContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </AppContext.Provider>
  );
};
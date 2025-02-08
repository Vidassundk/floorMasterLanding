"use client";
import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";

// Define the type for rating data
type RatingData = {
  rating: number;
  voteCount: number;
  updatedAt: number;
} | null;

// Define the type for the context value
interface PlaceRatingContextType {
  ratingData: RatingData;
  fetchRating: () => Promise<void>;
}

// Create context with a default empty value
const PlaceRatingContext = createContext<PlaceRatingContextType | undefined>(
  undefined
);

export function PlaceRatingProvider({ children }: { children: ReactNode }) {
  const [ratingData, setRatingData] = useState<RatingData>(null);

  useEffect(() => {
    const loadRating = async () => {
      const storedData = localStorage.getItem("placeRating");
      if (storedData) {
        const parsedData: RatingData = JSON.parse(storedData);
        const isFresh =
          Date.now() - parsedData!.updatedAt < 24 * 60 * 60 * 1000; // 24h freshness check
        if (isFresh) {
          setRatingData(parsedData);
          return;
        }
      }
      fetchRating(); // Fetch new data if expired or missing
    };

    loadRating();
  }, []);

  const fetchRating = async () => {
    const placeId = "ChIJ94BXq5c_OkYR57N6ApP1XsE"; // Replace with dynamic placeId if needed
    try {
      const response = await fetch(`/api/getPlaceRating?placeId=${placeId}`);
      const data = await response.json();
      if (data.rating) {
        const newRatingData: RatingData = {
          rating: data.rating,
          voteCount: data.voteCount,
          updatedAt: Date.now(),
        };
        setRatingData(newRatingData);
        localStorage.setItem("placeRating", JSON.stringify(newRatingData));
      }
    } catch (err) {
      console.error("Error fetching rating:", err);
    }
  };

  return (
    <PlaceRatingContext.Provider value={{ ratingData, fetchRating }}>
      {children}
    </PlaceRatingContext.Provider>
  );
}

// Custom hook for consuming the context
export function usePlaceRating() {
  const context = useContext(PlaceRatingContext);
  if (!context) {
    throw new Error("usePlaceRating must be used within a PlaceRatingProvider");
  }
  return context;
}

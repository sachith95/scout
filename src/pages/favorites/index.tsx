import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import {
  getFavoriteValueAsync,
  setFavoriteValueAsync,
} from "../../redux/reducers/favoriteSlice";
import FavCard from "../../components/fav-card";

export default function Favorites() {
  const dispatch = useAppDispatch();
  const { value: favoriteValue, status: favoriteStatus } = useAppSelector(
    (state: any) => state.favorite
  );
  const [name, setName] = useState("");

  const handleClick = () => {
    dispatch(setFavoriteValueAsync(name));
  };

  useEffect(() => {
    dispatch(getFavoriteValueAsync());
  }, []);

  return (
    <div className="container w-full mx-auto">
      <div className="flex items-center justify-between w-full">
        <div className="px-5 my-10">
          <label className="block mt-3 mb-1 font-bold text-purple-500">
            Collection Name
          </label>
          <div className="flex gap-2">
            <input
              className="h-10 px-5 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              placeholder="Name"
            />
            <button
              className="h-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleClick}
            >
              Create New Collection
            </button>
          </div>
          <div className="container py-10 overflow-y-auto max-h-96">
            <div className="grid grid-cols-4 gap-4">
              {favoriteStatus === "idle" &&
                favoriteValue.map((item: any, index: number) => (
                  <FavCard
                    key={index}
                    name={item.name}
                    children={
                      <div className="flex flex-row place-content-end">
                        <ul className="p-2 list-disc">
                          {item.restaurantId.map(
                            (restaurant: any, index: number) => (
                              <li className="text-sm" key={index}>
                                {restaurant.name}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    }
                  />
                ))}
              {favoriteStatus === "pending" && (
                <div className="text-center">
                  <div className="text-purple-500 spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

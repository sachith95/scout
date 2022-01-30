import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import { getSearchValueAsync } from "../../redux/reducers/searchSlice";
import {
  addToFavoriteQueryAsync,
  getFavoriteValueAsync,
} from "../../redux/reducers/favoriteSlice";
import Modal from "../../components/modal";

export default function Search(props: any) {
  const dispatch = useAppDispatch();
  const { value, status } = useAppSelector((state: any) => state.search);
  const { value: favoriteValue, status: favoriteStatus } = useAppSelector(
    (state: any) => state.favorite
  );
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState({
    name: "",
    _id: "",
  });

  const handleClick = () => {
    dispatch(
      getSearchValueAsync({
        name: search,
        timestamp: startDate,
      })
    );
  };

  const handleAddToFavorite = (val: any) => {
    dispatch(
      addToFavoriteQueryAsync({ name: val, _id: selectedRestaurant._id })
    );
  };

  const handleLikeAction = (_id: any, name: any) => {
    setShowModal(true);
    setModalMessage(`${name}`);
    setSelectedRestaurant({ _id, name });
  };

  useEffect(() => {
    dispatch(getFavoriteValueAsync());
  }, []);

  return (
    <div className="container w-full mx-auto">
      <div className="flex flex-row place-content-end">
        <Link to="/favorite">
          <button
            type="button"
            className="h-10 mt-10 place-self-end text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            My Favorites Collection
          </button>
        </Link>
      </div>
      <div className="flex gap-2 my-10">
        <div>
          <label className="block mt-3 mb-1 font-bold text-purple-500">
            Restaurant name
          </label>
          <input
            className="h-10 px-5 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
            type="search"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
            placeholder="Search"
          />
        </div>
        <div>
          <label className="block mt-3 mb-1 font-bold text-purple-500">
            Date & time range
          </label>
          <div className="flex gap-2">
            <DatePicker
              selected={startDate}
              className="h-10 px-5 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
              onChange={(date: any) => setStartDate(date)}
              showTimeSelect
              timeIntervals={30}
              timeCaption="time"
              dateFormat="MMMM d, h:mm aa"
            />
          </div>
        </div>
        <button
          onClick={() => {
            handleClick();
          }}
          className="h-10 mt-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Search
        </button>
      </div>
      <div className="container overflow-y-auto max-h-96">
        <div className="grid grid-cols-4 gap-4">
          {status === "idle" &&
            value.map((item: any) => (
              <Card
                key={item._id}
                name={item.name}
                openingHours={item.opening_hours}
                liked="false"
                likeAction={() => handleLikeAction(item._id, item.name)}
              ></Card>
            ))}
          {status === "pending" && (
            <div className="text-center">
              <div className="text-purple-500 spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {showModal ? (
            <Modal
              Close={() => setShowModal(false)}
              Save={(val) => handleAddToFavorite(val)}
              message={modalMessage}
              collectionsList={
                favoriteValue.length > 0
                  ? favoriteValue.map((item: any) => item.name)
                  : []
              }
            ></Modal>
          ) : null}
        </div>
      </div>
    </div>
  );
}

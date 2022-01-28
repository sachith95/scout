import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import Card from "../../components/card";

export default function Search(props: any) {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state: any) => state.search);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              startDate={startDate}
              endDate={endDate}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <DatePicker
              selected={endDate}
              className="h-10 px-5 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
              onChange={(date: any) => setEndDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
        </div>
        <button
          type="submit"
          className="h-10 mt-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Card
          title="Restaurant 1"
          description="This is a description"
          liked={true}
        />
        <Card title="Restaurant 2" description="This is a description" />
        <Card title="Restaurant 3" description="This is a description" />
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Modal(props: {
  Close: () => void;
  Save: (val: string) => void;
  message: string;
  collectionsList?: any;
}) {
  const [collectionName, setCollectionName] = useState("");

  return (
    <React.Fragment>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-2xl mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*body*/}
            <div className="relative flex-auto p-6">
              <p className="my-4 text-lg leading-relaxed text-blueGray-500">
                {props.message}
              </p>
              <div>
                <p className="text-sm font-medium leading-5 text-gray-900">
                  Please Select Favorite Collection To Add:
                </p>
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center">
                    {props.collectionsList.map((collection: any) => {
                      return (
                        <div className="flex items-center mx-2">
                          <input
                            className="mr-2"
                            type="checkbox"
                            name="collection"
                            onChange={() => {
                              setCollectionName(collection);
                            }}
                            value={collection}
                          />
                          <label className="mx-0.5 uppercase text-sm font-medium tracking-wide text-gray-700">
                            {collection}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-1 border-t border-solid rounded-b border-blueGray-200">
              <button
                className="h-10 px-5 mr-2 text-sm font-medium text-center text-red-500 rounded-lg place-self-end hover:bg-gray-900 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
                type="button"
                onClick={() => props.Close()}
              >
                Close
              </button>
              <button
                className="h-10 px-5 mr-2 text-sm font-medium text-center text-purple-600 rounded-lg place-self-end hover:bg-gray-900 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
                type="button"
                onClick={() => props.Save(collectionName)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </React.Fragment>
  );
}

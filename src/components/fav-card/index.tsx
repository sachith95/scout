import { Children } from "react";

export default function FavCard(props: { name: string; children: any }) {
  return (
    <div className="flex flex-col w-full max-w-md p-4 text-black bg-purple-300 shadow-lg rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="font-bold uppercase text-md">{props.name}</div>
        </div>
      </div>
      <div className="mt-4 text-sm font-bold text-gray-500">
        {props.children}
      </div>
    </div>
  );
}

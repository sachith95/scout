export default function Card(props: {
  name: string;
  likeAction: () => void;
  liked?: any;
  openingHours?: string;
}) {
  return (
    <div className="flex flex-col w-full max-w-md p-4 text-black bg-purple-300 shadow-lg rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="font-bold text-md">{props.name}</div>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className="text-gray-500 cursor-pointer hover:text-gray-300"
            onClick={() => props.likeAction()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill={props.liked ? "red" : "none"}
              viewBox="0 0 23 23"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm font-bold text-gray-500">
        {props.openingHours}
      </div>
    </div>
  );
}

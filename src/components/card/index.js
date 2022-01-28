export default function Card(props) {
  return (
    <div class="bg-white text-black w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="text-md font-bold">{props.title}</div>
        </div>
        <div class="flex items-center space-x-4">
          <div class="text-gray-500 hover:text-gray-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill={props.liked ? "red" : "none"}
              viewBox="0 0 23 23"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="mt-4 text-gray-500 font-bold text-sm"># TODO</div>
    </div>
  );
}

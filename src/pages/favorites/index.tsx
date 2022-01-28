export default function Favorites() {
  return (
    <div className="container w-full mx-auto">
      <div className="flex items-center justify-between w-full">
        <a
          className="flex items-center pt-5 text-2xl font-bold text-indigo-400 no-underline hover:no-underline lg:text-4xl"
          href="/"
        >
          Scout
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            food
          </span>
        </a>
      </div>
    </div>
  );
}

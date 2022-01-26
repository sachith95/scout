

export default function Header(props:any) {
    return (
        <div className="w-full container mx-auto">
          <div className="w-full flex items-center justify-between">
            <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl pt-5" href="#"
            >
              Scout<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">food</span>
            </a>
          </div>
        </div>
    );
}
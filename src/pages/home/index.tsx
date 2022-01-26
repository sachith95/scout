
import tableSvg from '../../assets/tableLogo.svg';

export default function Home(props:any) {
    return (
        <div className="w-full container mx-auto">
            <div className="w-full flex items-center justify-between">
            <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Find Your &nbsp;
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Favorite Restaurant
            </span>
          </h1>

        </div>
        <div className="w-full xl:w-3/5 p-12 overflow-hidden">
            <img className="w-full h-full" src={tableSvg} alt="table" />
          {/* <img className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src={tableSvg} /> */}
        </div>
      </div>
            </div>
        </div>
    );
}
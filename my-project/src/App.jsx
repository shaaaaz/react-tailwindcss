import './App.css'

function App() {

  return (
    <>
      <div className="h-1 bg-blue-800">

      </div>

      <nav className="flex justify-between items-center px=8  bg-red-400 h-20">
        <div className="flex space-x-10 text-white">
          <h4 className="font-bold ">KALVIUM</h4>
          <h4>About Us</h4>
          <h4>Contact Us</h4>
          <h4>Courses</h4>
        </div>
        <div>
          <button className='outline outline-2 text-white px-20 py-1 hover:bg-red-500 h-10 mr-20'>
            LOGIN
          </button>
        </div>
      </nav>

      <div className="container m-auto">
        <button className="bg-blue-500 m-10 px-4 py-2 text-white font-bold rounded">
          BUTTON ONE
        </button>

        <div className="bg-red-200 border border-red-600 px-5 py-3 space-x-2 text-red-500">
          <strong>ALERT!</strong>
          <span>This is Awesome!</span>
        </div>

        <div className="m-auto flex w-fit space-x-2 mt-10">
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className="" />
          <div>
            <h3 className="font-bold">Kalvium Store</h3>
            <p>You jave a new Carousel</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 py-4 mt-60 bottom-0 absolute w-full">
        <h4 className="text-center">0 2023 Copyright: Kalvium</h4>
      </div>
    </>
  )
}

export default App

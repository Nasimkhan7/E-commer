import React from 'react'

const Home = () => {
  return (
    <div>
     {/* Hero Section */}
     <div>
     <>
  {/* Slider */}
  <div className="px-4 lg:px-6 lg:px-8 py-10">
    <div
      data-hs-carousel='{
"loadingClasses": "opacity-0"
    }'
      className="relative"
    >
      <div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)]  bg-gray-100 rounded-2xl dark:bg-neutral-800">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          {/* Item */}
          <div className="hs-carousel-slide">
            <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('https://images.unsplash.com/photo-1615615228002-890bb61cac6e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
              <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                <span className="block text-white">Nike React</span>
                <span className="block text-white text-xl md:text-3xl">
                  Rewriting sport's playbook for billions of athletes
                </span>
                <div className="mt-5">
                  <a
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Read Case Studies
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Item */}
          {/* Item */}
          <div className="hs-carousel-slide">
            <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
              <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                <span className="block text-white">CoolApps</span>
                <span className="block text-white text-xl md:text-3xl">
                  From mobile apps to gaming consoles
                </span>
                <div className="mt-5">
                  <a
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Read Case Studies
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Item */}
          {/* Item */}
          <div className="hs-carousel-slide">
            <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
              <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                <span className="block text-white">Grumpy</span>
                <span className="block text-white text-xl md:text-3xl">
                  Bringing Art to everything
                </span>
                <div className="mt-5">
                  <a
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Read Case Studies
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Item */}
        </div>
      </div>
      {/* Arrows */}
      <button
        type="button"
        className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20"
      >
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="shrink-0 size-3.5 md:size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20"
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="shrink-0 size-3.5 md:size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </span>
      </button>
      {/* End Arrows */}
    </div>
  </div>
  {/* End Slider */}
</>


     </div>
     {/* Comming Soon Banner */}
     <>
  {/* Announcement Banner */}
  <div className="bg-gradient-to-r from-purple-600 to-blue-400">
    <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
        <div className="text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
          <p className="me-5 inline-block text-sm font-semibold text-white">
            Ready to get started?
          </p>
          <a
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border-2 border-white text-white hover:border-white/70 hover:text-white/70 focus:outline-none focus:border-white/70 focus:text-white/70 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Sign up
          </a>
        </div>
        {/* End Col */}
        <div className="flex items-center">
          <a
            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 transition text-sm"
            href="#"
          >
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Watch demo
          </a>
          <span className="inline-block border-e border-white/30 w-px h-5 mx-2" />
          <a
            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 transition text-sm"
            href="#"
          >
            Explore what's new (Comming Soon)
          </a>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  </div>
  {/* End Announcement Banner */}
</>


    </div>
  )
}

export default Home;
import React from 'react'

function Herobanner() {
    return (
        <section
        className=" w-screen h-[90vh] bg-contain bg-center bg-no-repeat flex items-end"
          style={{
        backgroundImage:
      "url('https://i.pinimg.com/736x/ef/93/36/ef933636aeb7dbcc75b5df74d68ef032.jpg')",
  }}
>
  <div>
    <h1 className="text-2xl font-bold mb-4 text-white opacity-70">
      Deadpool & Wolverine
    </h1>

    <button className="px-15 py-4 bg-linear-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:shadow-lg">
      Watch Now
    </button>
  </div>
</section>
    )
}

export default Herobanner

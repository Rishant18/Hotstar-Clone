import React,{useEffect,useState} from 'react'

function Herobanner() {
   const [show, setShow] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        const randomShow = data[Math.floor(Math.random() * 50)];
        setShow(randomShow);
      });
  }, []);

  if (!show) {
    return (
      <div className="h-[70vh] bg-gray-900 animate-pulse"></div>
    );
  }
    return (

        <section
        className=" w-screen h-[90vh] bg-contain bg-center bg-no-repeat flex items-end pl-12 "
          style={{
            
        backgroundImage:
       `url(${show.image?.original || show.image?.medium})`,
  }}
>
  <div>
    <h1 className="text-2xl font-bold mb-4 text-white opacity-70">
     {show.name}
    </h1>
     <p className="text-gray-300 mt-4 max-w-2xl line-clamp-3">
  {show.summary?.replace(/<[^>]*>/g, "")}
     </p>

    <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition">
  ▶ Watch Now
</button>
  </div>
</section>
    )
}

export default Herobanner

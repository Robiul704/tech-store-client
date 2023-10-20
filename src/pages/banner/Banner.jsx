

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/xh3PXtT/bannner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Technology and Electronics</h1>
      <p className="mb-5">The list of top mobile brands ranking includes Apple, Samsung, Vivo, Oppo, Xiaomi followed by Realme, Motorola, Honor etc. The leading global mobile phone brands comprise of players which have a strong global presence. Customers have a wide range of handsets to choose from the various offerings from the biggest mobile phone brands. Here is the list of the top 10 mobile companies in the world in 2023.</p>
      <div>
      <input type="text" placeholder="Type here" className=" py-3 text-xl  rounded-l-lg  w-full max-w-xs" />
      <button className="py-3 px-5 bg-green-400 rounded-r-lg font-bold text-white text-xl">Search</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
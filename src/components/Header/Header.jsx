const Header = () => {
  
  return (
    
    <div>
      <div
        className="hero min-h-screen my-6"
        style={{
          backgroundImage:
            "url('../../../public/Resources/Rectangle 4287.png')",
        }}
      >
        <div className="bg-white hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="  flex flex-col text-center justify-center items-center   ">
            <h1 className="text-xl md:text-3xl font-bold text-black">
              I Grow By Helping People In Need
            </h1>
            <div className="mt-4">
              <input
                type="text"
                name=""
                id=""
                placeholder="search"
                className=" border border-gray-500 border-[1] rounded-lg mr-1 p-2"
              />
              <button className="btn-secondary bg-[#FF444A] py-2 px-3 rounded-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

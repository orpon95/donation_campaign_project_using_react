const Header = () => {
  return (
    <div >
      <div className=" flex flex-col text-center justify-center items-center border border-2 border-red-400 h-[40vh]">
        <h1 className="text-3xl font-bold">I Grow By Helping People In Need</h1>
        <div className="mt-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="search"
            className=" border border-gray-500 border-[1] rounded-lg mr-1 p-2"
          />
          <button className="btn-secondary bg-[#FF444A] py-2 px-3 rounded-lg">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

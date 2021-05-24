import React from "react";

const Home = () => {
  return;
  <>
    <div className="flex justify-center">
      <form className="flex m-4" onSubmit={onSubmit}>
        <input
          className="p-4 mr-0 text-gray-800 bg-white border-t border-b border-l border-gray-200 rounded-l-lg"
          placeholder="Add language"
          value={language}
          onChange={(e) => setlanguage(e.target.value)}
        />
        <button type="submit" className="home-btn">
          Add
        </button>
      </form>
    </div>
    {data?.map((lan, index) => (
      <Item key={index} lan={lan} />
    ))}
  </>;
};

export default Home;

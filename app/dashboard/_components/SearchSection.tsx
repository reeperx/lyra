import { Search } from "lucide-react";
import React from "react";

type Props = {};

function SearchSection({ onSearchInput } : any) {
  return (
    <div className="p-10 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-400 justify-center items-center flex flex-col text-white">
      <h2 className="text-3xl font-bold">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-6 w-[60%]">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="search...."
            className="bg-transparent outline-none w-full text-primary"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;

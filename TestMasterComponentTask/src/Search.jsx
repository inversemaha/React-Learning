function Search() {
  return (
    <div className="flex gap-4 mb-4 w-full">
      <div className="w-[30%] mt-2">
        <input
          type="text"
          placeholder="Search for books..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="w-[15%] flex items-center">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mr-2"
          />
          <span className="text-gray-700 font-medium text-sm">
            Show Premium Only
          </span>
        </label>
      </div>
    </div>
  );
}

export default Search;

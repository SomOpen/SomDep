import SearchIcon from "../Icons/SearchIcon";

export default function SearchComponent() {
  return (
    <div className="w-full flex gap-3 items-center justify-center">
      <input
        type="search"
        placeholder="Search..."
        className="p-3 border border-slate-200 rounded-md bg-white shadow-md outline-none max-w-[500px] w-full"
      />
      <button className="cursor-pointer p-3 bg-emerald-400 text-slate-50 rounded-md border border-slate-100 shadow-md">
        <SearchIcon />
      </button>
    </div>
  )
}
export default function Headbar() {
  return (
    <div>
      <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl ml-5 p-4">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ShareIt
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}

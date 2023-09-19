import React, { useEffect, useState } from "react";

export default function MainText() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState<Boolean>(false);

  // 데이터 가져오기
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myText = urlParams.get("t");
    if (myText != null) {
      const tempText = JSON.parse(decodeURIComponent(escape(atob(myText))));
      setValue(tempText);
      console.log(tempText);
    }
  }, []);

  let save;

  return (
    <div className="w-100">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your Text
      </label>
      <textarea
        id="message"
        rows={4}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          save = btoa(
            unescape(encodeURIComponent(JSON.stringify(e.target.value)))
          );
          window.history.pushState({}, "", "?t=" + save);
        }}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 2000);
        }}
        className="text-white m-3 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Share
      </button>
      {/* alert */}
      <div
        className={
          "transition-opacity duration-300 flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 " +
          (show ? "opacity-100" : "opacity-0")
        }
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">success!</span> url has been copied to
          your clipboard.
        </div>
      </div>
    </div>
  );
}

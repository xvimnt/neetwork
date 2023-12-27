import React from "react";

export const UIKanban = () => {
  return (
    <>
      {/* Component Start */}
      <div className="flex h-screen w-screen flex-col overflow-auto bg-gradient-to-tr from-tertiary-200 via-secondary-200 to-primary-200 text-gray-700">
        <div className="mt-6 px-10">
          <h1 className="text-2xl font-bold text-primary-800">
            Tablero de Clientes
          </h1>
        </div>
        <div className="mt-4 flex flex-grow space-x-6 overflow-auto px-10">
          <div className="flex w-72 flex-shrink-0 flex-col">
            <div className="flex h-10 flex-shrink-0 items-center px-2">
              <span className="block text-sm font-semibold">Backlog</span>
              <span className="ml-2 flex h-5 w-5 items-center justify-center rounded bg-white bg-opacity-30 text-sm font-semibold text-primary-500">
                6
              </span>
              <button className="ml-auto flex h-6 w-6 items-center justify-center rounded text-primary-500 hover:bg-primary-500 hover:text-primary-100">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col overflow-auto pb-2">
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="text-pink-500 bg-pink-100 flex h-6 items-center rounded-full px-3 text-xs font-semibold">
                  Design
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/26.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="flex h-6 items-center rounded-full bg-green-100 px-3 text-xs font-semibold text-green-500">
                  Dev
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="flex h-6 items-center rounded-full bg-green-100 px-3 text-xs font-semibold text-green-500">
                  Dev
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/men/46.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="flex h-6 items-center rounded-full bg-yellow-100 px-3 text-xs font-semibold text-yellow-500">
                  Copywriting
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="flex h-6 items-center rounded-full bg-green-100 px-3 text-xs font-semibold text-green-500">
                  Dev
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/48.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="flex h-6 items-center rounded-full bg-yellow-100 px-3 text-xs font-semibold text-yellow-500">
                  Copywriting
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/26.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-72 flex-shrink-0 flex-col">
            <div className="flex h-10 flex-shrink-0 items-center px-2">
              <span className="block text-sm font-semibold">Ready</span>
              <span className="ml-2 flex h-5 w-5 items-center justify-center rounded bg-white bg-opacity-30 text-sm font-semibold text-primary-500">
                3
              </span>
              <button className="ml-auto flex h-6 w-6 items-center justify-center rounded text-primary-500 hover:bg-primary-500 hover:text-primary-100">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col overflow-auto pb-2">
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="text-pink-500 bg-pink-100 flex h-6 items-center rounded-full px-3 text-xs font-semibold">
                  Design
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/26.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="flex h-6 items-center rounded-full bg-green-100 px-3 text-xs font-semibold text-green-500">
                  Dev
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/men/64.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="text-pink-500 bg-pink-100 flex h-6 items-center rounded-full px-3 text-xs font-semibold">
                  Design
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/26.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-72 flex-shrink-0 flex-col">
            <div className="flex h-10 flex-shrink-0 items-center px-2">
              <span className="block text-sm font-semibold">Doing</span>
              <span className="ml-2 flex h-5 w-5 items-center justify-center rounded bg-white bg-opacity-30 text-sm font-semibold text-primary-500">
                2
              </span>
              <button className="ml-auto flex h-6 w-6 items-center justify-center rounded text-primary-500 hover:bg-primary-500 hover:text-primary-100">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col overflow-auto pb-2">
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="text-pink-500 bg-pink-100 flex h-6 items-center rounded-full px-3 text-xs font-semibold">
                  Design
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/26.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="flex h-6 items-center rounded-full bg-green-100 px-3 text-xs font-semibold text-green-500">
                  Dev
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/men/64.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-72 flex-shrink-0 flex-col">
            <div className="flex h-10 flex-shrink-0 items-center px-2">
              <span className="block text-sm font-semibold">Review</span>
              <span className="ml-2 flex h-5 w-5 items-center justify-center rounded bg-white bg-opacity-30 text-sm font-semibold text-primary-500">
                3
              </span>
              <button className="ml-auto flex h-6 w-6 items-center justify-center rounded text-primary-500 hover:bg-primary-500 hover:text-primary-100">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col overflow-auto pb-2">
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="flex h-6 items-center rounded-full bg-green-100 px-3 text-xs font-semibold text-green-500">
                  Dev
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/men/64.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="flex h-6 items-center rounded-full bg-yellow-100 px-3 text-xs font-semibold text-yellow-500">
                  Copywriting
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="text-pink-500 bg-pink-100 flex h-6 items-center rounded-full px-3 text-xs font-semibold">
                  Design
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-72 flex-shrink-0 flex-col">
            <div className="flex h-10 flex-shrink-0 items-center px-2">
              <span className="block text-sm font-semibold">Blocked</span>
              <span className="ml-2 flex h-5 w-5 items-center justify-center rounded bg-white bg-opacity-30 text-sm font-semibold text-primary-500">
                1
              </span>
              <button className="ml-auto flex h-6 w-6 items-center justify-center rounded text-primary-500 hover:bg-primary-500 hover:text-primary-100">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col overflow-auto pb-2">
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="text-pink-500 bg-pink-100 flex h-6 items-center rounded-full px-3 text-xs font-semibold">
                  Design
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/26.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-72 flex-shrink-0 flex-col">
            <div className="flex h-10 flex-shrink-0 items-center px-2">
              <span className="block text-sm font-semibold">Done</span>
              <span className="ml-2 flex h-5 w-5 items-center justify-center rounded bg-white bg-opacity-30 text-sm font-semibold text-primary-500">
                3
              </span>
              <button className="ml-auto flex h-6 w-6 items-center justify-center rounded text-primary-500 hover:bg-primary-500 hover:text-primary-100">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col overflow-auto pb-2">
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="flex h-6 items-center rounded-full bg-yellow-100 px-3 text-xs font-semibold text-yellow-500">
                  Copywriting
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/26.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="flex h-6 items-center rounded-full bg-yellow-100 px-3 text-xs font-semibold text-yellow-500">
                  Copywriting
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="text-pink-500 bg-pink-100 flex h-6 items-center rounded-full px-3 text-xs font-semibold">
                  Design
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/men/46.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="text-pink-500 bg-pink-100 flex h-6 items-center rounded-full px-3 text-xs font-semibold">
                  Design
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/men/46.jpg"
                  />
                </div>
              </div>
              <div
                className="group relative mt-3 flex cursor-pointer flex-col items-start rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
                draggable="true"
              >
                <button className="absolute right-0 top-0 mr-2 mt-3 flex  h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <span className="flex h-6 items-center rounded-full bg-green-100 px-3 text-xs font-semibold text-green-500">
                  Dev
                </span>
                <h4 className="mt-3 text-sm font-medium">
                  This is the title of the card for the thing that needs to be
                  done.
                </h4>
                <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">Dec 12</span>
                  </div>
                  <div className="relative ml-4 flex items-center">
                    <svg
                      className="fill-current relative h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">4</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="fill-current h-4 w-4 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 leading-none">1</span>
                  </div>
                  <img
                    className="ml-auto h-6 w-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/26.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

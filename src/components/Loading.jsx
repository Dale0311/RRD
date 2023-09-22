function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex">
        <div className="relative">
          <div
            className="w-24 h-24 rounded-full absolute
            border-8 border-solid border-gray-200"
          ></div>

          <div
            className="w-24 h-24 rounded-full animate-spin absolute
            border-8 border-solid border-red-500 border-t-transparent"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;

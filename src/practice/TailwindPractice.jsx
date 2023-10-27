import "../index.css";
export const TailwindPractice = () => {
  return (
    <>
      <h1 className="text-center text-lg text-green-400">Hello World</h1>
      <div className="w-full h-10 bg-violet-200 border-violet-600 border-2 rounded-md my-4 p-2 ">
        <p className="text-center font-mono font-extrabold">A div</p>
      </div>

      {/* Layout */}
      <div className="fixed w-10 h-10 bg-red-500 top-0"></div>
      <div className="flex justify-between space-x-6 border-red-600 border-2 ">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
      </div>
      {/* Media query */}
      <div className="md:block hidden">
        <p>I will appear for device resultion larger than 768px</p>
      </div>
      <div className="max-md:block hidden">
        <p>I will appear for device resultion less than 768px</p>
      </div>
      {/* px - padding x py- padding y */}
      <button
        className="my-3 text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-700
  focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800"
      >
        Click Me
      </button>
      {/* only first li has yellow-100 background color */}
      {/* my-2 margin top and margin bottom */}
      <ul className="my-2 space-y-2">
        <li className="bg-white p2 first:bg-yellow-100">Item1</li>
        <li className="bg-white p2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
          Item2
        </li>
        <li className="bg-white p2 first:bg-yellow-100 odd:bg-blue-200 py-3 even:bg-green-200">
          Item3
        </li>
        <li className="bg-white p2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
          Item5
        </li>
        <li className="bg-white p2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
          Item2
        </li>
      </ul>
      {/* Theme dark: */}
      <div className="card">
        <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
          This is a test element
        </h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-blue-100">
          This is an even longer p tag element
        </p>
        {/* mt-8 margin-top 2rem*/}
        <button
          id="toggleDark"
          className="text-blue-900 px-4 py-2 text-sm font-medium mt-8 bg-blue-100 rounded-md"
          onClick={() => document.body.classList.toggle("dark")}
        >
          Toggle Dark Mode
        </button>
        {/* Costom style */}
      </div>
      <p className="text-[1.2rem] text-[chestnut] bg-[#969393] p-[16px]">
        Chestnut Color
      </p>
    </>
  );
};

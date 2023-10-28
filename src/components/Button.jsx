export const Button = ({ label, iconURL }) => {
  return (
    // leading-none: line-height:1
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red ">
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="icon url"
          className="ml-2 rounded-full w-5 h-5 "
        />
      )}
    </button>
  );
};

/* eslint-disable react/prop-types */
const InputBox = ({ inputLable, value }) => {
  return (
    <div className="border-[1px] border-orange-300 rounded-md relative">
      <input
        title="input"
        type="text"
        className="bg-transparent  w-full p-2 outline-none text-white"
        value={value}
      />
      <p className="text-[14px] font-normal z-90 bg-primary-gray text-primary-light-gray absolute top-[-12px] left-[18px] bg-gray px-2">
        {inputLable}
      </p>
    </div>
  );
};

export default InputBox;

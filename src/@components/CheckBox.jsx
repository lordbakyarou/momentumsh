/* eslint-disable react/prop-types */

const CheckBox = ({ isChecked, entity }) => {
  console.log(isChecked, entity);
  return (
    <div>
      <input
        id="checked-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-300 rounded"
        checked={isChecked}
      ></input>
      <label htmlFor="checked-checkbox" className="ms-2 text-sm text-white">
        {entity}
      </label>
    </div>
  );
};

export default CheckBox;

import profile from "@/assets/img/profile-circle.svg";
import PropTypes from "prop-types";

const InputField = ({
  label,
  name,
  value,
  placeholder,
  isValid,
  errorMessage,
  onChange,
  onBlur,
}) => {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block my-2 text-sm font-semibold dark:text-white"
      >
        {label}
      </label>
      <img
        src={profile}
        alt="profile-icon"
        className="absolute top-[38px] left-3"
      />
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        id={name}
        className={`block w-full px-12 py-3 text-sm border-2 ${
          !isValid
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-gray-200 focus:border-[#977FFF] focus:ring-[#977FFF] bg-white"
        } rounded-full disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 font-semibold `}
        placeholder={placeholder}
      />
      {!isValid && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isValid: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default InputField;

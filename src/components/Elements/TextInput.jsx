import PropTypes from "prop-types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const TextInput = ({
  id,
  label,
  image,
  alt,
  value,
  onChange,
  placeholder,
  errors,
}) => {
  return (
    <div className="relative space-y-1">
      <Label htmlFor={id}>{label}</Label>
      <img src={image} alt={alt} className="absolute top-[32px] left-3" />
      <Input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-12 py-3"
        error={errors ? true : false}
        autoComplete="off"
      />
      {errors && (
        <span className="text-xs font-semibold text-red-500">
          {errors ? errors.message : ""}
        </span>
      )}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  errors: PropTypes.object,
};

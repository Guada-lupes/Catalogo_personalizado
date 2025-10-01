import { useMemo } from "react";
import { useForm } from "../contexts/FormContext";

export function useAgencyPersonalization() {
  const { formData } = useForm();
  const colorBase = formData?.color;
  const agencyColorBorder = useMemo(() => {
    return formData?.color
      ? { border: `1px solid ${formData.color}` }
      : { border: "1px solid #2A34C6" };
  }, [formData?.color]);

  const agencyColor = useMemo(() => {
    return formData?.color
      ? { backgroundColor: formData.color }
      : { backgroundColor: "#2A34C6" };
  }, [formData?.color]);

  const border = useMemo(() => {
    return formData.color
      ? {
          borderColor: formData.color,
          borderStyle: "solid",
        }
      : { borderColor: "#0c0c0c", borderStyle: "solid" };
  }, [formData?.color]);

  return { agencyColorBorder, agencyColor, border, colorBase };
}

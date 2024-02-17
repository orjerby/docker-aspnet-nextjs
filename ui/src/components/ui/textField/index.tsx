// import type { TextFieldProps, ValidationResult } from "react-aria-components";
// import {
//   FieldError,
//   Input,
//   Label,
//   Text,
//   TextField,
// } from "react-aria-components";

// interface MyTextFieldProps extends TextFieldProps {
//   label?: string;
//   description?: string;
//   errorMessage?: string | ((validation: ValidationResult) => string);
// }

// export function MyTextField({
//   label,
//   description,
//   errorMessage,
//   ...props
// }: MyTextFieldProps) {
//   return (
//     <TextField {...props}>
//       <Label>{label}</Label>
//       <Input />
//       {description && <Text slot="description">{description}</Text>}
//       <FieldError>{errorMessage}</FieldError>
//     </TextField>
//   );
// }

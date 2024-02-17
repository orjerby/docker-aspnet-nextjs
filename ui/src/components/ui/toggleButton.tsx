// import { useRef } from "react";
// import { useToggleButton } from "react-aria";
// import { useToggleState } from "react-stately";

// export function ToggleButton(props: any) {
//   let ref: any = useRef();
//   let state = useToggleState(props);
//   let { buttonProps, isPressed } = useToggleButton(props, state, ref);

//   return (
//     <button
//       {...buttonProps}
//       style={{
//         background: isPressed
//           ? state.isSelected
//             ? "darkgreen"
//             : "gray"
//           : state.isSelected
//           ? "green"
//           : "lightgray",
//         color: state.isSelected ? "white" : "black",
//       }}
//       ref={ref}
//     >
//       {props.children}
//     </button>
//   );
// }

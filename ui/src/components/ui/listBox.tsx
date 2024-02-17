// import React from 'react'
// import {
//   AriaListBoxProps,
//   mergeProps,
//   useFocusRing,
//   useListBox,
//   useOption,
// } from 'react-aria'
// import { SelectState, useListState } from 'react-stately'
// import { ListBoxSection } from './listBoxSection'

// type ListBoxProps<T> = Partial<AriaListBoxProps<T>> & {
//   state?: SelectState<T>
// }

// export function ListBox<T extends object>(props: ListBoxProps<T>) {
//   let ref = React.useRef(null)
//   let { state = useListState(props) } = props
//   let { listBoxProps, labelProps } = useListBox(props, state, ref)

//   return (
//     <>
//       <div {...labelProps}>{props.label}</div>
//       <ul {...listBoxProps} ref={ref}>
//         {[...state.collection].map((item) =>
//           item.type === 'section' ? (
//             <ListBoxSection key={item.key} section={item} state={state} />
//           ) : (
//             <Option key={item.key} item={item} state={state} />
//           ),
//         )}
//       </ul>
//     </>
//   )
// }

// export function Option({ item, state }: any) {
//   let ref = React.useRef(null)
//   let { optionProps } = useOption({ key: item.key }, state, ref)

//   let { isFocusVisible, focusProps } = useFocusRing()

//   return (
//     <li
//       {...mergeProps(optionProps, focusProps)}
//       ref={ref}
//       data-focus-visible={isFocusVisible ? '' : undefined}
//     >
//       {item.rendered}
//     </li>
//   )
// }

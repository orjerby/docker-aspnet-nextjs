// import { Button } from '@/components/ui/button'
// import React from 'react'
// import { HiddenSelect, useSelect } from 'react-aria'
// import { useSelectState } from 'react-stately'
// import { ListBox } from './listBox'
// import { Popover } from './popover'

// // Reuse the ListBox, Popover, and Button from your component library. See below for details.

// export function Select(props: any) {
//   // Create state based on the incoming props
//   let state = useSelectState(props)

//   // Get props for child elements from useSelect
//   let ref = React.useRef(null)
//   let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
//     props,
//     state,
//     ref,
//   )

//   return (
//     <div style={{ display: 'inline-block' }}>
//       <div {...labelProps}>{props.label}</div>
//       <HiddenSelect
//         isDisabled={props.isDisabled}
//         state={state}
//         triggerRef={ref}
//         label={props.label}
//         name={props.name}
//       />
//       <Button {...triggerProps} ref={ref} style={{ height: 30, fontSize: 14 }}>
//         <span {...valueProps}>
//           {state.selectedItem
//             ? state.selectedItem.rendered
//             : 'Select an option'}
//         </span>
//         <span aria-hidden="true" style={{ paddingLeft: 5 }}>
//           ▼
//         </span>
//       </Button>
//       {state.isOpen && (
//         <Popover state={state} triggerRef={ref} placement="bottom start">
//           <ListBox {...menuProps} />
//         </Popover>
//       )}
//     </div>
//   )
// }

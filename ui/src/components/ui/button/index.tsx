// import { VariantProps, cva } from 'class-variance-authority'
// import { CSSProperties, ReactNode, forwardRef, useRef } from 'react'
// import {
//   AriaButtonOptions,
//   HoverEvents,
//   mergeProps,
//   useButton,
//   useFocusRing,
//   useHover,
// } from 'react-aria'
// import { mergeRefs } from 'react-merge-refs'
// import { twMerge } from 'tailwind-merge'

// const variants = cva(
//   [
//     'inline-flex',
//     'items-center',
//     'justify-center',
//     'relative',
//     'cursor-pointer',
//     'disabled:cursor-not-allowed',
//     'tracking-wide',
//     'transition-[background-color,box-shadow,text-color,transform]',
//     'duration-200',
//     'rounded-full',
//     'outline-none',
//   ],
//   {
//     variants: {
//       variant: {
//         primary: [
//           'font-semibold',
//           'bg-indigo-500',
//           'data-[hovered=true]:bg-indigo-600',
//           'text-white',
//           'shadow',
//           'data-[hovered=true]:shadow-md',
//           'disabled:bg-indigo-500/50',
//           'disabled:shadow',
//           'data-[pressed=true]:scale-[0.98]',
//           'data-[focus-visible=true]:ring-indigo-500/70',
//           'data-[focus-visible=true]:ring-2',
//           'data-[focus-visible=true]:ring-offset-2',
//         ],
//         secondary: [
//           'font-normal',
//           'bg-gray-50',
//           'data-[hovered=true]:bg-gray-100',
//           'disabled:bg-gray-50',
//           'text-gray-950',
//           'shadow',
//           'border',
//           'border-neutral-200/50',
//           'data-[focus-visible=true]:ring-gray-200',
//           'data-[pressed=true]:scale-[0.98]',
//           'data-[focus-visible=true]:ring-2',
//           'data-[focus-visible=true]:ring-offset-2',
//         ],
//         destructive: [
//           'font-semibold',
//           'bg-red-500',
//           'data-[hovered=true]:bg-red-600',
//           'text-white',
//           'rounded-full',
//           'shadow',
//           'hover:shadow-md',
//           'disabled:bg-red-500/50',
//           'disabled:shadow',
//           'data-[pressed=true]:scale-[0.98]',
//           'data-[focus-visible=true]:ring-red-500',
//           'data-[focus-visible=true]:ring-2',
//           'data-[focus-visible=true]:ring-offset-2',
//         ],
//         ghost: [
//           'font-light',
//           'text-gray-950',
//           'data-[hovered=true]:text-gray-600',
//           'disabled:text-gray-950',
//           'data-[focus-visible=true]:ring-gray-500/30',
//           'data-[focus-visible=true]:ring-1',
//         ],
//         link: [
//           'font-light',
//           'text-indigo-500',
//           'data-[hovered=true]:text-indigo-600',
//           'data-[hovered=true]:underline',
//           'disabled:text-indigo-500/50',
//           'disabled:no-underline',
//           'data-[focus-visible=true]:ring-indigo-500/30',
//           'data-[focus-visible=true]:ring-1',
//         ],
//       },
//       size: {
//         small: ['text-sm', 'py-1', 'px-4'],
//         default: ['text-base', 'py-2', 'px-8'],
//         large: ['text-lg', 'py-3', 'px-12'],
//       },
//     },
//     defaultVariants: {
//       variant: 'primary',
//       size: 'default',
//     },
//   },
// )

// // type ButtonProps = AriaButtonProps<"button"> &
// //   ButtonHTMLAttributes<HTMLButtonElement> &
// //   VariantProps<typeof variants> & {
// //     loading?: boolean;
// //   };

// type ButtonProps = Omit<
//   AriaButtonOptions<'button'>,
//   'href' | 'target' | 'rel' | 'elementType'
// > &
//   HoverEvents &
//   VariantProps<typeof variants> & {
//     style?: CSSProperties | undefined
//     className?: string | undefined
//     loading?: boolean | undefined
//     children?: ReactNode | undefined
//   }

// const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   (props, forwardedRef) => {
//     const {
//       className,
//       style,
//       variant,
//       size,
//       children,
//       isDisabled,
//       loading,
//       onHoverStart,
//       onHoverEnd,
//       onHoverChange,
//     } = props
//     const ref = useRef<HTMLButtonElement>(null)

//     const { buttonProps, isPressed } = useButton(
//       {
//         ...props,
//         isDisabled: isDisabled || loading,
//         elementType: 'button',
//       },
//       ref,
//     )

//     const { hoverProps, isHovered } = useHover({
//       isDisabled: isDisabled || loading,
//       onHoverStart,
//       onHoverEnd,
//       onHoverChange,
//     })

//     const { focusProps, isFocusVisible } = useFocusRing()

//     return (
//       <button
//         ref={mergeRefs([ref, forwardedRef])}
//         {...mergeProps(buttonProps, hoverProps, focusProps)}
//         className={twMerge(variants({ variant, size, className }))}
//         style={style}
//         data-pressed={isPressed || undefined}
//         data-hovered={isHovered || undefined}
//         data-focus-visible={isFocusVisible || undefined}
//         data-loading={loading || undefined}
//       >
//         {children}
//       </button>
//     )
//   },
// )

// Button.displayName = 'Button'

// export { Button }

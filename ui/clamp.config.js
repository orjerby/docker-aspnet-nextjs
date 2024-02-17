function clamp(
    viewportMinParam,
    viewportMaxParam,
    sizeMinParam,
    sizeMaxParam,
    remDivider
  ) {
    const sizeMin = `${sizeMinParam / remDivider}rem`
    const sizeMax = `${sizeMaxParam / remDivider}rem`
    const change =
      (sizeMaxParam - sizeMinParam) / (viewportMaxParam - viewportMinParam)
    const a = `${100 * change}vw`
    const b = `${(sizeMaxParam - viewportMaxParam * change) / remDivider}rem`
    return `clamp(${sizeMin}, ${a} + ${b}, ${sizeMax})`
  }
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    theme: {
      rem: {
        divider: '16',
      },
      clampFontSizeList: {
        16: '16px',
        20: '20px',
        24: '24px',
      },
      clampSpacingList: {
        5: '5px',
        10: '10px',
        15: '15px',
      },
      clampFontSize: ({ theme }) => {
        const screens = theme('screens')
        const clampFontSizeList = theme('clampFontSizeList')
        const clampObjects = {}
        Object.keys(screens).forEach((minScreen) => {
          const minWidth = parseInt(screens[minScreen].replace('px', ''))
          Object.keys(screens).forEach((maxScreen) => {
            const maxWidth = parseInt(screens[maxScreen].replace('px', ''))
            if (minWidth < maxWidth) {
              Object.keys(clampFontSizeList).forEach((minSize) => {
                const minSizeNum = parseInt(
                  clampFontSizeList[minSize].replace('px', '')
                )
                Object.keys(clampFontSizeList).forEach((maxSize) => {
                  const maxSizeNum = parseInt(
                    clampFontSizeList[maxSize].replace('px', '')
                  )
                  if (minSizeNum < maxSizeNum) {
                    clampObjects[
                      `${minSize}-${maxSize},${minWidth}-${maxWidth}`
                    ] = clamp(
                      minWidth,
                      maxWidth,
                      minSizeNum,
                      maxSizeNum,
                      theme('rem.divider')
                    )
                  }
                })
              })
            }
          })
        })
        return clampObjects
      },
      clampSpacing: ({ theme }) => {
        const screens = theme('screens')
        const clampSpacingList = theme('clampSpacingList')
        const clampObjects = {}
        Object.keys(screens).forEach((minScreen) => {
          const minWidth = parseInt(screens[minScreen].replace('px', ''))
          Object.keys(screens).forEach((maxScreen) => {
            const maxWidth = parseInt(screens[maxScreen].replace('px', ''))
            if (minWidth < maxWidth) {
              Object.keys(clampSpacingList).forEach((minSize) => {
                const minSizeNum = parseInt(
                  clampSpacingList[minSize].replace('px', '')
                )
                Object.keys(clampSpacingList).forEach((maxSize) => {
                  const maxSizeNum = parseInt(
                    clampSpacingList[maxSize].replace('px', '')
                  )
                  if (minSizeNum < maxSizeNum) {
                    clampObjects[
                      `${minSize}-${maxSize},${minWidth}-${maxWidth}`
                    ] = clamp(
                      minWidth,
                      maxWidth,
                      minSizeNum,
                      maxSizeNum,
                      theme('rem.divider')
                    )
                  }
                })
              })
            }
          })
        })
        return clampObjects
      },
      extend: {
        spacing: ({ theme }) => ({
          ...theme('clampSpacing'),
        }),
        fontSize: ({ theme }) => ({
          ...theme('clampFontSize'),
        }),
      },
    },
  }
  
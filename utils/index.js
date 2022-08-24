export const isMobile = () => {
  if (process.client) {
    return screen.width < 568
  }
  return true
}

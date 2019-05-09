import Typography from "typography"
import grandViewTheme from "typography-theme-twin-peaks"

const typography = new Typography(grandViewTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
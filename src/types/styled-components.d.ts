import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    background: string
    primary: string
    base: string
    light: string
  }
}
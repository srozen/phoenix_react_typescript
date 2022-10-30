import * as React from "react"

export const Dummy = (): React.ReactElement => {
  const clik = (): void => {
    console.log("clicked")
  }

  return <div onClick={clik}>Dummy React Component</div>
}

export default Dummy

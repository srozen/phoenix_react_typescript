import * as React from "react"
import { createRoot } from "react-dom/client"
import Dummy from "./components/dummy"

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("react-element")
  if (container) {
    const root = createRoot(container)
    root.render(<Dummy />)
  }
})

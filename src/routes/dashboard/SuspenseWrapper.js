import React, { Suspense } from "react"
import renderLoader from "../../components/reusableInputs/renderLoader"

const SuspenseWrapper = ({ children }) => {
  return <Suspense fallback={renderLoader()}>{children}</Suspense>
}

export default SuspenseWrapper

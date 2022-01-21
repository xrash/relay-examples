export const SuspenseLoading = ({ children }) => (
  <Suspense fallback={'loading...'}>
    {children}
  </Suspense>
)

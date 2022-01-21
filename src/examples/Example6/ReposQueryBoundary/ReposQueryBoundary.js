import { useState, Suspense, useEffect, useMemo } from 'react'
import ErrorBoundary from 'components/ErrorBoundary'
import styles from './ReposQueryBoundary.module.css'
import { useViewer } from 'lib/viewer'
import { ReposList } from './ReposList'
import debounce from 'lodash/debounce'

export const ReposQueryBoundary = () => {
  const { login: defaultLogin } = useViewer()

  const [inputValue, setInputValue] = useState(defaultLogin)
  const [loginToQuery, setLoginToQuery] = useState(inputValue)

  const updateLogin = useMemo(() => debounce((v) => {
    setLoginToQuery(v)
  }, 1000), [])

  useEffect(() => {
    updateLogin(inputValue)
  }, [updateLogin, inputValue])

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginInputBox}>
        <input
          className="input"
          placeholder={'type a github username'}
          value={inputValue}
          onChange={handleChangeInputValue}
        />
      </div>
      <ErrorBoundary message={`User ${loginToQuery} not found`}>
        <Suspense fallback={'Loading repos list'}>
          <ReposList login={loginToQuery} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )

}

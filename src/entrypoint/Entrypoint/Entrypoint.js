import React, { Suspense } from 'react'
import { RelayEnvironmentProvider } from 'react-relay'
import MyEnvironment from 'relay-stuff/MyEnvironment'
import { Summary } from 'examples/Summary'
import { Example0 } from 'examples/Example0'
import { Example1 } from 'examples/Example1'
import { Example2 } from 'examples/Example2'
import { Example3 } from 'examples/Example3'
import { Example4 } from 'examples/Example4'
import { Example5 } from 'examples/Example5'
import { Example6 } from 'examples/Example6'
import { Sandbox } from 'components/Sandbox'
import { ViewerProvider } from 'lib/viewer'
import { Switch, Route } from "wouter"

export const Entrypoint = () => {
  return (
    <RelayEnvironmentProvider environment={MyEnvironment}>
      <Suspense fallback={'Loading app...'}>
        <ViewerProvider>
          <Switch>
            <Route path="/examples/example-0" component={Example0} />
            <Route path="/examples/example-1" component={Example1} />
            <Route path="/examples/example-2" component={Example2} />
            <Route path="/examples/example-3" component={Example3} />
            <Route path="/examples/example-4" component={Example4} />
            <Route path="/examples/example-5" component={Example5} />
            <Route path="/examples/example-6" component={Example6} />
            <Route path="/sandbox" component={Sandbox} />
            <Route component={Summary} />
          </Switch>
        </ViewerProvider>
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

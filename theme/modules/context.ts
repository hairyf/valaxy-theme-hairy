import HairyContext from '../hooks/useContext'
import type { UserModule } from '..'
export const install: UserModule = ({ app }) => {
  app.provide(HairyContext.key, HairyContext.getter())
}

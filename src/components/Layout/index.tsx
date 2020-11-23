// import * as S from './styles'
import Header from 'components/Header'

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout

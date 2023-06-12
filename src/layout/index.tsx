import Navigation from '@/components/Navigation'

interface Props {
  children: JSX.Element
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default MainLayout

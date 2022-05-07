import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="sm:max-w-screen-sm mx-auto py-8 px-5">{children}</div>
}

export default Container

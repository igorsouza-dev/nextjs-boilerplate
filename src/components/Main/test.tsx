import { render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    const { container, getByRole } = render(<Main />)
    const heading = getByRole('heading', { name: 'advanced react' })
    expect(heading).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})

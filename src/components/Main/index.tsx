import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="React avancado" />
    <S.Title>Nextjs boilerplate</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS and Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="developer in front of a computer"
    />
  </S.Wrapper>
)

export default Main

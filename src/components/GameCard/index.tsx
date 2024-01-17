import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}

const GameCard = ({title, developer, img, price}: GameCardProps) => (
  <S.Wrapper>
    <h1>GameCard</h1>
  </S.Wrapper>
)

export default GameCard

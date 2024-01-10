import { Meta, StoryFn } from '@storybook/react'
import Highlight, {HighlightProps} from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args:{
    title: "Read Dead is back!",
    subtitle: "Come see John's new adventures",
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2'
  }
} as Meta

export const Default: StoryFn<HighlightProps> = (args) => (
  <div style={{maxWidth: '104rem'}}>
<Highlight {...args}/>

  </div>
)

export const WithFloatImage: StoryFn<HighlightProps> = (args) => (
  <div style={{maxWidth: '104rem'}}>
    <Highlight {...args}/>
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}

import { Container } from "./styles"

export function InputOption({Icon, title, color, classN ,rotate, rounded, size, containerSize, textSize, classNameClose}) {

  

  const isSize = () => {
    if(size) return `${size}px`
  }

  const isColor = () => {
    if(color) return color
  }

  const isContainerSize = () => {
    if(containerSize) return '70%'
  }

  const isFontSize = () => {
    if(textSize) return `${textSize}rem`
  }

  const containerStyles = () => {
    if(rounded) {
      return {
        padding: '.5rem',
        borderRadius: '50%',
        width: isContainerSize()
      }
    } else {
      return {
        padding: '.75rem .75rem',
        borderRadius: '.5rem',
        width: isContainerSize()
      }
    }
  }

  const iconStyles = {
    color: isColor(),
    width: isSize(),
    height: isSize()
  }

  const textStyles = {
    fontSize: isFontSize(),
    textAlign: 'center'
  }

  return (
    <Container style={containerStyles()} className={classNameClose && classNameClose}>
      <Icon style={iconStyles}  id={rotate && 'send'} className={classNameClose && classNameClose} data-icon />
      {title && <h4 className={classN && 'post__title'} style={textStyles}>{title}</h4>}
    </Container>
  )
}
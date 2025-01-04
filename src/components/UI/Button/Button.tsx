interface ButtonPage {
  text: string
}

export const Button = ({ text }: ButtonPage) => {
  return (
    <button>{text}</button>
  )
}


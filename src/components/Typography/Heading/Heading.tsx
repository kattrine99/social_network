interface HeadingProps {
  text: string
  level: number
  className: string
}

export const Heading = ({ text, level, className }: HeadingProps) => {
  const Tag = `h${Math.min(Math.max(level, 1), 6)}` as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{text}</Tag>;
};

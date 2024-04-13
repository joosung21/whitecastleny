import styles from "./Button.module.scss"

interface Props {
  children: React.ReactNode
  color?: string
}

export default function BoltaButton(props: Props) {
  return (
    <button type="button" className={`${styles.basic} ${props.color}`}>
      {props.children} {props.color}
    </button>
  )
}

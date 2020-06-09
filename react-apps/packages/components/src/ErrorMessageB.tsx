import React from 'react'
import { makeStyles } from '@material-ui/styles'
import CruzRoja from './CruzRoja'

const useStyles = makeStyles({
  errorContainer: {
    width: '100%',
    fontSize: 14,
    color: 'var(--accent)',
    textAlign: 'left',
    marginTop: '10px',
    '& > p': {
      margin: 0,
      padding: 0,
      marginLeft: '10px',
    },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bubble: {
    width: '20px',
    height: '20px',
    minWidth: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `${2}px solid var(--accent)`,
    borderRadius: '50%',
  },
})

interface Props {
  condition?: boolean
  message?: string
  style?: React.CSSProperties
  className?: string
}

const ErrorMessage = (props: Props) => {
  const { condition, message } = props
  const classes = useStyles()
  return condition ? (
    <div
      className={`${classes.errorContainer} ${props.className}`}
      style={{ ...props.style }}
    >
      <div className={classes.bubble}>
        <CruzRoja width="100%" />
      </div>
      <p>{message || 'Esta pregunta es obligatoria.'}</p>
    </div>
  ) : null
}

export default ErrorMessage

import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Checkbox as MUICheckbox } from '@material-ui/core'

const useStyles = makeStyles({
  checkboxContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '20px',
  },
  checkbox: {
    color: 'var(--primary) !important',
    '&:hover': {
      backgroundColor: 'rgba(104, 187, 232, 0.15) !important',
    },
    padding: '5px',
    marginRight: '10px',
    marginTop: '-8px',
    marginLeft: '-10px',
    marginBottom: '-10px',
    alignSelf: 'flex-start',
  },
  checkboxLabel: {
    textAlign: 'left',
    fontFamily: 'Gotham',
    fontWeight: 400,
    width: '100%',
    userSelect: 'none',
  },
  root: {
    '& svg': {
      height: '30px',
      width: '30px',
    },
  },
})

interface Props {
  checked: boolean
  onChange:
    | ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void)
    | undefined
  id: string
  label: string | React.ReactChild
  style?: React.CSSProperties
}

const Checkbox = (props: Props) => {
  const classes = useStyles()
  const { checked, onChange, id, label } = props
  return (
    <Grid item className={classes.checkboxContainer} style={props.style}>
      <MUICheckbox
        checked={checked}
        onChange={onChange}
        id={id}
        className={classes.checkbox}
        classes={{
          root: classes.root,
        }}
      />
      <label htmlFor={id} className={classes.checkboxLabel}>
        {label}
      </label>
    </Grid>
  )
}

export default Checkbox

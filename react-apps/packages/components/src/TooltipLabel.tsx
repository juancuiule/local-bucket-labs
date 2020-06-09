import React from 'react'
import { Tooltip, ButtonBase } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'
import { TooltipProps } from '@material-ui/core/Tooltip'
import InfoIcon from './InfoIcon'

function arrowGenerator(color: string) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '2em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '2em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${color} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '2em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '2em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${color}`,
      },
    },
  }
}

const useStyles = (maxWidth: string = '200px') =>
  makeStyles({
    buttonStyle: {
      fontSize: 18,
      // '&:focus': {
      //   backgroundColor: 'rgba(200, 206, 212, 0.3)',
      // },
    },
    arrow: {
      position: 'absolute',
      fontSize: 6,
      '&::before': {
        content: '""',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid',
      },
    },
    popper: arrowGenerator('var(--secondary)'),
    tooltip: {
      position: 'relative',
      backgroundColor: 'var(--secondary)',
      fontFamily: 'Gotham',
      fontWeight: 400,
      letterSpacing: '-0.56px',
      fontSize: 16,
      '@media only screen and (max-width : 758px)': {
        fontSize: 14,
      },
      maxWidth: maxWidth,
    },
    tooltipPlacementLeft: {
      margin: '0 8px',
    },
    tooltipPlacementRight: {
      margin: '0 8px',
    },
    tooltipPlacementTop: {
      margin: '8px 0',
    },
    tooltipPlacementBottom: {
      margin: '8px 0',
    },
  })

interface Props {
  placement: TooltipProps['placement']
  text: string
  color?: string
  hoverColor?: string
  maxWidth?: string
}

export function TooltipLabel(props: Props) {
  const { arrow, buttonStyle, ...classes } = useStyles(props.maxWidth)()
  const [arrowRef, setArrowRef] = React.useState<HTMLSpanElement | null>(null)

  const { color = '#68bbe8', hoverColor = '#68bbe866' } = props
  const [iconColor, setIconColor] = React.useState(color)

  return (
    <div
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Tooltip
        disableFocusListener
        disableTouchListener
        classes={classes}
        PopperProps={{
          popperOptions: {
            modifiers: {
              arrow: {
                enabled: Boolean(arrowRef),
                element: arrowRef,
              },
            },
          },
        }}
        style={{
          marginLeft: '10px',
          width: '25px',
        }}
        title={
          <React.Fragment>
            {props.text}
            <span className={arrow} ref={setArrowRef} />
          </React.Fragment>
        }
        placement={props.placement}
        onOpen={() => {
          setIconColor(hoverColor)
        }}
        onClose={() => {
          setIconColor(color)
        }}
      >
        <ButtonBase disableRipple disableTouchRipple className={buttonStyle}>
          <InfoIcon color={iconColor} />
        </ButtonBase>
      </Tooltip>
    </div>
  )
}

export default TooltipLabel

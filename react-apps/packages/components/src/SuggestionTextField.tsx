import React from 'react'

import {
  MenuItem,
  FormControl,
  FormLabel,
  Paper,
  makeStyles,
} from '@material-ui/core'

import useAppStyles from './useAppStyles'
import TextField from './TextField'
import CustomErrorMessage from './CustomFormikErrorMessage'
import { MenuItemProps } from '@material-ui/core/MenuItem'

import Downshift from 'downshift'
import matchSorter from 'match-sorter'

import { StandardTextFieldProps } from '@material-ui/core/TextField'
import { ErrorMessage } from 'formik'

const useStyles = makeStyles({
  input: {
    '@media only screen and (max-width : 800px)': {
      fontSize: 15,
    },
    fontSize: 18,
    fontFamily: 'Gotham',
    fontWeight: 400,
    color: 'var(--secondary)',
    textAlign: 'left',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    '&::placeholder': {
      color: 'rgb(162, 162, 162)',
      opacity: '1',
    },
  },
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#68bbe8',
    },
  },
})

interface Option {
  id: number
  value: string
  label: string
}

interface Props extends StandardTextFieldProps {
  label: string | React.ReactChild
  id: string
  values: Array<Option>
  limit?: number
  placeholder?: string
  onValueChange: (value: Option | null) => void
  initialValue?: string
}

interface RenderSuggestionProps {
  itemProps: MenuItemProps<'div', { button?: never }>
  suggestion: Option
  isSelected: boolean
  isHighlighted: boolean
}

const itemToString = (item: Option | null) => (item ? item.label : '')

const Suggestion = (suggestionProps: RenderSuggestionProps) => {
  const { suggestion, isHighlighted, isSelected, itemProps } = suggestionProps
  return (
    <MenuItem
      {...itemProps}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
        fontFamily: 'Gotham',
      }}
    >
      {suggestion.label}
    </MenuItem>
  )
}

const SuggestionTextField = (props: Props) => {
  const appStyles = useAppStyles()
  const classes = useStyles()
  const { values } = props
  return (
    <Downshift
      onChange={props.onValueChange}
      itemToString={itemToString}
      initialSelectedItem={values.find(
        option => option.id.toString() === props.initialValue
      )}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getRootProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem,
      }) => {
        const { onBlur, onFocus, autoComplete, ...inputProps } = getInputProps()
        const matched = matchSorter(values, inputValue || '', {
          keys: [
            { maxRanking: matchSorter.rankings.STARTS_WITH, key: 'label' },
            'extra',
          ],
        }).slice(0, props.limit)

        const isSelected = (label: string) =>
          itemToString(selectedItem) === label

        return (
          <FormControl
            fullWidth
            className={appStyles.formControl}
            {...getRootProps()}
          >
            <FormLabel {...getLabelProps()} className={appStyles.formLabel}>
              {props.label}
            </FormLabel>
            <TextField
              InputProps={{
                onBlur,
                onFocus,
                classes: {
                  input: classes.input,
                  underline: classes.cssUnderline,
                },
              }}
              fullWidth
              inputProps={inputProps}
              placeholder={props.placeholder}
              autoComplete={props.autoComplete}
            />

            <div {...getMenuProps()}>
              {isOpen ? (
                <Paper square>
                  {matched.map((suggestion: Option, index: number) => (
                    <Suggestion
                      suggestion={suggestion}
                      key={suggestion.id}
                      itemProps={getItemProps({
                        item: suggestion,
                        index,
                      })}
                      isSelected={isSelected(suggestion.label)}
                      isHighlighted={highlightedIndex === index}
                    />
                  ))}
                </Paper>
              ) : null}
            </div>
            <ErrorMessage name={props.id} component={CustomErrorMessage} />
          </FormControl>
        )
      }}
    </Downshift>
  )
}

export default SuggestionTextField

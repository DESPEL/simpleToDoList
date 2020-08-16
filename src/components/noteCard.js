import React, { useState } from 'react'
import { Paper, makeStyles, Grid, Checkbox, withStyles, FormLabel, Typography, Box } from '@material-ui/core'

import green from '@material-ui/core/colors/green'
import grey from '@material-ui/core/colors/grey'

import {
  useHistory
} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    height: 48,
  },
  content: {
    height: '100%',
    alignItems: 'center',
  },
  text: {
    textAlign: 'left',
    paddingLeft: 4,
  }
})

const GreenCheckbox = withStyles({
  root: {
    color: grey[800],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
})((props) => <Checkbox onClick={(e) => { e.stopPropagation() }} color="default" {...props} />);

export default function NoteCard(props) {
  const classes = useStyles()
  const title = props.title === undefined ? 'untitled' : props.title
  const id = props.id

  const [isChecked, setChecked] = useState(props.completed)
  const c = isChecked

  const history = useHistory()

  const openEditPage = () => {
    history.push(`/edit/${id}`, { id: id })
  }

  const toggleNoteStatus = (e) => {
    console.log('asdfasdjkfajk')
    e.stopPropagation()
    let data = JSON.parse(localStorage.getItem(`note-${id}`))
    data.completed = !isChecked
    localStorage.setItem(`note-${id}`, JSON.stringify(data))
    setChecked(!isChecked)
    if (props.update) {
      props.update(id)
    }
  }

  return (
    <Grid item xs={12}>
      <Paper className={classes.root} onClick={openEditPage}>
        <Grid className={classes.content} container spacing={1}>
          <Grid item xs={1}>
            <GreenCheckbox className={classes.checkbox} checked={c} onClick={toggleNoteStatus} />
          </Grid>
          <Grid item xs={10}>
            <Box className={classes.text} textOverflow="ellipsis" overflow="hidden">
              {title}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
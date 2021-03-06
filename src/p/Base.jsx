import { useObserver, createEffect } from 'react-solid-state'
import { Stack, AppBar, Typography, Toolbar, IconButton, CssBaseline, Link } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { fetching, Define } from './utils';

export default _ => {
  /*********constants**********/

  /*********createEffect**********/
  createEffect(async () => {
  })

  const onSubmit = async () => {
    const form = {
    }
    return console.log(form)
    const result = await fetching('save_dhcp=' + JSON.stringify(form) + '&')
    if (!result || result?.result != 'ok') {
      return
    }
  }
  /*********functions**********/

  /*********styles**********/

  /*********component**********/
  return useObserver(() => (<div>

    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={_ => window.history.go(-1)} edge="start" color="inherit" sx={{ mr: 2 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          BasePage
        </Typography>
      </Toolbar>
    </AppBar>
    <Stack sx={{ pb: 7 }} spacing={2}>
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </Stack>

  </div>))
}
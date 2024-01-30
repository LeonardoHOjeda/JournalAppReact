import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'

export const SideBar = ({ drawerWidth}: {drawerWidth: number}) => {
  return (
    <Box component='nav'
      sx={{width: { sm: drawerWidth}, flexShrink: { sm: 0}}}>
        <Drawer
          variant='permanent'
          open
          sx={{
            display: { xs: 'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
          }}
        >
          <Toolbar>
            <Typography variant='h6' noWrap component='div'>Leonardo Hdez</Typography>
          </Toolbar>
          <Divider />
          <List>
            {
              ['Home', 'Profile', 'Posts', 'About', 'Contact'].map(text => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <Grid container>
                      <ListItemText primary={text} />
                      <ListItemText secondary={'LoremIpsum Dolor Asit Amet'} />
                    </Grid>
                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>
        </Drawer>
    </Box>
  )
}

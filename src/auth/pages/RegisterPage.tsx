import { Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
      <form action="">
        <Grid container>
          <Grid item xs={12} sx={{mt: 2}}> 
            <TextField label='Nombre Completo' type='text' placeholder='Nombre Completo' fullWidth></TextField>
          </Grid>
          <Grid item xs={12} sx={{mt: 2}}> 
            <TextField label='Correo electronico' type='email' placeholder='Correo electronico' fullWidth></TextField>
          </Grid>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField label='Password' type='password' placeholder='********' fullWidth></TextField>
          </Grid>
          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
                <Typography sx={{ml: 1}}>Crear Cuenta</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{mr: 1}}> Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

import React from "react";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { setCookie } from 'typescript-cookie';
import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import styles from './style.module.css'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


interface FormLogin {
  username: string,
  password: string
}

const userList: FormLogin[] = [
  {
    username: 'abc',
    password: '1234'
  },
  {
    username: 'abcd',
    password: '12345'
  }
]
const schema = yup.object().shape({
  username: yup
    .string().required('Chưa điền tên đăng nhập'),
  password: yup.string().required('Chưa điền mật khẩu')
    .test('Độ dài', 'Độ dài tối thiểu bằng 4', (value) => {
      return value == null || (value.length >= 4);
    }),
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const handleClickLogin = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false)
    setOpen(false);
  };
  const toggleShowPassword = () => {
    setShowPassword((x: boolean) => !x);
  };
  const { register, handleSubmit, formState: { errors } } = useForm<FormLogin>({
    resolver: yupResolver(schema),
  });
  // const { enqueueSnackbar } = useSnackbar();  
  const formSubmit: SubmitHandler<FormLogin> = (data: FormLogin) => {
    let checkIndex: number = userList.findIndex(obj => obj.password === data.password && obj.username === data.username)
    if (checkIndex !== -1) {
      setCookie('user', data.username, {
        expires: 1 / 6,
        secure: true,
      });
      handleClickLogin();
      window.location.reload();
      // navigate('/')
    }
    else setOpenError(true)
  }
  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col l-4 l-o-4 m-6 m-o-3 c-12">
          <i className={styles.titleLogin}>Đăng nhập</i>
          <div className={styles.loginInput}>
            <form onSubmit={handleSubmit(formSubmit)}
              method="POST"
              action="/login"
              //   onSubmit={form.handleSubmit(handleSubmit)}
              className={styles.loginForm}
            >
              <TextField variant="outlined" fullWidth sx={{ mb: 2 }}
                label='Tên đăng nhập' className={styles.inputField}
                {...register('username', { required: true })}
                error={errors.username ? true : false}
                helperText={errors.username && errors.username?.message && errors.username.message}
              />

              <FormControl error={errors.password ? true : false} fullWidth margin="normal" variant="outlined">
                <InputLabel htmlFor='password'>Mật khẩu</InputLabel>
                <OutlinedInput
                  label='Mật khẩu'
                  {...register('password', { required: true })}
                  error={errors.password ? true : false}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  type={showPassword ? 'text' : 'password'}

                />

                <FormHelperText> {errors.password && errors.password?.message && errors.password.message}</FormHelperText>
              </FormControl>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                size="medium"
                sx={{ mt: 2 }}
              >
                Đăng nhập
              </Button>
              <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Đăng nhập thành công
                </Alert>
              </Snackbar>
              <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openError} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  Mật khẩu hoặc tên đăng nhập không đúng
                </Alert>
              </Snackbar>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
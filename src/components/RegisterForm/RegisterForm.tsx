import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/modules/usersSlice';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { selectStack } from '../../utils/selectStack';
import UserType from '../../types/UserType';

export default function Registerform() {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [valid, setValid] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    user.email === '' ||
    user.password === '' ||
    user.confirmPassword === ''
      ? setValid(false)
      : setValid(true);
  }, [user]);

  useEffect(() => {
    if (user.password && user.confirmPassword && user.password !== user.confirmPassword) {
      setValid(false);
      setErrorPassword('Senhas não conferem!');
    } else {
      setErrorPassword('');
    }
  }, [user]);

  useEffect(()=>{
    handleClear();
  },[]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, id: uuidv4(), [event.target.name]: event.target.value });
    console.log(user);
    
  };
  
  const handleSubmit = () => {
    dispatch(addUser({ ...user }));
    navigate('/home');
  };


  const handleClear = () => {
    setUser({ id: '', foto: '', banner: '', name: '', email: '', password: '', confirmPassword: '', age: 0, description: '', stack: [] });
  };

  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type="text"
            id="foto"
            name="foto"
            label="Link da Foto"
            autoFocus
            value={user.foto}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            type="text"
            id="name"
            name="name"
            label="Nome"
            autoFocus
            value={user.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="email"
            type="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={user.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="age"
            type="age"
            label="Idade"
            name="age"
            autoComplete="age"
            value={Number(user.age)}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="stack"
            select
            label="Stack"
            name="stack"
            autoComplete="stack"
            value={user.stack}
            onChange={handleChange}
          >
            {selectStack.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="description"
            type="description"
            label="Descrição"
            name="description"
            multiline
            rows={4}
            autoComplete="description"
            value={user.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type="text"
            id="banner"
            name="banner"
            label="Link do banner do perfil"
            autoFocus
            value={user.banner}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="new-password"
            value={user.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="confirmPassword"
            label="Confirmar Senha"
            type="password"
            id="confirmPassword"
            error={errorPassword.length > 1}
            helperText={errorPassword}
            autoComplete="new-password"
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => handleSubmit()}
        disabled={!valid}
      >
        Cadastrar
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          Já tem uma conta?{' '}
          <Link href="/" variant="body2">
            Acesse
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

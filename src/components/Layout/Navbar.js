import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const userAvatar = "/path/to/your/image.jpg"; // Coloque aqui o caminho para a imagem do usuário

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/dashboard">Dashboard</Link>
          </Typography>
          <Button color="inherit">
            <Link href="/cadastro">Cadastro</Link>
          </Button>
          <Button color="inherit">
            <Link href="/estrutura">Estrutura</Link>
          </Button>
          <Button color="inherit">
            <Link href="/fluxo-de-caixa">Fluxo de Caixa</Link>
          </Button>
          <Button color="inherit">
            <Link href="/perfil">Perfil</Link>
          </Button>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <Avatar alt="User Avatar" src={userAvatar} className={classes.large} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

import { Container, Typography, Button, Stack } from '@mui/material';
  function Login() {
  return (
  <Container>
    <Stack spacing={2} mx={2} mt={5} mb={5}>
      <Typography variant="h1" color="primary">
        Página Login de Daniel Pérez Núñez
      </Typography>
      <Typography variant="h2" color="secondary">
        Título H2 - Color secondary
      </Typography>
      <Typography variant="h3" color="error">
        Título H3 - Color error
      </Typography>
      <Typography variant="subtitle1" color="success">
        Subtitle1 - Color success
      </Typography>
      <Typography variant="body1" color="warning">
        BodyText 1 - Body1
      </Typography>
      <Typography variant="caption" color="info">
        Caption - Color info
      </Typography>
      <Button variant="contained" color="primary">
        Contained - Color secondary
      </Button>
      <Button variant="contained" color="secondary">
        Contained - Color secondary
      </Button>
      <Button variant="contained" color="error">
        Outlined - Color error
      </Button>
      <Button variant="contained" color="success">
        Contained - Color success
      </Button>
      <Button variant="outlined" color="warning">
        Outlined - Color warning
      </Button>
      <Button variant="contained" color="info">
        Contained - Color info
      </Button>
    </Stack>

  </Container>
  );
};

export default Login;

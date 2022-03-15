import { Box, Container, Typography } from "@mui/material";

import MainLayout from "../layout/main-layout";

const Home = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
        </Box>
      </Container>
    </>
  );
}

Home.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Home;

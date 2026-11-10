import { Box, Button, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f1eee5",
        color: "#111",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1.15fr",
        },
        borderBottom: "2px solid #111",
      }}
    >
      <Box
        component="img"
        src={require("../images/brandi_1.png")}
        alt="Brandi Chanel"
        sx={{
          width: "100%",
          height: {
            xs: "55vh",
            md: "100vh",
          },
          objectFit: "cover",
          borderRight: {
            md: "2px solid #111",
          },
        }}
      />

      <Box
        sx={{
          p: {
            xs: 3,
            md: 5,
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontFamily: '"Anton", "Arial Narrow", sans-serif',
            fontSize: {
              xs: "17vw",
              md: "8vw",
            },
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
          }}
        >
          Brandi
          <br />
          Chanel
          <br />
          Portfolio
        </Typography>

        <Box sx={{ maxWidth: 560, mt: 6 }}>
          <Typography
            sx={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Boston-based multidisciplinary creative
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "1rem",
                md: "1.15rem",
              },
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            Art curator, event producer, music curator, and licensed real estate
            professional creating experiences that connect culture and
            community.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            <Button
              href="#art-curation"
              variant="contained"
              sx={{
                borderRadius: 0,
                backgroundColor: "#111",
                px: 3,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Explore Her Work
            </Button>

            <Button
              href="mailto:brandichanelbooking@gmail.com"
              variant="outlined"
              sx={{
                borderRadius: 0,
                borderColor: "#111",
                color: "#111",
                px: 3,
                py: 1.5,
                "&:hover": {
                  borderColor: "#111",
                  backgroundColor: "rgba(0,0,0,0.05)",
                },
              }}
            >
              Book Brandi
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Hero;

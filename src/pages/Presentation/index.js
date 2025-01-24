import React, { useState, useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import routes from "routes"; // Eğer doğru dosyadan import edilmişse sorun çözülür

import { loadFull } from "tsparticles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import NetworksSection from "./components/NetworksSection";
import FAQSection from "./components/FAQSection"; // Yeni SSS bölümü eklendi

function Presentation() {
  const [isLoading, setIsLoading] = useState(true);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set loading screen duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999] animate-fadeOut">
          <MKTypography variant="h2" color="gray" textAlign="center">
            Loading...
          </MKTypography>
        </div>
      )}
      {!isLoading && (
        <>
          <DefaultNavbar
            routes={routes}
            action={{
              type: "external",
              route: "https://www.creative-tim.com/product/material-kit-react",
              label: "free download",
              color: "info",
            }}
            sticky
          />
          <MKBox
            minHeight="75vh"
            width="100%"
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Particles
              id="tsparticles"
              init={particlesInit}
              options={{
                fullScreen: { enable: true },
                background: {
                  color: { value: "#ffffff" },
                },
                fpsLimit: 60,
                interactivity: {
                  events: {
                    onHover: { enable: true, mode: "bubble" },
                    onClick: { enable: true, mode: "repulse" },
                  },
                  modes: {
                    bubble: { distance: 200, size: 4, duration: 0.3 },
                    repulse: { distance: 100 },
                  },
                },
                particles: {
                  number: { value: 100 },
                  color: { value: "#000000" },
                  shape: { type: "circle" },
                  opacity: { value: 0.5 },
                  size: { value: { min: 2, max: 6 } },
                  move: { enable: true, speed: 2, direction: "none", random: true },
                },
                detectRetina: true,
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
            />
            <Container sx={{ position: "relative", zIndex: 2 }}>
              <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
                <MKTypography
                  variant="h1"
                  color="black"
                  mt={2}
                  mb={4}
                  sx={({ breakpoints, typography: { size } }) => ({
                    textAlign: "center",
                    [breakpoints.down("md")]: { fontSize: size["3xl"] },
                  })}
                >
                  <span style={{ color: "#3498db", fontWeight: "bold" }}>Purgatorydao</span> Güçlü
                  Altyapı ve Çok Zincirli Çözümler
                </MKTypography>
                <MKTypography
                  variant="body1"
                  color="black"
                  textAlign="center"
                  px={{ xs: 6, lg: 12 }}
                  mt={3}
                >
                  Purgatorydao, çok zincirli ağlarda lider bir doğrulayıcı ve katkı sağlayıcıdır.
                  Fonlarınızı kolayca devredin, güvenilir altyapımızdan faydalanın ve
                  geliştiriciler, düğüm operatörleri için optimize edilmiş araçlarımızı keşfedin.
                </MKTypography>
              </Grid>
            </Container>
          </MKBox>
          <MKBox
            sx={{
              backgroundColor: "#f9f9f9",
              pt: 10,
              pb: 6,
              display: "flex", // Flexbox ile hizalama
              justifyContent: "center", // Yatay hizalama
              alignItems: "center", // Dikey hizalama
              flexDirection: "column", // İçerikleri dikey hizalar
            }}
          >
            <NetworksSection />
          </MKBox>
          <MKBox
            sx={{
              backgroundColor: "#ffffff",
              pt: 10,
              pb: 6,
            }}
          >
            <FAQSection />
          </MKBox>
        </>
      )}
    </>
  );
}

export default Presentation;

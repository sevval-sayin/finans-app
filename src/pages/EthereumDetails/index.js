import React, { useCallback } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
} from "@mui/material";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../../assets/images/logo.png"; // Logonun yolu

const EthereumDetails = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const accordionData = [
    {
      title: "RPC, API, gRPC",
      content: (
        <>
          <Typography variant="body2" color="text.secondary">
            <strong>RPC:</strong> https://blockx-mainnet-rpc.itrocket.net
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>API:</strong> https://blockx-mainnet-api.itrocket.net
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>JSON-RPC:</strong> https://blockx-mainnet-evm.itrocket.net
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>gRPC:</strong> blockx-mainnet-grpc.itrocket.net:443
          </Typography>
        </>
      ),
    },
    {
      title: "Peers, Seeds, Live Peers, Addrbook",
      content: (
        <>
          <Typography variant="body2" color="text.secondary">
            <strong>Peers:</strong>{" "}
            7e1c5fc00878f2a632e7c1fca3a279dcbd2e3f3c@blockx-mainnet-peer.itrocket.net:12656
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Seeds:</strong>{" "}
            4452d0be36c123b971c2b052c54b2645fd3122a9@blockx-mainnet-seed.itrocket.net:19656
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Live Peers:</strong> 10 active
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Addrbook:</strong> Updated every 1h
          </Typography>
        </>
      ),
    },
    {
      title: "Validator Nodes",
      content: (
        <>
          <Typography variant="body2" color="text.secondary">
            Information about validator nodes and their configurations.
          </Typography>
        </>
      ),
    },
    {
      title: "Block Details",
      content: (
        <>
          <Typography variant="body2" color="text.secondary">
            Detailed insights into the latest blocks in the network.
          </Typography>
        </>
      ),
    },
    {
      title: "Transaction Insights",
      content: (
        <>
          <Typography variant="body2" color="text.secondary">
            Analysis of recent transactions and performance metrics.
          </Typography>
        </>
      ),
    },
    {
      title: "Network Status",
      content: (
        <>
          <Typography variant="body2" color="text.secondary">
            Current status of the network, including uptime and performance.
          </Typography>
        </>
      ),
    },
  ];

  const cardData = [
    {
      title: "Ethereum Blockchain Overview",
      description:
        "Ethereum provides a decentralized platform for smart contracts and DApps. It powers thousands of applications globally.",
      image: "https://via.placeholder.com/600x300?text=Blockchain+Overview",
    },
    {
      title: "Decentralized Finance (DeFi)",
      description:
        "Explore the world of DeFi powered by Ethereum, offering financial freedom and innovation.",
      image: "https://via.placeholder.com/600x300?text=DeFi",
    },
    {
      title: "NFT Ecosystem",
      description:
        "Ethereum supports a vibrant NFT ecosystem for artists, creators, and collectors.",
      image: "https://via.placeholder.com/600x300?text=NFT+Ecosystem",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        background: "#ffffff",
        color: "#000",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#ffffff" } },
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

      {/* Sidebar Menu */}
      <Box
        sx={{
          width: "25%",
          pr: 2,
          background: "rgba(255, 255, 255, 0.6)",
          borderRadius: "16px", // Daha yuvarlak kenarlar
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Daha belirgin gölge
          backdropFilter: "blur(10px)",
          p: 2,
          textAlign: "center",
          zIndex: 1,
          position: "relative",
        }}
      >
        <Particles
          id="sidebar-particles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "rgba(255, 255, 255, 0)" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
              },
              modes: {
                repulse: { distance: 50 },
              },
            },
            particles: {
              number: { value: 50 },
              color: { value: "#000000" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 3 } },
              move: { enable: true, speed: 1, direction: "none", random: true },
            },
            detectRetina: true,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "80px",
            marginBottom: "16px",
            filter: "drop-shadow(0px 0px 10px #000)",
            transition: "transform 0.3s, filter 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.filter = "drop-shadow(0px 0px 20px #000)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.filter = "drop-shadow(0px 0px 10px #000)";
          }}
        />

        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "#000",
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Menü
        </Typography>
        <List>
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "12px", // Accordion kenarlarını yuvarlat
                color: "#000",
                border: "1px solid #ccc",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // Daha yumuşak gölge
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
                sx={{
                  backgroundColor: "rgba(230, 230, 230, 0.9)",
                  fontWeight: "bold",
                  color: "#000",
                  borderRadius: "8px", // Accordion başlık kenarlarını yuvarlat
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>{item.content}</AccordionDetails>
            </Accordion>
          ))}
        </List>
      </Box>

      {/* Cards Section */}
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            sx={{
              background: "rgba(255, 255, 255, 0.7)",
              boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
              borderRadius: "16px",
              overflow: "hidden",
              backdropFilter: "blur(10px)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.5)",
              },
            }}
          >
            <CardMedia component="img" height="100" image={card.image} alt={card.title} />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }} gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: "#333" }}>
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default EthereumDetails;

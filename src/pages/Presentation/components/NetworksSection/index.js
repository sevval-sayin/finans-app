import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
  Tabs,
  Tab,
} from "@mui/material";

const NetworksSection = () => {
  const [selectedTab, setSelectedTab] = useState("main");
  const navigate = useNavigate(); // Yönlendirme için useNavigate kullanımı

  const mainNetworks = [
    {
      id: 1,
      name: "Ethereum",
      description: "Geliştiriciler için merkeziyetsiz bir platform.",
      icon: "🔗",
      url: "/ethereum", // Detay sayfasına yönlendirme için URL
      image: "https://via.placeholder.com/300x200?text=Ethereum",
    },
    {
      id: 2,
      name: "Binance Smart Chain",
      description: "Hızlı ve düşük maliyetli blok zincir ağı.",
      icon: "💎",
      url: "/binance-smart-chain",
      image: "https://via.placeholder.com/300x200?text=Binance",
    },
    {
      id: 3,
      name: "Polkadot",
      description: "Farklı blok zincirleri bağlayan çok zincirli bir protokol.",
      icon: "🌐",
      url: "/polkadot",
      image: "https://via.placeholder.com/300x200?text=Polkadot",
    },
    {
      id: 4,
      name: "Cardano",
      description: "Bilimsel bir yaklaşımla geliştirilen blok zinciri.",
      icon: "⚡",
      url: "/cardano",
      image: "https://via.placeholder.com/300x200?text=Cardano",
    },
    {
      id: 5,
      name: "Solana",
      description: "Yüksek performanslı blok zinciri, hızlı işlem gücü.",
      icon: "🌞",
      url: "/solana",
      image: "https://via.placeholder.com/300x200?text=Solana",
    },
    {
      id: 6,
      name: "Avalanche",
      description: "Çok hızlı ve düşük maliyetli blok zinciri platformu.",
      icon: "🏔️",
      url: "/avalanche",
      image: "https://via.placeholder.com/300x200?text=Avalanche",
    },
    {
      id: 7,
      name: "Tezos",
      description: "Kendi kendini güncelleyen blok zinciri.",
      icon: "🔄",
      url: "/tezos",
      image: "https://via.placeholder.com/300x200?text=Tezos",
    },
    {
      id: 8,
      name: "Polygon",
      description: "Ethereum için ölçeklenebilir bir ağ.",
      icon: "🔶",
      url: "/polygon",
      image: "https://via.placeholder.com/300x200?text=Polygon",
    },
    {
      id: 9,
      name: "Tron",
      description: "Eğlence odaklı merkeziyetsiz internet platformu.",
      icon: "🎮",
      url: "/tron",
      image: "https://via.placeholder.com/300x200?text=Tron",
    },
    // Daha fazla ağ bilgisi eklenebilir
  ];

  const testNetworks = [
    {
      id: 1,
      name: "Ethereum Ropsten",
      description: "Ethereum için test ağı.",
      icon: "🔗",
      url: "/ropsten",
      image: "https://via.placeholder.com/300x200?text=Ropsten",
    },
    {
      id: 2,
      name: "Binance Testnet",
      description: "Binance Smart Chain için test ağı.",
      icon: "💎",
      url: "/binance-testnet",
      image: "https://via.placeholder.com/300x200?text=Binance+Testnet",
    },
    {
      id: 3,
      name: "Polkadot Westend",
      description: "Polkadot için test ağı.",
      icon: "🌐",
      url: "/polkadot-westend",
      image: "https://via.placeholder.com/300x200?text=Westend",
    },
    {
      id: 4,
      name: "Ethereum Goerli",
      description: "Ethereum test ağı.",
      icon: "🔗",
      url: "/goerli",
      image: "https://via.placeholder.com/300x200?text=Goerli",
    },
    {
      id: 5,
      name: "Solana Devnet",
      description: "Solana için geliştirici test ağı.",
      icon: "🌞",
      url: "/solana-devnet",
      image: "https://via.placeholder.com/300x200?text=Solana+Devnet",
    },
    {
      id: 6,
      name: "Avalanche Fuji",
      description: "Avalanche test ağı.",
      icon: "🏔️",
      url: "/avalanche-fuji",
      image: "https://via.placeholder.com/300x200?text=Avalanche+Fuji",
    },
    {
      id: 7,
      name: "Tezos Ghostnet",
      description: "Tezos test ağı.",
      icon: "🔄",
      url: "/tezos-ghostnet",
      image: "https://via.placeholder.com/300x200?text=Tezos+Ghostnet",
    },
    {
      id: 8,
      name: "Polygon Mumbai",
      description: "Polygon test ağı.",
      icon: "🔶",
      url: "/polygon-mumbai",
      image: "https://via.placeholder.com/300x200?text=Polygon+Mumbai",
    },
    {
      id: 9,
      name: "Tron Shasta",
      description: "Tron test ağı.",
      icon: "🎮",
      url: "/tron-shasta",
      image: "https://via.placeholder.com/300x200?text=Tron+Shasta",
    },
    // Daha fazla ağ bilgisi eklenebilir
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const displayedNetworks = selectedTab === "main" ? mainNetworks : testNetworks;

  return (
    <Box sx={{ mt: 6, mb: 6, px: 4 }}>
      <Typography
        variant="h4"
        color="primary"
        textAlign="center"
        sx={{ mb: 4, fontWeight: "bold", textTransform: "uppercase" }}
      >
        Desteklenen Ağlar
      </Typography>

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        sx={{ mb: 4 }}
      >
        <Tab label="Ana Ağ (9)" value="main" />
        <Tab label="Test Ağı (9)" value="test" />
      </Tabs>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        {displayedNetworks.map((network) => (
          <Grid item xs={12} sm={6} md={4} key={`${selectedTab}-${network.id}`}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "0 auto",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                },
              }}
              onClick={() => navigate(network.url)} // Kart tıklama ile yönlendirme
            >
              <CardMedia
                component="img"
                height="200"
                image={network.image}
                alt={`${network.name} image`}
              />
              <CardContent>
                <Typography variant="h5" color="text.primary" gutterBottom>
                  {network.icon} {network.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {network.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ mt: 2 }}
                  onClick={(e) => {
                    e.stopPropagation(); // Kart tıklama çakışmasını önler
                    navigate(network.url);
                  }}
                >
                  Daha Fazla Bilgi
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NetworksSection;

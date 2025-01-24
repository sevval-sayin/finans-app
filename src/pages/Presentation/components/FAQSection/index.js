import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQSection() {
  return (
    <div style={{ width: "100%", margin: "0 auto", padding: "20px" }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Sıkça Sorulan Sorular
      </Typography>

      {/* Accordion 1 */}
      <Accordion
        sx={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          border: "2px solid #ddd",
          mb: 2,
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            fontWeight: "bold",
            backgroundColor: "#f1f1f1",
            padding: "10px 20px",
          }}
        >
          <Typography>Purgatorydao Nedir?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "15px 20px", backgroundColor: "#fafafa" }}>
          <Typography>
            Purgatorydao, çok zincirli ekosistemlere ve merkeziyetsiz teknolojilere tutkuyla bağlı
            bir DevOps mühendisleri ve Blockchain meraklılarından oluşan bir ekip. 2021&apos;den bu
            yana doğrulayıcılar, geliştiriciler ve düğüm operatörleri olarak aktif olarak katkıda
            bulunuyoruz.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 2 */}
      <Accordion
        sx={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          border: "2px solid #ddd",
          mb: 2,
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            fontWeight: "bold",
            backgroundColor: "#f1f1f1",
            padding: "10px 20px",
          }}
        >
          <Typography>Hangi Hizmetleri Sunuyoruz?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "15px 20px", backgroundColor: "#fafafa" }}>
          <Typography>
            Doğrulayıcılar ve geliştiriciler için genel uç noktalar, blok gezginleri, tohum
            düğümleri, anlık görüntüler, durum senkronizasyonu, kurulum kılavuzları, canlı eşler,
            RPC tarayıcıları, yönetim botları ve merkeziyetsizlik analizleri gibi kapsamlı hizmetler
            sunuyoruz.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 3 */}
      <Accordion
        sx={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          border: "2px solid #ddd",
          mb: 2,
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            fontWeight: "bold",
            backgroundColor: "#f1f1f1",
            padding: "10px 20px",
          }}
        >
          <Typography>Güvenlik Önlemlerimiz Nelerdir?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "15px 20px", backgroundColor: "#fafafa" }}>
          <Typography>
            Tüm sunucularımızda parola girişini devre dışı bırakarak yalnızca güçlü şifreler ve iki
            faktörlü kimlik doğrulama ile SSH anahtarları üzerinden erişime izin veriyoruz. Güvenlik
            duvarlarımız yalnızca gerekli bağlantı noktalarına erişime izin verecek şekilde
            yapılandırılmıştır.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQSection;

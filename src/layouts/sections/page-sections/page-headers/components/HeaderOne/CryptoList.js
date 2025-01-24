import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function CryptoList({ crypto }) {
  return (
    <MKBox
      display="flex"
      flexDirection="column"
      p={2}
      border="1px solid"
      borderRadius="8px"
      boxShadow="sm"
      bgcolor="white"
      width="100%" // Ensure it takes full width of its container
      height="100%" // Ensure it takes full height of its container
      minHeight="200px" // Ensure a minimum height
    >
      <Grid container alignItems="center" mb={2}>
        <Grid item>
          <MKBox
            component="img"
            src={crypto.icon}
            alt={crypto.name}
            width="40px"
            height="40px"
            mr={2}
          />
        </Grid>
        <Grid item>
          <MKTypography variant="h6">{crypto.name}</MKTypography>
          <MKTypography variant="body2" color="textSecondary">
            {crypto.symbol}
          </MKTypography>
        </Grid>
      </Grid>
      <MKTypography variant="body1" fontWeight="bold" mb={1}>
        ${crypto.price_usd}
      </MKTypography>
      <MKTypography
        variant="body2"
        color={crypto.percent_change_24h >= 0 ? "success.main" : "error.main"}
      >
        {crypto.percent_change_24h}%
      </MKTypography>
    </MKBox>
  );
}

CryptoList.propTypes = {
  crypto: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price_usd: PropTypes.string.isRequired,
    percent_change_24h: PropTypes.number.isRequired,
  }).isRequired,
};

export default CryptoList;

import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h6"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        Home / DashBoard
      </Typography>
    </Box>
  );
};

export default Header;
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import Typography from '@mui/material/Typography';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import ListIcon from '@mui/icons-material/List';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';

const Topbar = () => {
  const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
        {/* Box component is easy to use as it supports css properties directly */}
      {/* SEARCH BAR */}
      <Box
        display="flex"
        // backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } ,p: 2}}
          >
            DashBoard
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } ,p: 2}}
          >
            Users
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } ,p: 2}}
          >
            Settings
          </Typography>
      </Box>

      {/* ICONS */}
      <Box display="flex" justifyContent="space-between" pr={2}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <ListIcon />
        </IconButton>
        <IconButton>
          <DraftsOutlinedIcon />
        </IconButton>
        <IconButton>
          <ManageAccountsSharpIcon />
        </IconButton>
        <IconButton>
          <EventOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
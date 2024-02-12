import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  MAXIMUS 
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Theme
            </Typography>
            <Item
              title="Colors"
              to="/colors"
              icon={<WaterDropOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Typography"
              to="/typography"
              icon={<ModeEditOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Components
            </Typography>
            <Item
              title="Base"
              to="/base"
              icon={<ExtensionOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Buttons"
              to="/buttons"
              icon={<NearMeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Forms"
              to="/form"
              icon={<ListAltOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Icons"
              to="/icon"
              icon={<StarBorderOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Notifications"
              to="/notification"
              icon={<NotificationsNoneOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Widgets"
              to="/widget"
              icon={<WidgetsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Plugins
            </Typography>
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarMonthOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Charts"
              to="/chart"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="DataTables"
              to="/datatables"
              icon={<ViewListOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Google Maps"
              to="/maps"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Extras
            </Typography>
            <Item
              title="Pages"
              to="/page"
              icon={<StarBorderOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
              title="Apps"
              to="/app"
              icon={<LayersOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
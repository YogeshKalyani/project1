import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px" >
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color:"white" }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <MoreVertOutlinedIcon />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color:"white"}}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
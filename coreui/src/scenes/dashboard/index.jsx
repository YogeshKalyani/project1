import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../Data/mockData";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(6, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={"blue"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="26K (-12.4%)"
            subtitle="Users"
            progress="0.40"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#1F51FF"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$6.200 (40.9%)"
            subtitle="Income"
            progress="0.40"
           
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#FFC000"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2.49% (84.7%)"
            subtitle="Conversion Rate"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#FF2400"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="44K (-23.6%)"
            subtitle="Sessions"
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          Traffic  (January - July 2022)
          </Typography>
          <Box height="400px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        

        {/* ROW 3 */}
        <Box
          gridColumn="span 2"
          gridRow="span 2"
          backgroundColor={"#316FF6"}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
           FaceBook
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px" 
          >
            <FacebookOutlinedIcon fontSize="large" />
            <Typography
              variant="h5"
              color={"white"}
              sx={{ mt: "15px" }}
            >
             89K Friends
            </Typography>
            <Typography>459 Feeds</Typography>
          </Box>
        </Box>


        <Box
          gridColumn="span 2"
          gridRow="span 2"
          backgroundColor={"#1DA1F2"}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Twitter
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <TwitterIcon fontSize="large" />
            <Typography
              variant="h5"
              color={"white"}
              sx={{ mt: "15px" }}
            >
              973K Followers
            </Typography>
            <Typography>1792 Tweets</Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 2"
          gridRow="span 2"
          backgroundColor={" #0077B5"}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            LinekdIn
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <LinkedInIcon fontSize="large" />
            <Typography
              variant="h5"
              color={"white"}

              sx={{ mt: "15px" }}
            >
              500+ Contacts
            </Typography>
            <Typography>292 Feeds</Typography>
          </Box>
        </Box>
        

        {/* row 4 */}
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
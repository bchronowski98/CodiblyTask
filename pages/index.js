import ProductTable from "../components/ProductTable";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "3rem",
      }}
    >
      <Typography variant="h4" component="h1">
        Task
      </Typography>

      <ProductTable />
    </Box>
  );
}

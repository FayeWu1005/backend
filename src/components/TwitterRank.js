import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTwitterData } from "./Data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export default function TwitterList() {
  const { loading, data, error } = useTwitterData();
  const [newsQuery, setNewsQuery] = useState("twitter");

  const clickHandler = (e) => {
    e = e.replace(/[%23]/g, "");
    setNewsQuery(e);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (data.length === 0) {
    return <p>No Twitter Data return.</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.info.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
      <Table sx={{ maxWidth: 500 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Rank</StyledTableCell>
            <StyledTableCell align="center">Trending Tweets</StyledTableCell>
            <StyledTableCell align="center">Twitter Link</StyledTableCell>
            <StyledTableCell align="center">Related News</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <TableRow
              hover
              key={item.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => clickHandler(item.query)}
            >
              <TableCell component="th" scope="row" align="center">
                {i + 1}
              </TableCell>
              <TableCell align="center">{item.name}</TableCell>

              <TableCell align="center">
                <Link href={item.url} target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </Link>
              </TableCell>
              <TableCell align="center">
                <Button>
                  <Link href={`/query=${newsQuery}`}>Check Out</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

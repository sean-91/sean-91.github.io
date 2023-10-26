import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ImageWithInfo } from '../model/BlogPageInfo';

export interface ImageTableProps {
  images: ImageWithInfo[];
}

export const ImageTable = ({ images }: ImageTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {images.map((image) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img
                  srcSet={`${image.image}`}
                  src={`${image.image}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: undefined,
                    aspectRatio: 'original',
                  }}
                />
              </TableCell>
              <TableCell align="right">{image.date}</TableCell>
              <TableCell align="right">{image.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
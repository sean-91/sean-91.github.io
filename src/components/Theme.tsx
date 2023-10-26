import { createTheme } from '@mui/material/styles';

export const grey = "#283334";
export const purple = "#9b42f5";
export const white = "#ffffff";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        sx: { bgcolor: purple, zIndex: (theme) => theme.zIndex.drawer + 1 }
      },
    },
    MuiDrawer: {
      defaultProps: {
        sx: { bgcolor: grey, color: white }
      }
    },
    MuiIcon: {
      defaultProps: {
        sx: { bgcolor: grey, color: white }
      }
    },
    MuiIconButton: {
      defaultProps: {
        sx: { bgcolor: grey, color: white }
      }
    },
    MuiImageList: {
      defaultProps: {
        sx: { bgcolor: grey, color: white }
      }
    },
    MuiList: {
      defaultProps: {
        sx: { bgcolor: grey, color: white }
      }
    },
    MuiPaper: {
      defaultProps: {
        sx: { bgcolor: grey, color: white }
      },
    },
    MuiTableContainer: {
      defaultProps: {
        sx: { color: white }
      },
    },
    MuiTableCell: {
      defaultProps: {
        sx: { color: white }
      },
    },
    MuiTypography: {
      defaultProps: {
        sx: { color: white }
      },
    },
  },
});
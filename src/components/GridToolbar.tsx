import { Box } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  useGridApiContext
} from "@mui/x-data-grid";

type GridComponentProps = {
  destinations?: JSX.Element[],
  endAction: JSX.Element,
}

const GridToolbar = () => {
  const apiRef = useGridApiContext();

  return (
    <GridToolbarContainer>
      <Box flexGrow={8}>
        <GridToolbarColumnsButton/>
        <GridToolbarDensitySelector/>
      {/*  { componentProps && componentProps.toolbar &&*/}
      {/*    (componentProps.toolbar as GridComponentProps).destinations &&*/}
      {/*    (componentProps.toolbar as GridComponentProps).destinations*/}
      {/*  }*/}
      {/*</Box>*/}
      {/*<Box>*/}
      {/*  { componentProps && componentProps.toolbar &&*/}
      {/*    (componentProps.toolbar as GridComponentProps).endAction &&*/}
      {/*    (componentProps.toolbar as GridComponentProps).endAction*/}
      {/*  }*/}
      </Box>
    </GridToolbarContainer>
  );
}

export default GridToolbar;
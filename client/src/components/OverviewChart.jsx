import React, { useMemo }from 'react'
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { useGetStatsQuery } from "state/api";

const OverviewChart = ({ isDashboard = false, view }) => {
    const theme = useTheme();
    const { data, isLoading } = useGetStatsQuery();
    // console.log("data", data);

    return(
    <div>
      
    </div>
  )
}

export default OverviewChart

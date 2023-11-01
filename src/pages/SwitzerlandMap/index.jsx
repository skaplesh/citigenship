import React, { useMemo } from "react";
import SwitzerlandChoropleth from "../../components/SwitzerlandChoropleth";
import data from "../../components/SwitzerlandChoropleth/severity-data.json";
import Sidebar from "../../components/SwitzerlandChoropleth/Sidebar";
import { useSelector } from "react-redux";
import { convertAndFilterData } from "./utils";

const SwitzerlandMap = () => {
  const [startTime, endTime] = useSelector(
    (state) => state.savings.current.timeRange
  );

  const filteredData = useMemo(() => {
    return convertAndFilterData(data, startTime, endTime);
  }, [startTime, endTime]);

  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <Sidebar />
      <div id="Map" style={{ height: "100vh" }}>
        <SwitzerlandChoropleth data={filteredData} />
      </div>
    </div>
  );
};

export default SwitzerlandMap;

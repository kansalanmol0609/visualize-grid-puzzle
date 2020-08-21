import React from "react";
import Tree from "react-d3-tree";

import useMeasure from "react-use/lib/useMeasure";
import Box from "@material-ui/core/Box";


export const DrawTree = ( { myTreeData } ) => {
  const [targetRef, { width: svgWidth }] = useMeasure();
  
  return (
    <Box
						m={1}
						border={1}
						flex="1"
						borderRadius="borderRadius"
						ref={targetRef}
		> 
      <Tree
							orientation="vertical"
							data={myTreeData}
							translate={{
								x: svgWidth / 2,
								y: 50,
							}}
							styles={{
								links: {
									stroke: "#C7C7C7",
									strokeWidth: 1,
								},
								nodes: {
									node: {
										name: {
											stroke: "none",
											fill: "#C7C7C7",
										},
									},
									leafNode: {
										name: {
											stroke: "none",
											fill: "#C7C7C7",
										},
									},
								},
							}}
						/>
    </Box>
    // <div id="treeWrapper" style={{ width: "80em", height: "80em" }}>
    //   <Tree data={myTreeData} orientation="vertical" />
    // </div>
  );
}

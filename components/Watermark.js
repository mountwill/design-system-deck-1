const React = require("react");
import styled from "styled-components";

const StyledWaterMark = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 44px;
`;

const Watermark = () => <StyledWaterMark>change.org</StyledWaterMark>;

export { Watermark };

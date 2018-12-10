import styled from '../../styledComponents';

const Icon = styled("div")<{ svgSrc: string }>`
  background-image: url(${ (props) => props.svgSrc });
  height: 30px;
  width: 30px;
`;

export default Icon;

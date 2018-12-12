import styled from '../../styledComponents';

const Icon = styled("div")<{ svgSrc: string, checked?: boolean }>`
  background-image: url(${ (props) => props.svgSrc });
  height: 30px;
  width: 30px;
  opacity: ${( props ) => (props.checked) ? '1' : '0.5'};
`;

export default Icon;

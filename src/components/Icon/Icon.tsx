import styled from '../../styledComponents';

const Icon = styled("div")<{ svgSrc: string, unchecked?: boolean, hoverEffect?: boolean }>`
  background-image: url(${ (props) => props.svgSrc });
  height: 30px;
  width: 30px;
  opacity: ${( props ) => (props.unchecked) ? '0.5' : '1'};
  margin: 0 auto;

  &:hover {
    ${( props ) => (props.hoverEffect) ? 'opacity: 0.5;': ''};
  }
`;

export default Icon;

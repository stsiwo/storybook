import * as React from 'react';
import styled from '../../styledComponents';
import Icon from '../Icon/Icon';

const uploadImageIcon = require('./assets/uploadImage.svg');

interface Props {
  className?: string;
  labelName: string;
  //onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // url to image server
  fileUrl?: string;
}

interface State {
   currentImage: string;
}


class File extends React.Component<Props, State> {

  private preview = React.createRef<HTMLImageElement>();

  constructor(props: Props) {
    super(props);
    this.state = {
      currentImage: this.props.fileUrl,
    }
    this.handleChange = this.handleChange.bind(this);
    this.releaseObjectURL = this.releaseObjectURL.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files[0];

    console.log(URL);
    // display selected image to preview div
    const content = URL.createObjectURL(selectedFile);
    this.setState({ currentImage: content });

  }

  releaseObjectURL(e: React.ChangeEvent<HTMLImageElement>) {
    const src = e.target.src;
    URL.revokeObjectURL(src);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <label htmlFor={ this.props.labelName }>
          <Icon svgSrc={ uploadImageIcon } />
        </label>
        <input type="file" id={ this.props.labelName } name={ this.props.labelName } accept="image/*" onChange={ this.handleChange }/>
        <img src={ this.state.currentImage } width="300px" height="300px" ref={this.preview} onLoad={ this.releaseObjectURL }></img>
      </div>
    );
  }
}

const StyledFile = styled(File)`
  & > input {
    display: none;
  }
  


`
export default StyledFile;




import {TitleStyle} from './Title_style';

// Functional Component, no logic required, stateless
const Title = (props) => (
    <TitleStyle>{props.text}</TitleStyle>
)

export default Title;
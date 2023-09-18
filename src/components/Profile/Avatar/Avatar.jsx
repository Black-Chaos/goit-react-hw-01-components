import PropTypes from 'prop-types';
import { Thumb } from './Avatar.styled';
import { Img } from './Avatar.styled';

export function Avatar ({ avatar, tag, size }) {
    return <Thumb size={size}>
        <Img src={avatar} alt={tag} />
    </Thumb>
}

Avatar.propTypes = {
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
}
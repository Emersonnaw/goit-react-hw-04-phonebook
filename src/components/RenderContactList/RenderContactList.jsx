import { Ul,Li, P, Button } from './RenderContactList.styled';
import PropTypes from 'prop-types';
export const RenderContactList = ({ contactList, onDeleteContact }) => {
  return (
    <>
      <Ul>
        {contactList.map(({ id, name, number }) => (
          <Li key={id}>
            <P>
             &#9742; &#160;{name}: {number}
            </P>
            <Button onClick={() => onDeleteContact(id)}>Delete</Button>
          </Li>
        ))}
      </Ul>
    </>
  );
};

RenderContactList.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
  })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}
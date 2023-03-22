



export const ContactsList = ({filteredContacts, handleDelete}) => {
return (
             <ul>
                {filteredContacts.map(contact =>
                    <li key={contact.id}>{contact.name}: {contact.number} <button type="button" onClick={() => handleDelete(contact.id)}>Delete</button></li>)}
              </ul>
    )
}
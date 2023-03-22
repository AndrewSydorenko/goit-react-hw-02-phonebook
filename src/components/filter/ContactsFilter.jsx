



export const ContactsFilter = ({onHandleChange, filter}) => {


    return (
      <div>
        <input type="text" value={filter} onChange={onHandleChange} />
      </div>
    );
}
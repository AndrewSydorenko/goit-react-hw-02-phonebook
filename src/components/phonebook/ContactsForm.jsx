import { Component } from 'react';


export class ContactsForm extends Component {
state = {
    name: '',
    number:'',
    };


handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
      name: '',
      number:'',
    })
  }

    render() {
        const { name, number } = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="">Name</label>
                 <input
                    type="text"
                    name="name"
                    value={name}
                  onChange={this.handleChange}
                  placeholder="Example"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
                <label htmlFor="">Number</label>
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    placeholder="+38 065 335 22 34"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button type="submit">Add contact</button>
              </form>
        )
    }
};
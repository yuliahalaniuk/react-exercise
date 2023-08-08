import css from './Modal.module.css';
import React, { Component } from 'react';

class Modal extends Component {
  state = {
    title: this.props.item.title,
    content: this.props.item.content,
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  render() {
    const { onClose, handleEdit, item } = this.props;
    const { title, content } = this.state;

    return (
      <div className={css.backdrop}>
        <div className={css.modal}>
          <button type="button" onClick={onClose}>
            Close
          </button>
          <br />
          <b>Edit</b>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleEdit({ title, content, id: item.id });
              onClose();
            }}
          >
            <div>
              <label htmlFor="userName">Title</label>
              <input
                name="title"
                id="userName"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                id="content"
                rows="8"
                placeholder="Text input"
                value={this.state.content}
                onChange={this.handleChange}
              ></textarea>
            </div>

            <button type="submit">Submit </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;

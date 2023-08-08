import Modal from '../Modal/Modal';
import React, { Component } from 'react';

class Material extends Component {
  state = {
    modalOpen: false,
  };

  modalOpen = () => this.setState({ modalOpen: true });
  closeModal = () => this.setState({ modalOpen: false });

  render() {
    const { item, handleDelete, handleEdit } = this.props;
    const { title, content, id } = item;
    return (
      <>
        <h3>{title}</h3>
        <p>{content}</p>
        <button
          type="button"
          onClick={() => {
            this.modalOpen();
          }}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete material
        </button>
        {this.state.modalOpen && (
          <Modal
            onClose={this.closeModal}
            handleEdit={handleEdit}
            item={item}
          />
        )}
      </>
    );
  }
}

export default Material;

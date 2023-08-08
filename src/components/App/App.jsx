import React, { Component } from 'react';
import MaterialEditor from '../MaterialEditor/MaterialEditor';
import MaterialsList from '../MaterialsList/MaterialsList';

import {
  createMaterial,
  getMaterials,
  deleteMaterial,
  editMaterial,
} from '../../services/api';

class App extends Component {
  state = {
    materials: [],
    isError: false,
  };

  async componentDidMount() {
    try {
      const defaultMaterials = await getMaterials();
      console.log(defaultMaterials);
      this.setState({ materials: defaultMaterials });
    } catch (error) {
      this.setState({ isError: true });
    }
  }

  handleFormSubmit = async values => {
    try {
      const material = await createMaterial(values);
      console.log(material);
      this.setState(prevState => ({
        materials: [...prevState.materials, material],
      }));
    } catch (error) {
      this.setState({ isError: true });
    }
  };

  handleDelete = async id => {
    try {
      await deleteMaterial(id);
      this.setState(prevState => ({
        materials: prevState.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ isError: true });
    }
  };

  handleEdit = async fields => {
    try {
      const updatedMaterial = await editMaterial(fields);

      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch {
      this.setState({ isError: true });
    }
  };

  render() {
    const { isError, materials } = this.state;
    return (
      <>
        <MaterialEditor onSubmit={this.handleFormSubmit} />
        {isError ? (
          <p>Oppps...</p>
        ) : (
          <MaterialsList
            items={materials}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        )}
      </>
    );
  }
}

export default App;

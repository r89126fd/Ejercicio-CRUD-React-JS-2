import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CategoryForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    image: initialData.image || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre de la Categoría</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Imagen (URL)</Form.Label>
        <Form.Control
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit" className="mt-2">
        Guardar
      </Button>
    </Form>
  );
}

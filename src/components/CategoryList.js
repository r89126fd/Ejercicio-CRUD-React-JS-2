import { Table, Button } from 'react-bootstrap';

export default function CategoryList({ categories, onEdit, onDelete }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>
              <img src={category.image} alt="Imagen" style={{ width: '50px' }} />
            </td>
            <td>
              <Button variant="warning" onClick={() => onEdit(category)}>
                Editar
              </Button>{' '}
              <Button variant="danger" onClick={() => onDelete(category.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

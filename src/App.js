import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getCategories, createCategory, updateCategory, deleteCategory } from './services/categoryService';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';
import Alerts from './components/Alerts';

function App() {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '' });

  const fetchCategories = async () => {
    const { data } = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCreateOrUpdate = async (category) => {
    if (editingCategory) {
      await updateCategory(editingCategory.id, category);
      setAlert({ show: true, message: 'Categoría actualizada correctamente' });
    } else {
      await createCategory(category);
      setAlert({ show: true, message: 'Categoría creada correctamente' });
    }
    fetchCategories();
    setEditingCategory(null);
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    setAlert({ show: true, message: 'Categoría eliminada correctamente' });
    fetchCategories();
  };

  return (
    <Container>
      <h1>CRUD de Categorías</h1>
      <CategoryForm onSubmit={handleCreateOrUpdate} initialData={editingCategory} />
      <CategoryList categories={categories} onEdit={setEditingCategory} onDelete={handleDelete} />
      <Alerts show={alert.show} message={alert.message} onClose={() => setAlert({ show: false })} />
    </Container>
  );
}

export default App;

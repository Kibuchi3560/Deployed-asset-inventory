
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAsset } from '../redux/assetsSlice';
import axios from 'axios';

const AssetForm = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    image_url: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/categories', { withCredentials: true })
      .then((response) => setCategories(response.data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.category) {
      setError('Please fill in all required fields.');
      return;
    }
    try {
      await dispatch(addAsset(formData)).unwrap();
      setFormData({ name: '', category: '', image_url: '' });
      setError(null);
    } catch (err) {
      setError('Failed to add asset. Please try again.');
    }
  };

  return (
    <div className="card p-4">
      <h4 className="mb-4">Add New Asset</h4>
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            {error}
            <button type="button" className="btn-close" onClick={() => setError(null)}></button>
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">Asset Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter asset name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label fw-bold">Category</label>
          <select
            id="category"
            className="form-select"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="image_url" className="form-label fw-bold">Image URL (optional)</label>
          <input
            id="image_url"
            type="text"
            className="form-control"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            placeholder="Enter image URL"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Asset</button>
      </form>
    </div>
  );
};

export default AssetForm;
// AssetInventory.jsx
import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateAsset, deleteAsset } from '../../redux/assetsSlice';

const AssetInventory = ({ assets }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const filteredAssets = assets.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.id.toString().includes(search)
  );

  return (
    <div className="card p-4 shadow-sm border-0">
      <h4 className="mb-4 text-primary">Asset Inventory</h4>
      <Form.Control
        type="text"
        placeholder="Search by ID or Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 rounded-pill"
      />
      <div className="table-responsive">
        <Table striped hover className="table-modern">
          <thead className="bg-primary text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Purchase Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map(asset => (
              <tr key={asset.id}>
                <td>{asset.id}</td>
                <td>{asset.name}</td>
                <td>{asset.category}</td>
                <td>
                  <span className={`badge ${asset.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                    {asset.status}
                  </span>
                </td>
                <td>{asset.assignedTo || 'Unassigned'}</td>
                <td>{asset.purchaseDate}</td>
                <td>
                  <Button variant="outline-primary" size="sm" className="me-2 rounded-pill">Edit</Button>
                  <Button 
                    variant="outline-danger" 
                    size="sm" 
                    className="me-2 rounded-pill"
                    onClick={() => dispatch(deleteAsset(asset.id))}
                  >
                    Decommission
                  </Button>
                  <Button variant="outline-info" size="sm" className="rounded-pill">Reassign</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AssetInventory;
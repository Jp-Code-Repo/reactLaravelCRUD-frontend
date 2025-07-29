import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div>
      <div className="container py-5">
        <div className="row mb-4">
            <div className="col-12 text-center">
                <h1 className="display-4">Post Management System</h1>
                <p className="lead">Manage your posts efficiently</p>
            </div>
        </div>
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">All Posts</h5>
                <Link to="/create-new-post" className="btn btn-primary">
                    <i className="fas fa-plus me-1"></i>
                    Create New
                </Link>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-responsive">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                            <tbody id="post-table-body">
                                <tr>
                                    <td>1</td>
                                    <td><Link to="view.html?id=2">Advance Javascript Techniques</Link></td>
                                    <td>Jane Smith</td>
                                    <td>Programming</td>
                                    <td><span className="badge bg-warning text-dark">Draft</span></td>
                                    <td>2023-07-10</td>
                                    <td className="action-btns">
                                        <Link to="edit.html?id=2" className="btn btn-sm btn-primary">
                                            <i className="fas fa-edit"></i>
                                        </Link>
                                        <button className="btn-btn-sm btn-danger" data-bs-toggle="modal">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><Link to="view.html?id=2">Advance Javascript Techniques</Link></td>
                                    <td>Jane Smith</td>
                                    <td>Programming</td>
                                    <td><span className="badge bg-warning text-dark">Draft</span></td>
                                    <td>2023-07-10</td>
                                    <td className="action-btns">
                                        <Link to="edit.html?id=2" className="btn btn-sm btn-primary">
                                            <i className="fas fa-edit"></i>
                                        </Link>
                                        <button className="btn-btn-sm btn-danger" data-bs-toggle="modal">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>

      <div className="modal fade" id="deleteModal" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header bg-danger text-white">
                    <h5 className="modal-title" id="deleteModalLabel">Confirm Deletion</h5>
                    <button className="btn-close btn-close-white" data-bs-dimiss="modal" aria-label='Close'></button>
                </div>
                <div className="modal-body">
                    Are you sure you want to delete this post? This action cannot be undone.
                </div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" data-bs-dismiss>Cancel</button>
                    <button className="btn btn-danger" id="confirm-delete">Delete</button>
                </div>
            </div>
        </div>
      </div>


    </div>

    
  )
}

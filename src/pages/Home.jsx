import React from 'react'

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
                <a href="create.html" className="btn btnprimary">
                    <i className="fas fa-plus me-1"></i>
                    Create New
                </a>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>

                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
      </div>

      <div className="modal fade" id="deleteModal" tabindex="-1">
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

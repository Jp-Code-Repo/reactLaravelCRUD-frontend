import React from 'react'
import { Link } from 'react-router'

export default function Createnewpost() {
  return (
    <div>

      <div className="container py-5">

        <div className="row mb-4">
          <div className="col-12">
            <h1 className="display-4">Create New Post</h1>
            <nav aria-label='breadcrumb'>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Create Post</li>
              </ol>
            </nav>
          </div>
        </div>

        <form action="post-form" method='GET'>
          <div className="row mb-3"> 

            <div className="col-md-6">
              <label htmlFor="" className="form-label">Title</label>
              <input type="text" className="form-control" id="title"  />
            </div>

            <div className="col-md-6">
              <label htmlFor="" className="form-label">Author</label>
              <input type="text" className="form-control" id="author"  />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="category" className="form-label">Category</label>
              <select name="" id="category" className="form-select" > 
                <option value="">Select Category</option>
                <option value="Web Development">Web Development</option>
                <option value="Programming"> Programming</option>
                <option value="Design"> Design</option>
                <option value="Marketing"> Marketing</option>
                <option value="Business"> Business</option>
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="status" className="form-label">Status</label>
              <select name="" id="status" className="form-select" > 
                <option value="Published"> Published</option>
                <option value="Draft"> Draft</option>
                <option value="Archived"> Archived</option>
              </select>
            </div>

          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">Content</label>
            <textarea name="" id="content" rows="8" class="form-control" ></textarea>
          </div>

          <div className="d-grip gap-2 d-md-flex justify-content-md-end">
            <Link to="/" className="btn btn-secondary me-md-2">Cancel</Link>
            <button type="submit" className="btn btn-primary">Create Post</button>
          </div>
        </form>
      </div>

    </div>
  )
}


import React, { useState } from 'react'
import { Link } from 'react-router'
import api from '../api/api'

export default function Createnewpost() {

  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [ errors, setErrors ] = useState();

  const [ formData, setFormData ] = useState({
    'title' : "",
    'author' : "",
    'category' : "",
    'status' : "",
    'content' : "",
  });


  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData( (prev) => ( { ...prev, [name]: value} ) )
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await api.post('/create-new-post', formData);
      console.log(response);
    } catch (error) {
      if(error.response.status === 422){
        setErrors(error.response.data.message);
      }else{
        setErrors('Something went wrong');
      }
      // console.log(error);
    }finally{
      setIsSubmitting(false);
    }

    // console.log(formData);
  };

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

      {errors && <div className="alert alert-danger">{errors}</div>}
      

        <div className="card">
          <div className="card-heaer">
            <h5 className="mb-0">Post Details</h5>
          </div>
        
          <div className="card-body"> 
            <form id="post-form" onSubmit={handleSubmit}>
              <div className="row mb-3"> 

                <div className="col-md-6">
                  <label htmlFor="" className="form-label">Title</label>
                  <input type="text" className="form-control" name="title" id="title" value={formData.title} onChange={handleChange}  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="" className="form-label">Author</label>
                  <input type="text" className="form-control" name="author" id="author" value={formData.author} onChange={handleChange} />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="category" className="form-label">Category</label>
                  <select name="category" id="category" className="form-select" value={formData.category} onChange={handleChange}> 
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
                  <select name="status" id="status" className="form-select" value={formData.status} onChange={handleChange}> 
                    <option value="">Select Status</option>
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>

              </div>

              <div className="mb-3">
                <label htmlFor="" className="form-label">Content</label>
                <textarea name="content" id="content" rows="8" className="form-control" value={formData.content} onChange={handleChange} ></textarea>
              </div>

              <div className="d-grip gap-2 d-md-flex justify-content-md-end">
                <Link to="/" className="btn btn-secondary me-md-2">Cancel</Link>
                { isSubmitting ? 
                  <button type="button" className="btn btn-primary">Saving...</button>
                  :
                  <button type="submit" className="btn btn-primary">Create Post</button>
                }
              </div>
            </form>

          </div>

        </div>
      </div>

    </div>
  )
}


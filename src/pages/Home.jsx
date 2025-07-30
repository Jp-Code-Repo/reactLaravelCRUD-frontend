import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

import moment from 'moment'

import api from '../api/api'

export default function Home() {

    const [ isLoading, setIsLoading ] = useState(false);
    const [ allpost, setAllPost ] = useState([]);
    const [ deleteid, setDeleteid ] = useState(0);

    useEffect( () => {
        getAllPost();
    }, []);

    const getAllPost = async () => {

        setIsLoading(true);

        try {

            const response = await api.get('/get-all-post');
            setAllPost(response.data.allpost);

        } catch (error) {
            
            console.log(error)

        }finally{

            setIsLoading(false);

        }

    };

    const deletemodal = (id) => {

        setDeleteid(id);

    };

    const deletepost = async () => {

        const response = await api.post('/delete-post', {deleteid});
        getAllPost();
        const modal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
        modal.hide();
    };


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

                {isLoading ? <center>Loading . . .</center> :
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

                                    {allpost.map((item, index)=>(

                                    
                                        <tr key={item.id}>
                                            <td>{index+1}</td>
                                            <td><Link to="#">{item.title}</Link></td>
                                            <td>{item.author}</td>
                                            <td>{item.category}</td>
                                            <td>
                                                {item.status === 'Published' ?
                                                    <span className="badge bg-success">{item.status}</span>
                                                : item.status === 'Draft' ?
                                                    <span className="badge bg-danger">{item.status}</span>
                                                :
                                                    <span className="badge bg-warning">{item.status}</span>
                                                }
                                            </td>
                                            <td>{moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                            <td className="action-btns">
                                                <Link to={`/edit-post/${item.id}`} className="btn btn-sm btn-primary mx-2">
                                                    <i className="fas fa-edit"></i>
                                                </Link>

                                                <button className="btn-btn-sm btn-danger" onClick={()=>deletemodal(item.id)} data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>

                                    ))}

                                </tbody>
                        </table>
                    </div>
                }

            </div>
        </div>
      </div>

    <div className="modal fade" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header bg-danger text-white">
                    <h1 className="modal-title fs-5" id="deleteModalLabel">Confirm Deletion</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Are you sure you want to delete this post? This action cannot be undone.
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-danger" onClick={deletepost} id="confirm-delete">Understood</button>
                </div>
            </div>
        </div>
    </div>


    </div>

    
  )
}

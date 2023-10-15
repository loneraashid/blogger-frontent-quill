import React, {useEffect, useState} from 'react'
/*
Author: Rakibul
Contact: rakibulislam.cse21@gmail.com
web: https://arbytetechnology.com/
Linkedin: https://linkedin.com/in/rakibul21
@copyright all code
*/
import { FaEye } from "react-icons/fa";
import { FaTrashAlt} from "react-icons/fa";

import { FaEdit} from "react-icons/fa";
import {  Redirect} from "react-router-dom";
import {
  Pagination,
  PaginationItem,
  PaginationLink,

} from "reactstrap";


import { connect } from 'react-redux';

import './blogtable.css'
import Viewblog from '../viewblog/Viewblog';
import Deleteblog from '../deleteblog/Deleteblog';


import { approveBlog, deleteBlog,  fetchManagePost } from '../../../actions/blogAction';
import Addblog from '../Addblog/Addblog';
import Editblog from '../editblog/Editblog';
import LoadingComponent from '../../loading-component/LoadingComponent';
import ApproveModal from '../approveModal/ApproveModal';



const Blogtable = ({ profileData, blogs, dispatch }) => {
  const [firstTableCurrentPage, setFirstTableCurrentPage] = useState(0);
const pageSize = 15;
const firstTablePagesCount = Math.ceil(blogs.length / pageSize);

  const [loading, setLoading]= useState(false)
  const [modalAdd, setModalAdd]= useState(false)
  const [modalEdit, setModalEdit]= useState(false)
  const [modalView, setModalView]= useState(false)
  const [modalApprove, setModalApprove]= useState(false)
  const [modalDelete, setModalDelete]= useState(false)
  const [selectedData, setSelectedData]=useState({})


useEffect(()=>{
  dispatch(fetchManagePost())
},[dispatch])



  const handleAdd= () => {
     setModalAdd(true)
     }
     const toggleAddModal = () => setModalAdd(!modalAdd); 

     const handleEdit= (data) => {
      // e.preventDefault()
      setModalEdit(true)
      setSelectedData(data)
      }
      const toggleEditModal = () => setModalEdit(!modalEdit); 

     const handleView= (blogData) => {
      setModalView(true)
      setSelectedData(blogData)
      }
      const toggleViewModal = () => setModalView(!modalView); 


     const handleApprove= (blogData) => {
      setModalApprove(true)
      setSelectedData(blogData)
      }
      const toggleApproveModal = () => setModalApprove(!modalApprove); 

      const handleDelete= (blogData) => {
        setModalDelete(true)
        setSelectedData(blogData)
        }
        const toggleDeleteModal = () => setModalDelete(!modalDelete); 

const setFirstTablePage = (e, index) => {
  e.preventDefault();
  setFirstTableCurrentPage(index);
}


const handleDeleteSubmit=(id)=>{

dispatch(deleteBlog(id))
setModalDelete(false)
}
const handleApproveSubmit=(id)=>{

dispatch(approveBlog(id))
setModalApprove(false)
}



  if (!JSON.parse(localStorage.getItem('authenticated'))) {
    return (
      <Redirect to={'/'} />
    );
  }


  return (
    <>
     
 {loading ? <LoadingComponent/>  :
 
 <div className='container-lg mt-5 d-flex justify-content-center'>
  <div className='col-12 mb-5'>
  <div className='row tournament-header'>
        <div className='col-7'>
        <h2 className='peopletable-name'>
      Blog Post Table
    </h2>
        </div>
    <div className='col-5 d-flex justify-content-end mb-4'>
    <button type="button" className="btn btn-primary" onClick={(e)=>handleAdd()}>Add new post</button>
    
</div>

  </div>
  
 {blogs ?  <div className=' table-responsive-lg'>
  <table className="table table-hover table-bordered">
 
 <thead>
   <tr className="table-active">
   <th className='th-sm' scope="col-2">Image</th>
   <th className='th-sm' scope="col-2">Title</th>
     <th className='th-sm' scope="col-2">Description </th>
     <th className='th-sm' scope="col-2">Status </th>
     <th className='th-sm' scope="col-2">Action</th>
     
   </tr>
 </thead>
 <tbody>


 {blogs && blogs.length !==0 ? blogs.slice(
                       firstTableCurrentPage * pageSize,
                       (firstTableCurrentPage + 1) * pageSize
                     ).map((blogData)=>{
                    
                      return (
   <tr key={blogData._id}>
     <td> <img src={blogData.image} width={60} height={60} />  </td>
     <td>{blogData.title}</td>
     <td>{blogData.description.slice(0,60)+'...'} </td>

    {profileData.isAdmin?  <td>{blogData.isApproved ? <span className='badge-success px-2 py-1 rounded'>Approved</span> : <span onClick={(e)=>handleApprove(blogData)} className='cursor-pointer font-weight-bold'><span className='badge-success'>✔ </span>&nbsp; Approve Now</span> }</td>  :
     <td>{blogData.isApproved ? <span className='badge-primary rounded'>Approved</span> : <span className='badge-warning rounded'>Not Approved</span> }</td>
    }
  
   
    
     <td className='action-btn d-flex'> 
     <span  className="view"  onClick={(e)=>handleView(blogData)}><FaEye className='view-btn'></FaEye></span>
      <span  className="edit" onClick={()=>handleEdit(blogData)}><FaEdit className='edit-btn'></FaEdit></span>
    <span className='delete' onClick={()=>handleDelete(blogData)}><FaTrashAlt className='delete-btn'></FaTrashAlt></span>
    

     
    </td>
   </tr>
    );}) : 
    <tr>
      <td className="alert alert-warning mt-3" role="alert">
    You do not have any post!
  </td>
      </tr>
  }
 </tbody>
</table>

{modalAdd && <Addblog setLoading={setLoading} show={modalAdd} toggle={toggleAddModal}/>}
{modalView && <Viewblog show={modalView} toggle={toggleViewModal} blogdata={selectedData}/>}
 {modalEdit && <Editblog show={modalEdit} toggle={toggleEditModal} blogdata={selectedData}/>}
{modalDelete && <Deleteblog show={modalDelete} blogData={selectedData} handleDeleteSubmit={handleDeleteSubmit} toggle={toggleDeleteModal}/>} 
{modalApprove && <ApproveModal show={modalApprove} data={selectedData} handleApproveSubmit={handleApproveSubmit} toggle={toggleApproveModal}/>} 
  </div>
  :
  <div>
    <span className="alert alert-warning mt-3" role="alert">
    No data found!
  </span>
  </div>
  }
  



{blogs && blogs.length> pageSize &&


<Pagination className="pagination-borderless d-flex justify-content-end mb-5" aria-label="Page navigation example">
                    <PaginationItem disabled={firstTableCurrentPage <= 0}>
                      <PaginationLink
                        onClick={e => setFirstTablePage(e, firstTableCurrentPage - 1)}
                        previous
                        href="#top"
                      />
                    </PaginationItem>
                    {[...Array(firstTablePagesCount)].map((page, i) =>
                      <PaginationItem active={i === firstTableCurrentPage} key={i}>
                        <PaginationLink onClick={e => setFirstTablePage(e, i)} href="#top">
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem disabled={firstTableCurrentPage >= firstTablePagesCount - 1}>
                      <PaginationLink
                        onClick={e => setFirstTablePage(e, firstTableCurrentPage + 1)}
                        next
                        href="#top"
                      />
                    </PaginationItem>
                  </Pagination>


}

                  </div>
 </div>

 
 }
   


    </>
  );
};



function mapStateToProps(state) {
  return {
    
    blogs: state.blog.manageBlogData,
    profileData: state.myprofile.profileData,
    
  };
}

export default connect(mapStateToProps)(Blogtable);


import React, {useEffect, useState} from 'react'
/*
Author: Rakibul
Contact: rakibulislam.cse21@gmail.com
web: https://arbytetechnology.com/
Linkedin: http://linkedin.com/in/rakibul21

*/
import { FaEye } from "react-icons/fa";
import { FaTrashAlt} from "react-icons/fa";
import { FaEdit} from "react-icons/fa";

import {
  Pagination,
  PaginationItem,
  PaginationLink,

} from "reactstrap";


import { connect } from 'react-redux';

import './usertable.css'

import DeleteModal from '../delete/DeleteModal';

import Addblog from '../Addblog/Addblog';
import EditModal from '../edit/EditModal';
import { deleteUser, fetchUser } from '../../../actions/userAction';



const Usertable = ({ sidebarPosition, users, dispatch }) => {
  const [firstTableCurrentPage, setFirstTableCurrentPage] = useState(0);
const pageSize = 10;
const firstTablePagesCount = Math.ceil(users.length / pageSize);

  const [modalAdd, setModalAdd]= useState(false)
  const [modalEdit, setModalEdit]= useState(false)
 
  const [modalDelete, setModalDelete]= useState(false)
  const [selectedData, setSelectedData]=useState({})


useEffect(()=>{
  dispatch(fetchUser())
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

    
     

      const handleDelete= (data) => {
        setModalDelete(true)
        setSelectedData(data)
        }
        const toggleDeleteModal = () => setModalDelete(!modalDelete); 

const setFirstTablePage = (e, index) => {
  e.preventDefault();
  setFirstTableCurrentPage(index);
}


const handleDeleteSubmit=(id)=>{

dispatch(deleteUser(id))
setModalDelete(false)
}
  return (
    <>
     
 <div className='container-lg mt-5 d-flex justify-content-center'>
  <div className='col-12 mb-5'>
  <div className='row tournament-header'>
        <div className='col-7'>
        <h2 className='peopletable-name'>
      Users Table
    </h2>
        </div>
   

  </div>
  
 {users ?  <div className=' table-responsive-lg'>
  <table className="table table-hover table-bordered">
 
 <thead>
   <tr className="table-active">
   <th className='th-sm' scope="col-2">Joined</th>
   <th className='th-sm' scope="col-2">Name</th>
     <th className='th-sm' scope="col-2">Email </th>
     <th className='th-sm' scope="col-2">Action</th>
     
   </tr>
 </thead>
 <tbody>


 {users && users.length !==0 ? users.slice(
                       firstTableCurrentPage * pageSize,
                       (firstTableCurrentPage + 1) * pageSize
                     ).map((single)=>{
                    
                      return (
   <tr key={single._id}>
     <td>{single.createdAt.slice(0,10)}</td>
     <td>{single.name}</td>
     <td>{single.email} </td>
  
   
    
     <td className='action-btn d-flex'> 
     {/* <span  className="view"  onClick={(e)=>handleView(single)}><FaEye className='view-btn'></FaEye></span> */}
      <span  className="edit" onClick={()=>handleEdit(single)}><FaEdit className='edit-btn'></FaEdit></span>
    <span className='delete' onClick={()=>handleDelete(single)}><FaTrashAlt className='delete-btn'></FaTrashAlt></span>
    

     
    </td>
   </tr>
    );}) : 
    <tr>
      <td className="alert alert-warning mt-3" role="alert">
    No data found!
  </td>
      </tr>
  }
 </tbody>
</table>

{modalAdd && <Addblog show={modalAdd} toggle={toggleAddModal}/>}

 {modalEdit && <EditModal show={modalEdit} toggle={toggleEditModal} data={selectedData}/>}
{modalDelete && <DeleteModal show={modalDelete} data={selectedData} handleDeleteSubmit={handleDeleteSubmit} toggle={toggleDeleteModal}/>} 
  </div>
  :
  <div>
    <span className="alert alert-warning mt-3" role="alert">
    No data found!
  </span>
  </div>
  }
  



{users && users.length> pageSize &&


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

      {/*Service section end*/}


    </>
  );
};



function mapStateToProps(state) {
  return {
    
    users: state.users.userData,
    
  };
}

export default connect(mapStateToProps)(Usertable);


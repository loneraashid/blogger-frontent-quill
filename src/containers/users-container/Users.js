
import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
/*
Author: Rakibul
Contact: rakibulislam.cse21@gmail.com
web: https://arbytetechnology.com/
Linkedin: http://linkedin.com/in/rakibul21

*/




import {
  Pagination,
  PaginationItem,
  PaginationLink,

} from "reactstrap";

import { FaEye } from "react-icons/fa";
import { FaTrashAlt} from "react-icons/fa";
import { fetchUser } from '../../actions/userAction';


function Users({users, dispatch}) {
  const [firstTableCurrentPage, setFirstTableCurrentPage] = useState(0);
  const [isFilter, setIsFilter] = useState(false);
  const [filteredPlayerList, setFilteredPlayerList] = useState([]);
  const [modalView, setModalView]= useState(false)
  const [modalDelete, setModalDelete]= useState(false)
const pageSize = 10;
const firstTablePagesCount = Math.ceil(users.length / pageSize);

const setFirstTablePage = (e, index) => {
  e.preventDefault();
  setFirstTableCurrentPage(index);

}

useEffect(()=>{
dispatch(fetchUser())

},[dispatch])

const handleFilter=(e)=>{
e.preventDefault()
let filterText= e.target.value
if (filterText==='Filter By Game Format') {
  setIsFilter(false)
  setFilteredPlayerList(users)
  return
}
setIsFilter(true)
// setFilterValue(e.target.value)
setFilteredPlayerList(users.filter(e=> e.tournament && e.tournament.format===filterText))

}


 

  const handleView= (e) => {
   setModalView(true)
   }
   

   const handleDelete= (e) => {
     setModalDelete(true)
     }
    




return (
  <>
  <div className='container-lg mt-5 d-flex justify-content-center'>
  <div className=' col-12 mb-5'>
  <div className='d-flex justify-content-end '>
        <div className='col-6 col-md-4'>
<div className="float-right">
  {/* <div className="search">
    <input type="text" className="searchTerm" placeholder="search by" />
    <button type="submit" className="searchButton">
      <FaSearch/>
    </button>
  </div> */}
  
</div>

        </div>
    

  </div>
 
  <div className=' table-responsive-lg'>
  <table className="table table-hover table-bordered">
 
 <thead>
   <tr className="table-active">

     <th className='th-sm' scope="col-2">Join Date </th>
     <th className='th-sm' scope="col-2">Name </th>
     <th className='th-sm' scope="col-2">Email </th>
     
    
     <th className='th-sm' scope="col-2">Action </th>
     


     
   </tr>
 </thead>
 <tbody>

{isFilter && filteredPlayerList && filteredPlayerList.length !==0 && filteredPlayerList.slice(
                       firstTableCurrentPage * pageSize,
                       (firstTableCurrentPage + 1) * pageSize
                     ).map((single)=>{
                    
                      return (
   <tr key={single._id}>
        <td>{single.createdAt.slice(0,10)}</td>
     <td>{single.name}</td>
     <td>{single.email} </td>
   
     <td className='league-action-btn'> 
     <span  className="view"  onClick={(e)=>handleView(single)}><FaEye className='view-btn'></FaEye></span>
      {/* <span  className="edit"><FaEdit className='edit-btn'></FaEdit></span> */}
    <span className='delete' onClick={()=>handleDelete(single._id)}><FaTrashAlt className='delete-btn'></FaTrashAlt></span>
    
    {/* {modalView && <Viewleague show={modalView} toggle={toggleViewModal} Leaguedata={Leaguedata}/>}
    {modalDelete && <Deleteleague show={modalDelete}  id={Leaguedata._id} handleDeleteSubmit={handleDeleteSubmit} toggle={toggleDeleteModal}/>}
      */}
     </td>
   

   </tr>
    )}) }

 {!isFilter&& ( users && users.length !==0) ? users.slice(
                       firstTableCurrentPage * pageSize,
                       (firstTableCurrentPage + 1) * pageSize
                     ).map((single)=>{
                    
                      return (
   <tr key={single._id}>
    <td>{single.createdAt.slice(0,10)}</td>
     <td>{single.name}</td>
     <td>{single.email} </td>
   
     <td className='league-action-btn'> 
     <span  className="view"  onClick={(e)=>handleView(single)}><FaEye className='view-btn'></FaEye></span>
      {/* <span  className="edit"><FaEdit className='edit-btn'></FaEdit></span> */}
    <span className='delete' onClick={()=>handleDelete(single._id)}><FaTrashAlt className='delete-btn'></FaTrashAlt></span>
    
    {/* {modalView && <Viewleague show={modalView} toggle={toggleViewModal} Leaguedata={Leaguedata}/>}
    {modalDelete && <Deleteleague show={modalDelete}  id={Leaguedata._id} handleDeleteSubmit={handleDeleteSubmit} toggle={toggleDeleteModal}/>}
      */}
     </td>

   </tr>
    );}) : 
   null

   
  }
  {!isFilter && users.length ===0 &&  <tr>
    <td className="alert alert-warning mt-3" role="alert">
  No data found!
</td>
    </tr>}
 </tbody>
</table>
  </div>
  


  {!isFilter&& users && users.length> pageSize &&


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
</>

  )
}

function mapStateToProps(state) {
  return {
    
    isAuthenticated: state.auth.isAuthenticated,
    users: state.users.userData,
    
    
  };
}

export default connect(mapStateToProps)(Users);

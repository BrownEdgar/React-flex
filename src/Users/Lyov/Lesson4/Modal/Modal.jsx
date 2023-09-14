import './Modal.scss'


export default function Modal({ deleteId, id, onDeleteButton, }) {


  return (
    <div className='Modal'>
      <div className='Modal-body'>
        <p className='Modal-p'>Are you sure you want to delete?</p>
        <button className='Modal-delete' onClick={() => {
          onDeleteButton();
          deleteId(id)
        }}>Delete</button>
        <button className='Modal-cancel' onClick={onDeleteButton}>Cancel</button>
      </div>



    </div>
  )
}

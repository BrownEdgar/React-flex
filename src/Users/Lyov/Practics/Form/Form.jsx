import './Form.scss'


export default function Form({ setUsers,HandleSubmit }) {

  

  return (
    <div className='Form'>
      <form>
        <h2>Add User</h2>
        <form onSubmit={HandleSubmit}></form>
        <div>
          <label htmlFor="full_name"> Full Name</label>
          <input type="text" id='full_name' required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' required />
        </div>
        <div>
          <label htmlFor="description">About me</label>
          <textarea name="description" id='description' cols='30' rows='10' placeholder='...description'></textarea>
        </div>
        <div>
          <input type="submit" value="Add User" onSubmit={HandleSubmit}/>
        </div>
      </form>
    </div>
  )
}

import React from 'react'
import Input from '../../shared/FormElements/Input'
  const NewPost= ()=> {
    return (
        <div>
          <form>
            <Input
              element="input"
              type="text"
              placeholder="Title"
              errorText= "Enter Valid Title"
            />
          </form>
        </div>
    )
}
export default NewPost;
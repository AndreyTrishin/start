import React from 'react'
import { CreateCourse } from '../APIRequest';
import { useNavigate } from "react-router-dom";

export default function AddCoursePage() {

  var title, description;
  var file;
  var onChangeHandlerTitle = (e) => {
    title = e.currentTarget.value;
  }
  var onChangeHandlerPassword = (e) => {
    description = e.currentTarget.value;
  }

  var onFileChangeHandler = (e) => {
    file = e.currentTarget.files[0];
  }
  const navigate = useNavigate();

  return (
    <div>
      <h3>Заголовок</h3>
      <input type='text' onChange={onChangeHandlerTitle} />
      <h3>Описание</h3>
      <input type='text' onChange={onChangeHandlerPassword} />
      <br />
      <input type='file' onChange={onFileChangeHandler} />
      <br />
      <button onClick={async () => {
        var course = await CreateCourse(title, description);
        const formData = new FormData();
        formData.append('file', file);
        fetch('https://localhost:7225/api/Content/CreateFileToCourse', {
          method: 'post',
          body: formData,
          // headers: {
          //   "accept": "*/*",
          //   "Content-Type": "multipart/form-data"
          // }
        })
        navigate('/course', {state: {course: course}})
      }}>Создать курс</button>
    </div>
  )
}

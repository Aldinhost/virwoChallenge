import React,{ useState } from 'react'

const useForm = (initial = {}) => {
    const [form, setForm] = useState(initial);

    const changed = ({target}) => {

        const {name, value} = target;

        setForm({
            ...form,
            [name]: value
        })

    }


  return { 
    form,
    changed
  }
}

export default useForm
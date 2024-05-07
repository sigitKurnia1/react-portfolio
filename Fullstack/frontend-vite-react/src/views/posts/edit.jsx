import { useState, useEffect, useCallback } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../../api"

export default function PostEdit() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const { id } = useParams()

    const fetchDetailPost = useCallback(async () => {
        await api.get(`/api/posts/${id}`)
            .then(response => {
                setTitle(response.data.data.title)
                setContent(response.data.data.content)
            })
    }, [id])

    useEffect(() => {
        fetchDetailPost()
    }, [fetchDetailPost])

    const updatePost = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("title", title)
        formData.append("content", content)
        formData.append("_method", "PUT")

        await api.post(`/api/posts/${id}`, formData)
            .then(() => {
                navigate("/posts");
            })
            .catch(error => {
                setErrors(error.response.data)
            })
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow">
                        <div className="card-body">
                            <form onSubmit={updatePost}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Title</label>
                                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title Post"/>
                                    {
                                        errors.title && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.title[0]}
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Content</label>
                                    <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} rows="5" placeholder="Content Post"></textarea>
                                    {
                                        errors.content && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.content[0]}
                                            </div>
                                        )
                                    }
                                </div>

                                <button type="submit" className="btn btn-md btn-primary rounded-sm shadow border-0">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
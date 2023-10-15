import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./addblog.css";
import { toast } from "react-toastify";
import { addBlog } from "../../../actions/blogAction";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function Addblog(props) {
  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
  };

  const quillFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "align",
  ];
  const [state, setState] = useState({
    title: "",
    description: "",
    category: "None",
  });
  const { setLoading } = props;

  const [image, setImage] = useState([]);
  const [file, setFile] = useState([]);

  const changeCred = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleImage = async (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    setFile(e.target.files[0]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage((prev) => [...prev, reader.result]);
      };
    });
  };

  const doAddPost = (event) => {
    event.preventDefault();

    if (!state.title || !state.description || !state.category) {
      toast.error("Please fill all the fields!");
      return;
    }
    const formData = new FormData();

    if (image.length > 0) {
      Array.from(image).forEach((img) => {
        formData.append("image[]", img);
      });
    } else {
      formData.append("image", []);
    }

    formData.append("title", state.title);
    formData.append("description", state.description);
    formData.append("category", state.category);

    setLoading(true);
    props
      .dispatch(
        addBlog({
          creds: formData,
        })
      )
      .then((res) => {
        if (res) {
          props.toggle();
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (!JSON.parse(localStorage.getItem("authenticated"))) {
    return <Redirect to={from} />;
  }
  return (
    <>
      <Modal
        className="add-tournament-modal"
        isOpen={props.show}
        size="lg"
        toggle={props.toggle}
      >
        <ModalHeader>Add New Post</ModalHeader>
        <ModalBody>
          <div className="container-fluid  mx-auto">
            <div className="card card0 border-0">
              <div className="d-flex justify-content-center">
                <div className="col-md-12 d-flex justify-content-center">
                  <form className="addblog-form">
                    <div className="card2 card border-0 py-5">
                      <>
                        <div className="row px-3">
                          <label className="mb-1">
                            <h6 className="mb-0 text-sm">Title</h6>
                          </label>
                          <input
                            value={state.title}
                            onChange={(event) => changeCred(event)}
                            className="form-control mb-4"
                            type="text"
                            name="title"
                            placeholder="Enter title"
                            required
                          />
                        </div>

                        <div className="row px-3">
                          <label className="mb-1 mt-3">
                            <h6 className="mb-0 text-sm">Post Image</h6>
                          </label>

                          <input
                            onChange={(e) => handleImage(e)}
                            type="file"
                            accept="image/png, image/jpeg, image/gif, image/jpg"
                          />
                        </div>

                        <div className="row px-3">
                          <label className="mb-1">
                            <h6 className="mb-0 text-sm">Description</h6>
                          </label>

                          {/* <textarea
                            className="form-control mb-4"
                            id="exampleFormControlTextarea1"
                            rows="9"
                            value={state.description}
                            onChange={(event) => changeCred(event)}
                            type="text"
                            name="description"
                            placeholder="Enter description"
                            required
                          ></textarea> */}
                          <ReactQuill
                            value={state.description}
                            onChange={(value) =>
                              setState({ ...state, description: value })
                            }
                            className="quill-editor"
                            modules={quillModules}
                            formats={quillFormats}
                          />
                        </div>

                        {props.profileData.isAdmin && (
                          <div className="row px-3">
                            <label className="mb-1">
                              <h6 className="mb-0 text-sm">Post Category</h6>
                            </label>
                            <select
                              onChange={(event) => changeCred(event)}
                              name="category"
                              required
                              className="form-control mb-4"
                            >
                              <option value>Select category</option>
                              <option value="General">General</option>
                              <option value="Trending">MAK stories</option>
                            </select>
                          </div>
                        )}
                      </>
                    </div>
                  </form>
                </div>
              </div>

              <ModalFooter>
                <Button color="secondary" onClick={props.toggle}>
                  Cancel
                </Button>{" "}
                <Button color="primary" onClick={(event) => doAddPost(event)}>
                  Submit
                </Button>
              </ModalFooter>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
    profileData: state.myprofile.profileData,
  };
}

export default withRouter(connect(mapStateToProps)(Addblog));

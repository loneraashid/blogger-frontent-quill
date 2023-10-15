import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { editBlog } from "../../../actions/blogAction";

function Editblog(props) {
  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      [{ script: "sub" }, { script: "super" }],
      ["background"],

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
    "code-block",
    "background",
    "script",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "align",
  ];

  const [state, setState] = useState({
    title: props.blogdata.title,
    description: props.blogdata.description,
    category: props.blogdata.category,
  });

  const changeCred = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const doEditPost = (event) => {
    event.preventDefault();
    if (!state.title || !state.description || !state.category) {
      return;
    }

    props.dispatch(
      editBlog({
        creds: { ...state },
        id: props.blogdata._id,
        toggleModel: props.toggle,
      })
    );
  };

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (!JSON.parse(localStorage.getItem("authenticated"))) {
    return <Redirect to={from} />;
  }

  return (
    <>
      <Modal isOpen={props.show} size="lg" toggle={props.toggle}>
        <ModalHeader>Edit Post</ModalHeader>
        <ModalBody className="edittournament-modal-div">
          <div className="container-fluid mx-auto">
            <div className="card card0 border-0">
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <form className="">
                    <div className="card2 card border-0 px-4 py-5">
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
                          <label className="mb-1">
                            <h6 className="mb-0 text-sm">Description</h6>
                          </label>

                          <ReactQuill
                            value={state.description}
                            onChange={(value) =>
                              setState({
                                ...state,
                                description: value.replace,
                              })
                            }
                            className="quill-editor"
                            modules={quillModules}
                            formats={quillFormats}
                          />
                        </div>

                        <div className="row px-3">
                          <label className="mb-1">
                            <h6 className="mb-0 text-sm">Category</h6>
                          </label>
                          <select
                            onChange={(event) => changeCred(event)}
                            name="category"
                            className="form-control mb-4"
                            value={state.category.value}
                          >
                            <option value="General">General</option>
                            <option value="Trending">MAK stories</option>
                          </select>
                        </div>
                      </>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>{" "}
          <Button color="primary" onClick={(event) => doEditPost(event)}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Editblog));

"use client"
import ReactDom from "react-dom"
import TechStack from "./TechStack"

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
}

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
}

const Modal = ({ children, project, isModalOpen, closeModal }) => {
  if (!isModalOpen) return null

  return ReactDom.createPortal(
    <>
      <div className="modal" onClick={closeModal} />

      <div className="modal-dialog">
        <div className="modal-header">
          <h4 className="modal-title">{project.titleLong}</h4>
        </div>
        <div className="modal-image">
          <img src={project.image} alt="" />
        </div>
        <div className="modal-body">
          <p className="modal-stack">
            {project.stack.map((item) => {
              const lastItem = project.stack[project.stack.length - 1]
              return item !== lastItem ? `${item} · ` : item
            })}
          </p>

          <ul className="modal-links">
            <li>
              <a className="links-link" href={project.liveUrl} target="_blank">
                <img src="/netlify-logo-cropped.png" alt="" />
                <span>Demo</span>
              </a>
            </li>
            <li>
              <a className="links-link" href={project.repoUrl} target="_blank">
                <img
                  className="github-logo"
                  src="/github-icon-logo-png-transparent.png"
                  alt=""
                />
                <span>Code</span>
              </a>
            </li>
          </ul>

          <div className="modal-details">
            <header className="modal-details-header">ABOUT THIS PROJECT</header>
            <p>
              <span>Client</span>
              {project.client}
            </p>
            <p>
              <span>Goal</span>
              {project.description.goal}
            </p>
            {project.description.inspiration && (
              <p>
                <span>Inspiration</span>
                {project.description.inspiration}
              </p>
            )}
            {project.description.challenge && (
              <p>
                <span>Challenge</span>
                {project.description.challenge}
              </p>
            )}
            {project.description.solution && (
              <p>
                <span>Solution</span>
                {project.description.solution}
              </p>
            )}
            {project.description.future && (
              <p>
                <span>Future Feature</span>
                {project.description.future}
              </p>
            )}
          </div>
        </div>
        {/* END modal-body */}

        <button className="btn" onClick={closeModal}>
          Close
        </button>
      </div>
      {/* END modal-dialog */}
    </>,
    document.getElementById("portal")
  )
}

export default Modal

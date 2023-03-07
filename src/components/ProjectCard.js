import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description,url, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={`https://${url}`}>
      <div className="proj-imgbx">
        <img
          style={{ border: '2px solid white', 
          width:400,height:300,
          borderRadius: 30 }} src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
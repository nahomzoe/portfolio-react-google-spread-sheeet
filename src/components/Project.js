import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Project() {
  return (
    <MDBRow
      className="row-cols-1 row-cols-md-3 g-4"
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2rem 6rem 8rem 6rem",
      }}
    >
      <MDBCol size="md" style={{ maxWidth: "350px" }}>
        <MDBCard>
          <MDBCardImage
            position="top"
            alt="..."
            src="https://mdbootstrap.com/img/new/standard/city/062.webp"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>Some quick example text to build</MDBCardText>
          </MDBCardBody>
          <MDBListGroup flush>
            <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
          </MDBListGroup>
          <MDBCardBody>
            <MDBCardLink href="https://github.com/nahomzoe">
              <i class="fab fa-github"> githab </i>
            </MDBCardLink>
            <MDBCardLink href="#">
              <i class="fas fa-play"> Deployed </i>
            </MDBCardLink>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol size="md" style={{ maxWidth: "350px" }}>
        <MDBCard>
          <MDBCardImage
            position="top"
            alt="..."
            src="https://mdbootstrap.com/img/new/standard/city/062.webp"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>Some quick example text to build</MDBCardText>
          </MDBCardBody>
          <MDBListGroup flush>
            <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
          </MDBListGroup>
          <MDBCardBody>
            <MDBCardLink href="#">
              <i class="fab fa-github"> githab </i>
            </MDBCardLink>
            <MDBCardLink href="#">
              <i class="fas fa-play"> Deployed </i>
            </MDBCardLink>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol size="md" style={{ maxWidth: "350px" }}>
        <MDBCard>
          <MDBCardImage
            position="top"
            alt="..."
            src="https://mdbootstrap.com/img/new/standard/city/062.webp"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>Some quick example text to build</MDBCardText>
          </MDBCardBody>
          <MDBListGroup flush>
            <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
          </MDBListGroup>
          <MDBCardBody>
            <MDBCardLink href="#">
              <i class="fab fa-github"> githab </i>
            </MDBCardLink>
            <MDBCardLink href="#">
              <i class="fas fa-play"> Deployed </i>
            </MDBCardLink>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}

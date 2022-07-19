import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContactForm.css';

function ContactForm() {
  return (
    <Container fluid>
      <Row>
        <div className="text-center mt-3">
          <h2>Cartes PlayStation</h2>
          <Col>
            <form
              className="mt-4"
              name="contact"
              method="post"
              data-netlify="true"
              onSubmit="submit"
            >
              <input
                type="checkbox"
                className="btn-check"
                name="PSN cart[]"
                value="Carte PlayStation Network 10 EUR"
                id="btn-check"
                autocomplete="off"
              />
              <label className="btn btn-primary m-3" for="btn-check">
                Carte PSN 10 EUR
              </label>
              <input
                type="checkbox"
                name="PSN cart[]"
                value="Carte PlayStation Network 15 EUR"
                className="btn-check"
                id="btn-check-2"
                autocomplete="off"
              />
              <label className="btn btn-primary m-3" for="btn-check-2">
                Carte PSN 15 EUR
              </label>
              <input
                type="checkbox"
                name="PSN cart[]"
                value="Carte PlayStation Network 20 EUR"
                className="btn-check"
                id="btn-check-3"
                autocomplete="off"
              />
              <label className="btn btn-primary m-3" for="btn-check-3">
                Carte PSN 20 EUR
              </label>
              <input
                type="checkbox"
                name="PSN cart[]"
                value="Carte PlayStation Network 25 EUR"
                className="btn-check"
                id="btn-check-4"
                autocomplete="off"
              />
              <label className="btn btn-primary m-3" for="btn-check-4">
                Carte PSN 25 EUR
              </label>
              <Row className="mt-3">
                <input type="hidden" name="form-name" value="contact" />
                <Col>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nom"
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Téléphone"
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <textarea
                    type="textarea"
                    name="message"
                    className="form-control"
                    placeholder="Une question ?"
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="d-grid gap-2">
                  <button type="submit" className="btn btn-color">
                    Envoyer
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
          <Row>
            <Col>
              <div className="card mt-4">
                <div className="card-body text__color">
                  <span className="text__color">
                    Envoyez nous votre commande et notre coursier vous
                    contactera dans les plus brefs délais, le paiement se fera à
                    la livraison. Le prix en dinard est calculé selon le taux de
                    change plus 1000 Dinar de commission.
                  </span>
                </div>
              </div>
              <p>* Prix = prix x taux de change + 1000 Dinar</p>
              <Link to="https://m.me/100839852711332/">
                <button type="button" className="btn btn-info">
                  Button
                </button>
              </Link>
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
}

export default ContactForm;

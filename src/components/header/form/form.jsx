import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./form.scss";

const HeaderForm = () => {
  return (
    <Form className="form-container">
      <Form.Group className="form-title-text-container">
        <Form.Label className="form-title">
          Lorem ipsum <br />
          Lorem ipsum lorem ipsum
        </Form.Label>
        <Form.Label className="form-description-text">
          consectetur adipiscing elit. Ut auctor arcu
        </Form.Label>
        <Form.Label className="form-text-message">
          Zostaw kontakt, zadzwonimy do Ciebie
        </Form.Label>
      </Form.Group>
      <Form.Group className="form-input-container">
        <Form.Control
          type="text"
          placeholder="Imię i nazwisko"
          className="form-input"
        />
        <Form.Control
          type="text"
          placeholder="Telefon"
          className="form-input"
        />
        <Form.Control type="email" placeholder="Email" className="form-input" />
        <Form.Control
          type="text"
          placeholder="Lorem ipsum lorem ipsum"
          className="form-input"
        />
      </Form.Group>
      <Form.Group className="form-footer">
        <Form.Switch
          className="form-switch"
          label={
            <Form.Label className="form-footer-text">
              Wyrażam dobrowolną zgodę na przetwarzanie moich danych
              <br /> osobowych więcej...
            </Form.Label>
          }
        />
        <Button className="form-submit">wyślij</Button>
      </Form.Group>
    </Form>
  );
};

export default HeaderForm;

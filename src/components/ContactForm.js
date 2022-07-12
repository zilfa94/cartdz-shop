import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className="contact">
      <h2>Carte cadeau PlayStation pas cher - codes de cartes-cadeaux PSN</h2>
      <form
        name="contact"
        method="post"
        className="contact__form"
        data-netlify="true"
        onSubmit="submit"
      >
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label className="form-check-label" for="inlineCheckbox1">
            Carte PlayStation Network 10 EUR
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label className="form-check-label" for="inlineCheckbox2">
            Carte PlayStation Network 15 EUR
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
          />
          <label className="form-check-label" for="inlineCheckbox3">
            Carte PlayStation Network 20 EUR
          </label>
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <label for="name">Nom: </label>
        <input type="text" name="name" />

        <label for="email">Email: </label>
        <input type="email" name="email" />

        <label for="message">Message: </label>
        <textarea name="message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;

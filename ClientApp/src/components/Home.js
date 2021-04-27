import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <h1>Aplikacja Spamerska</h1>
        <p>Witaj w aplikacji spamerskiej</p>

        <p>Aby zacząć:</p>
        <ul>
          <li><strong>Stwórz konto -> Rejestracja</strong></li>
          <li><strong>Zaloguj się -> Logowanie</strong></li>
          <li><strong>Po zalogowaniu możesz już zarządzać mailingiem - Panel Administracyjny</strong></li>
        </ul>
        
      </div>
    );
  }
}

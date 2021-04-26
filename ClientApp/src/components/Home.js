import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <h1>Aplikacja Spamerska</h1>
        <p>Welcome to your new single-page application, built with:</p>

        <p>Aby zaczac:</p>
        <ul>
          <li><strong>Stworz konto - > Rejestracja</strong></li>
          <li><strong>Zaloguj sie -> Logowanie</strong></li>
          <li><strong>Wejdz w panel administracyjny aby dodac maile</strong></li>
        </ul>
        
      </div>
    );
  }
}

import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <h1>Witaj w aplikacji spamerskiej</h1>
        <p>Aplikacja do wysylania spamu mailowego</p>
        <ul>
          <li>Utworz konto</li>
          <li>Przejdz do panelu administracyjnego</li>
          <li>Dodaj maile</li>
        </ul>

      </div>
    );
  }
}

// HomePage.tsx
import React from 'react';
import './HomePage.scss';
import deco from '../../assets/HomePage.png';

type HomePageProps = {
  isConnected: boolean;
  openModal: () => void;
};

function HomePage({ isConnected, openModal }: HomePageProps) {
  return (
    // Affichage du bouton "Connexion" si l'utilisateur n'est pas connecté (!isConnected)

    <section className="homepage-information-center">
      <div className="side-left-homepage">
        <h1 className="slogan">
          Suivez le rythme.
          <br /> Optimisez vos rendements.
        </h1>
        <div className="description">
          <p>Votre patrimoine, notre expertise.</p>
          <p>
            GestInvest vous offre une plateforme complète pour suivre vos actifs
            et analyser leur performance. GestInvest vous donne les moyens de
            réaliser vos ambitions financières. Explorez de nouvelles
            opportunités dès aujourd&apos;hui avec GestInvest.
          </p>
        </div>
        <div>
          {!isConnected && (
            <button type="button" onClick={openModal}>
              Connexion
            </button>
          )}
        </div>
      </div>

      <div className="side-right-homepage">
        <img src={deco} alt="Illustration du site web" />
      </div>
    </section>
  );
}

export default HomePage;

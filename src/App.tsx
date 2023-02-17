import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import Search from './components/Search';
import isSafeForDogs from './components/isSafeForDogs';

setupIonicReact();

const App: React.FC = () => {
  const [result, setResult] = useState<boolean | null>(null);

  const handleSearch = (query: string) => {
    const safeForDogs = isSafeForDogs(query);

    setResult(safeForDogs);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Is it safe for dogs?</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Search onSearch={handleSearch} />
        {result !== null && (
          <p>{result ? 'Yes, it is safe for dogs to eat!' : 'No, it is not safe for dogs to eat!'}</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default App;

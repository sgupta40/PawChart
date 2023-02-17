import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Search from '../components/Search';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Food Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Search />
      </IonContent>
    </IonPage>
  );
};

export default Home;

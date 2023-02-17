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
        <Search onSearch={function (query: string): void {
          throw new Error('Function not implemented.');
        } }/>
      </IonContent>
    </IonPage>
  );
};

export default Home;

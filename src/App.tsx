import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home } from 'ionicons/icons';
import Home from './pages/Home';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Score from './pages/scores/Score';
import Lessons from './pages/lessons/Lesson';
import Quizzes from './pages/quizzes/Quizzes';
import History from './pages/history/History';
import QuadraticEquation from './pages/lessons/QuadraticEquation';
import QuadraticQuizzes from './pages/quizzes/QuadraticQuiz';
import SplashScreen from './pages/SplashScreen';

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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/splash">
            <SplashScreen />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/score">
            <Score /> {/* Ensure the component is used here */}
          </Route>
          <Route exact path="/lessons">
            <Lessons /> {/* Ensure the component is used here */}
          </Route>
          <Route exact path="/quizzes">
            <Quizzes /> {/* Ensure the component is used here */}
          </Route>
          <Route exact path="/quadraticQuizzes">
            <QuadraticQuizzes /> {/* Ensure the component is used here */}
          </Route>
          <Route exact path="/history">
            <History /> {/* Ensure the component is used here */}
          </Route>
          <Route exact path="/quadraticEquation">
            <QuadraticEquation /> {/* Ensure the component is used here */}
          </Route>
          <Route exact path="/">
            <Redirect to="/splash" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

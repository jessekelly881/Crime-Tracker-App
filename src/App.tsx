import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonFab, IonFabButton, IonIcon, IonTabs, IonTabBar, IonTabButton, IonLabel, IonApp, IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Report from './pages/Report';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faBiohazard } from '@fortawesome/free-solid-svg-icons';

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

const ReportFab: React.FunctionComponent = () => (
    <IonFab style={{marginBottom: "calc(env(safe-area-inset-bottom)/2)"}} vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton color="danger" href="/report">
          <FontAwesomeIcon icon={faBiohazard} size="2x"/>
        </IonFabButton>
    </IonFab>
)

const App: React.FunctionComponent = () => (
    <IonApp>
        <IonReactRouter>
            <IonPage>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route path="/home" component={Home} exact={true} />
                        <Route path="/settings" component={Settings} exact={true} />
                        <Route path="/report" component={Report} exact={true} />
                        <Route exact path="/" render={() => <Redirect to="/home" />} />
                    </IonRouterOutlet>

                    <IonTabBar slot="bottom" color="dark">
                        <IonTabButton tab="home" href="/home">
                            <FontAwesomeIcon icon={faHome} size="lg" />
                            <IonLabel>Home</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="report">
                        </IonTabButton>
                        <IonTabButton tab="settings" href="/settings">
                            <FontAwesomeIcon icon={faCog} size="lg"/>
                            <IonLabel>Settings</IonLabel>
                        </IonTabButton>
                    </IonTabBar>

                </IonTabs>

                <ReportFab />

            </IonPage>
        </IonReactRouter>

    </IonApp>
);

export default App;

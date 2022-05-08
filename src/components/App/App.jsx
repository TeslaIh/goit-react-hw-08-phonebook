import { Routes, Route } from 'react-router-dom';
import { Suspense, useEffect, lazy } from 'react';
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { Text, Center } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import AppBar from 'components/AppBar/AppBar';
import Background from './Background/Back';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

const App = () => {
  
    const dispatch = useDispatch();

    const isFetchingCurrentUser = useSelector(
      state => state.auth.isFetchingCurrentUser
    );
    console.log('isFetchingCurrentUser', isFetchingCurrentUser);

    useEffect(() => {
      dispatch(fetchCurrentUser());
    }, [dispatch]);
  return (
    <>
      <Background />
      <AppBar />
      {!isFetchingCurrentUser ? (
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route element={<PublicRoute />}>
              <Route path="register" element={<RegisterView />} restricted />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<LoginView />} restricted />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="contacts" element={<ContactsView />} />
            </Route>
          </Routes>
        </Suspense>
      ) : (
        <Center>
          <Text color="black.500" my="auto">
            Nothing to show
          </Text>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
          />
        </Center>
      )}
    </>
  );
}

export default App;
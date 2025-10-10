import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/defaultLayout.jsx'
// import LoginLayout from './layouts/loginLayout.jsx'
import Home from './pages/home.jsx'
// import Login from './pages/login.jsx'
// import CreateAccount from './pages/createAccount.jsx'
// import ChangePassword from './pages/changePassword.jsx'
// import Dashboard from './pages/dashboard.jsx'


export default function App() {
    const router = createBrowserRouter([
		{
			path: '/',
			element: (
                <DefaultLayout>
                    <Home />
                </DefaultLayout>
            ),
        },
        // {
        //     path: '/login',
        //     element: (
        //         <LoginLayout>
        //             <Login />
        //         </LoginLayout>
        //     ),
        // },
        // {
        //     path: '/create-account',
        //     element: (
        //         <LoginLayout>
        //             <CreateAccount />
        //         </LoginLayout>
        //     ),
        // },	
        // {
        //     path: '/change-password',
        //     element: (
        //         <LoginLayout>
        //             <ChangePassword />
        //         </LoginLayout>
        //     ),
        // },	
		// {
		// 	path: '/dashboard',
		// 	element: (
        //         <LoginLayout>
        //             <Dashboard />
        //         </LoginLayout>
        //     ),
        // },
		// {
		// 	path: '/mentions-legales',
		// 	element: (
        //         <LoginLayout>
        //             <Legal />
        //         </LoginLayout>
        //     ),
        // },
		// {
		// 	path: '/cgu',
		// 	element: (
        //         <LoginLayout>
        //             <CGU />
        //         </LoginLayout>
        //     ),
        // },
		// {
		// 	path: '/donnees-personnelles',
		// 	element: (
        //         <LoginLayout>
        //             <Data />
        //         </LoginLayout>
        //     ),
        // },
		// {
		// 	path: '/contact',
		// 	element: (
        //         <LoginLayout>
        //             <Contact />
        //         </LoginLayout>
        //     ),
        // },
		// {
		// 	path: '*',
		// 	element: (
        //         <DefaultLayout>
        //             <Home />
        //         </DefaultLayout>
        //     ),
        // }
	]);
	return <RouterProvider router={router} />;
}
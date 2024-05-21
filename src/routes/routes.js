import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Register from '../components/register';
import SignUp from '../components/login';
import VerifyToken from '../components/verifyToken';
import AdminDashboard from '../pages/adminDashboard/Dashboard';
import AdminDoctorMgmt from '../pages/adminDashboard/DoctorMgmt';
import AdminHcfMgmt from  '../pages/adminDashboard/HcfMgmt';
import AdminHospitalMgmt from '../pages/adminDashboard/HospitalMgmt';
import SellerDashboard from '../pages/sellerDashboard/SellerDashboard';
import LeadMgmt from '../pages/sellerDashboard/LeadMgmt';
import PortfolioMgmt from '../pages/sellerDashboard/PortfolioMgmt';
import SellerProfile from '../pages/sellerDashboard/SellerProfile';

const router = createBrowserRouter(
    createRoutesFromElements(
            <Route>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<SignUp />} />
                <Route path='/verifyToken' element={<VerifyToken />} />

                
                <Route path='/admin-dashboard' element={<AdminDashboard/>} />
                <Route path='/admin-doctor-mgmt' element={<AdminDoctorMgmt/>} />
                <Route path='/admin-hcf-mgmt' element={<AdminHcfMgmt/>} />
                <Route path='/admin-hospital-mgmt' element={<AdminHospitalMgmt/>} />

                <Route path='seller-dashboard' element={<SellerDashboard/>}/>
                <Route path='lead-management' element={<LeadMgmt/>}/>
                <Route path='portfolio-management' element={<PortfolioMgmt/>}/>
                <Route path='seller-profile' element={<SellerProfile/>}/>

            </Route>
    )
)

const Index = () => {
    return <RouterProvider router={router} />
}

export default Index;
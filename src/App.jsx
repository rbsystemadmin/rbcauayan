{/*Imported Tools*/ }
import { BrowserRouter, Routes, Route } from 'react-router-dom';
{/*Components of the System*/ }
import ScrollToTop from './components/ScrolltoTop';
{/*Pages  of the WEB*/ }
import Home from "./pages/Homepage/Home";
import ProductServices from "./pages/ProductServices/ProductServices";
import DepositProductsPage from "./pages/ProductServices/DepositProducts/DepositProductsPageFolder/DepositProductsPage";
import BasicSavings from "./pages/ProductServices/DepositProducts/BasicSavingsAccountFolder/BasicSavingsAccount";
import RegularSaving from "./pages/ProductServices/DepositProducts/RegularSavingsAccountFolder/RegularSavingsAccount";
import CheckingAccount from "./pages/ProductServices/DepositProducts/CheckingAccountFolder/CheckingAccount";
import InterestBearingCheckingAccount from './pages/ProductServices/DepositProducts/CheckingAccountFolder/InterestBearingCheckingAccount';
import StudentSavings from "./pages/ProductServices/DepositProducts/StudentSavingsFolder/StudentSavingsDeposit";
import TimeCertofDeposit from "./pages/ProductServices/DepositProducts/TimeCertofDepositFolder/TimeCertOfDeposit";
import LoanProducts from './pages/ProductServices/LoanProducts/LoanProductsPage/LoanProductsPage';
import AgriculturalLoans from './pages/ProductServices/LoanProducts/AgriculturalLoan/AgriculturalLoans';
import AgriMasikapLoan from './pages/ProductServices/LoanProducts/AgriculturalLoan/AgriMasikapLoan/AgriMasikapLoan';
import AgriSagsaganLoan from './pages/ProductServices/LoanProducts/AgriculturalLoan/AgriSagsaganLoan/AgriSagsaganLoan';
import CropLoan from './pages/ProductServices/LoanProducts/AgriculturalLoan/CropLoan/CropLoan';
import CommercialLoans from './pages/ProductServices/LoanProducts/CommercialLoan/CommercialLoans';
import NegoAsensoLoan from './pages/ProductServices/LoanProducts/CommercialLoan/NegoAsensoLoan/NegoAsensoLoan';
import KaAsensoLoan from './pages/ProductServices/LoanProducts/CommercialLoan/KaAsensoLoan/KaAsensoLoan';
import MoneyShopLoan from './pages/ProductServices/LoanProducts/CommercialLoan/MoneyShopLoan/MoneyShopLoan';
import SmallBusinessLoan from './pages/ProductServices/LoanProducts/CommercialLoan/SmallBusinessLoan/SmallBusinessLoan';
import PersonalLoans from './pages/ProductServices/LoanProducts/PersonalLoansPage/PersonalLoans';
import InstaCashLoan from './pages/ProductServices/LoanProducts/PersonalLoansPage/InstaCashLoan/InstaCashLoan';
import VisaLoan from './pages/ProductServices/LoanProducts/PersonalLoansPage/VisaLoan/VisaLoan';
import OtherServices from './pages/ProductServices/OtherServices/OtherServicesPage/OtherServicesPage';
import InterBranch from './pages/ProductServices/OtherServices/InterBranch/InterBranch';
import DomesticRemittance from './pages/ProductServices/OtherServices/DomesticRemittance/DomesticRemittance';
import BillsPayment from './pages/ProductServices/OtherServices/BillsPayment/BillsPayment';
import CompanyProfile from './pages/AboutUs/CompanyProfile/CompanyProfile';
import Careers from './pages/AboutUs/Careers/Careers';
import ContactUs from './pages/AboutUs/ContactUs/ContactUs';
import AnnualReport from './pages/AnnualReport/AnnualReport';
import BalanceSheet from './pages/BalanceSheet/BalanceSheet';
import NewsUpdatePage from './pages/NewsUpdatePage/NewsUpdate';
import Properties from './pages/ROPA/Properties';
import TermsCondition from './pages/Application/TermsCondition';
import LoanApplication from './pages/Application/LoanApplication/LoanApplication';


function App() {

  return (
    <BrowserRouter>
      <div className="App-container">
        <main className='Main-content'>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Products and Services  Sector*/}
            <Route path="/P&S" element={<ProductServices />} />
            {/* Depost Products */}
            <Route path="/P&S/DepositProducts" element={<DepositProductsPage />} />
            <Route path="/deposit/BasicSavings" element={<BasicSavings />} />
            <Route path="/deposit/RegularSavings" element={<RegularSaving />} />
            <Route path="/deposit/CheckingAccount" element={<CheckingAccount />} />
            <Route path='/deposit/InterestBearingCheckingAccount' element={<InterestBearingCheckingAccount />} />
            <Route path="/deposit/StudentSavings" element={<StudentSavings />} />
            <Route path="/deposit/TimeCertofDeposit" element={<TimeCertofDeposit />} />
            {/* Loan Products */}
            <Route path="/P&S/LoanProducts" element={<LoanProducts />} />

            <Route path="/loan/AgriculturalLoans" element={<AgriculturalLoans />} />
            <Route path="/loan/AgriculturalLoans/AgriMasikapLoan" element={<AgriMasikapLoan />} />
            <Route path="/loan/AgriculturalLoans/AgriSagsaganLoan" element={<AgriSagsaganLoan />} />
            <Route path="/loan/AgriculturalLoans/CropLoans" element={<CropLoan />} />

            <Route path="/loan/CommercialLoans" element={<CommercialLoans />} />
            <Route path="/loan/CommercialLoans/NegoAsensoLoan" element={<NegoAsensoLoan />} />
            <Route path="/loan/CommercialLoans/KaAsensoLoan" element={<KaAsensoLoan />} />
            <Route path="/loan/CommercialLoans/SmallBusinessLoan" element={<SmallBusinessLoan />} />
            <Route path="/loan/CommercialLoans/MoneyShopLoan" element={<MoneyShopLoan />} />

            <Route path="/loan/PersonalLoans" element={<PersonalLoans />} />
            <Route path="/loan/PersonalLoans/InstaCashLoan" element={<InstaCashLoan />} />
            <Route path="/loan/PersonalLoans/VisaLoan" element={<VisaLoan />} />
            {/*Other Services */}
            <Route path="/P&S/OtherServices" element={<OtherServices />} />
            <Route path="/other/InterBranch" element={<InterBranch />} />
            <Route path="/other/DomesticRemittance" element={<DomesticRemittance />} />
            <Route path="/other/i2i" element={<BillsPayment />} />
            {/*About Us */}
            <Route path="/A&U/CompanyProfile" element={<CompanyProfile />} />
            <Route path="/A&U/Careers" element={<Careers />} />
            <Route path="/A&U/ContactUs" element={<ContactUs />} />
            <Route path="/A&U/AnnualReport" element={<AnnualReport />} />
            <Route path="/A&U/BalanceSheet" element={<BalanceSheet />} />
            {/*News and Update */}
            <Route path="/N&U" element={<NewsUpdatePage />} />
            {/* Properties */}
            <Route path='/ROPA' element={<Properties />} />
            {/*Terms and Conditions page and another set of page again */}
            <Route path="/T&C" element={<TermsCondition />} />

            <Route path="/ApplyLoan" element={<LoanApplication />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;   
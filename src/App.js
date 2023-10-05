import "./styles.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";

/**
 * https://stackoverflow.com/questions/71414067/browserrouter-basename-prop-issue-when-upgrading-to-v6
 */

const ProtectedRoutes = () => <Outlet />;

const Configuration = () => <h1>Configuration</h1>;
const SummaryPage = () => <h1>SummaryPage</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const Appointments = () => <h1>Appointments</h1>;
const NotFound = () => <h1>NotFound</h1>;

export default function App() {
  return (
    <BrowserRouter basename="/config2">
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route
              path="/configuration/configure"
              element={<Configuration />}
            />
            <Route path="/configuration" element={<SummaryPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route
              path="/"
              element={<Navigate replace to="/configuration" />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

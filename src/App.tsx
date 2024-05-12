import { Layout } from "./components";
import { Dashboard, Form, Manage, NotFound, Home, Test, AddProducts, Settings, Profile, Account, Appearance, Display, Advance } from "./pages"
import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <div>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Form Pages */}
        <Route path="/login" element={<Form />} />
        <Route path="/register" element={<Form />} />

        {/* Dashboard Pages */}
        <Route path="/" element={<Layout />}>
          <Route path="/test" element={<Test />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/add-products" element={<AddProducts />} />
        </Route>

        {/* Settings Pages */}
        <Route path="/settings" element={<Settings />}>
          <Route path="/settings/profile" element={<Profile />} />
          <Route path="/settings/account" element={<Account />} />
          <Route path="/settings/appearance" element={<Appearance />} />
          <Route path="/settings/display" element={<Display />} />
          <Route path="/settings/advance" element={<Advance />} />
        </Route>

        {/* Error 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

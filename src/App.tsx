import { Layout } from "./components";
import { Dashboard, Form, Manage, NotFound, Home, Test, AddProducts } from "./pages"
import { Route, Routes, useLocation } from "react-router-dom"

export default function App() {
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/login" element={<Form />} />
        <Route path="/register" element={<Form />} />

        <Route path="/" element={<Layout />}>
          <Route path="/test" element={<Test />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/add-products" element={<AddProducts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

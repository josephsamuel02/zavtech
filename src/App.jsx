import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import PUBLICROUTES from "./utils/PublicRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={PUBLICROUTES.HOME} element={<Home />} />
        {/* <Route path={PUBLICROUTES.PROPERTIES} element={<Products />} />
        <Route path={`${PUBLICROUTES.REQUEST_FORM}/:id`} element={<RequestForm />} />
        <Route path={PUBLICROUTES.ABOUT_US} element={<About />} />
        <Route path={PUBLICROUTES.CONTACT_US} element={<Contact />} />
        <Route path={PUBLICROUTES.GALLERY} element={<Gallery />} />

        <Route path={PUBLICROUTES.ADMIN_LOGIN} element={<AdminLogin />} />
        <Route path={PUBLICROUTES.ADMIN} element={<LogInPage />} />
        <Route path={PUBLICROUTES.REQUESTS} element={<Requests />} />
        <Route path={PUBLICROUTES.ALL_PRODUCTS} element={<AdminProducts />} />
        <Route path={PUBLICROUTES.UPLOAD_PRODUCT} element={<UploadProducts />} />
        <Route path={PUBLICROUTES.UPLOAD_IMAGES} element={<UploadToGallery />} />

        <Route path={`${PUBLICROUTES.EDIT_PRODUCT}/:id`} element={<EditProduct />} /> */}

        {/* <Route path={"*"} element={<Page404 />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;

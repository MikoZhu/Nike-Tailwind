import "./index.css";
// import { TailwindPractice } from "./practice/TailwindPractice";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import { Nav } from "./components/Nav";
export const App = () => {
  return (
    <main className="relative">
      {/* <TailwindPractice /> */}
      <Nav />
      <section className="x1:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x bg-black padding-t pb-28">
        <Footer />
      </section>
    </main>
  );
};

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const business = {
  imageSrc:
    "https://cdn.pixabay.com/photo/2021/04/26/12/31/kebab-6208833_1280.jpg",
  name: "Nabab",
  address: "404 road Forbidden",
  city: "Somewhere",
  state: "France",
  zipCode: "10101",
  category: "Turkish",
  rating: 4,
  reviewCount: 90,
};

const businesses = [business, business, business, business, business, business];

function App() {
  return (
    <>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </>
  );
}

export default App;

// css
import "./css/styles.css";

// components
import Header from "./components/layout/Header";
import CarouselContainer from "./components/carousel/CarouselContainer";
import ChartComponent from "./components/charts/ChartComponent";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <main className="container" data-testid="app-container">
      {/* including the Title and other components */}
      <Header />
      <CarouselContainer />
      <ChartComponent />
      <Timeline />
    </main>
  );
};

export default App;

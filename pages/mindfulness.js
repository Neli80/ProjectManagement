import Header from "../components/Header";
import Footer from "../components/Footer";
import PageContent from "../components/PageContent";
import data from "../data";

const Mindfulness = () => {
  return (
    <div>
      <Header />
      <main style={mainStyle}>
        <div style={contentStyle}>
          <h1>Mindfulness</h1>
          <p>
            Mindfulness is the practice of being present and fully engaged with
            the current moment. It involves paying attention to your thoughts,
            feelings, and surroundings without judgment. Regular mindfulness
            practice can reduce stress, enhance emotional well-being, and
            improve overall mental health.
          </p>
          <PageContent
            title={data.mindfulness.title}
            sections={data.mindfulness.sections}
          />
        </div>
        <div style={imageContainerStyle}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/914/728/non_2x/mental-health-illustration-concept-self-meditation-mental-growth-yoga-mindfulness-free-vector.jpg"
            alt="Mindfulness"
            style={imageStyle}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const mainStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2em",
  backgroundColor: "#f0f8ff", // Light blue background
};

const contentStyle = {
  flex: 1,
  maxWidth: "50%",
  paddingRight: "1em",
  textAlign: "left", // Align text to the left
};

const imageContainerStyle = {
  flex: 1,
  maxWidth: "50%",
  display: "flex",
  justifyContent: "center",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "600px", // Adjust as needed
};

export default Mindfulness;

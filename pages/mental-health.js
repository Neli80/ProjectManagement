import Header from "../components/Header";
import Footer from "../components/Footer";
import PageContent from "../components/PageContent";
import data from "../data";

const MentalHealth = () => {
  return (
    <div>
      <Header />
      <main style={mainStyle}>
        <div style={contentStyle}>
          <h1>Mental Health</h1>
          <p>
            Mental health encompasses emotional, psychological, and social
            well-being. It affects how we think, feel, and act, and how we
            handle stress, relate to others, and make decisions. Maintaining
            good mental health is crucial for leading a balanced and fulfilling
            life.
          </p>
          <PageContent
            title={data.mentalHealth.title}
            sections={data.mentalHealth.sections}
          />
        </div>
        <div style={imageContainerStyle}>
          <img
            src="https://ca-times.brightspotcdn.com/dims4/default/ee0661e/2147483647/strip/true/crop/2000x1333+0+0/resize/2000x1333!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8e%2Fb7%2F99beae9a4be0bbced1487b04b619%2Fla-hm-nyny-mental-health.jpg"
            alt="Mental Health"
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

export default MentalHealth;

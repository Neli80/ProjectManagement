import Header from "../components/Header";
import Footer from "../components/Footer";
import PageContent from "../components/PageContent";
import data from "../data";

const Sleep = () => {
  return (
    <div>
      <Header />
      <main style={mainStyle}>
        <div style={contentStyle}>
          <h1>Sleep</h1>
          <p>
            Sleep is a natural, reversible state of reduced responsiveness to
            external stimuli and decreased muscle activity. It is essential for
            maintaining various physiological and psychological functions.
            Research indicates that adults typically need 7-9 hours of sleep per
            night.
          </p>
          <PageContent
            title={data.sleep.title}
            sections={data.sleep.sections}
          />
        </div>
        <div style={imageContainerStyle}>
          <img
            src="https://t3.ftcdn.net/jpg/02/68/79/78/360_F_268797880_ZXUXtIyCSnB132xxJOUQcnTusxiTQFGp.jpg"
            alt="Sleep"
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

export default Sleep;

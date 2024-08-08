import Header from "../components/Header";
import Footer from "../components/Footer";
import PageContent from "../components/PageContent";
import data from "../data";
import Image from 'next/image';

const SocialWellbeing = () => {
  return (
    <div>
      <Header />
      <main style={mainStyle}>
        <div style={contentStyle}>
          <h1>Social Well-being</h1>
          <p>
            Social well-being refers to the quality of relationships and
            interactions with others. It includes having supportive social
            networks, engaging in meaningful activities, and contributing to
            one’s community. Healthy social relationships are essential for
            mental and emotional health.
          </p>
          <PageContent
            title={data.socialWellbeing.title}
            sections={data.socialWellbeing.sections}
          />
        </div>
        <div style={imageContainerStyle}>
          <Image
            src="/images/social-wellbeing.jpg"
            alt="Social Well-being"
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
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "600px", // Adjust as needed
};

export default SocialWellbeing;
